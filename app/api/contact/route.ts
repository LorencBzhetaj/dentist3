import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Forwards appointment requests to a configured destination. Success is returned only when
 * the destination accepted the request — nothing is simulated.
 *
 * Configure with CONTACT_WEBHOOK_URL (any endpoint that accepts a JSON POST, e.g. Make,
 * Zapier, n8n, Formspree or a Google Apps Script). Optional CONTACT_WEBHOOK_TOKEN is sent
 * as a Bearer token.
 */
export async function POST(req: NextRequest) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ code: "not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ code: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ code: "invalid" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ code: "invalid", details: parsed.error.flatten() }, { status: 400 });
  }

  const { honeypot, consent, ...data } = parsed.data;
  if (honeypot) {
    // Bot: pretend success without forwarding.
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        type: "appointment_request",
        source: "website",
        receivedAt: new Date().toISOString(),
        consent,
        ...data,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("Contact webhook responded with", res.status);
      return NextResponse.json({ code: "delivery_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact webhook failed", error);
    return NextResponse.json({ code: "delivery_failed" }, { status: 502 });
  }
}

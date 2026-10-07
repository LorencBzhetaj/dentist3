import { z } from "zod";
import { locales } from "./i18n";
import { serviceSlugs } from "@/data/services";

// Messages are dictionary keys (form.errors.*) so the client can show them in the active language.
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "name").max(100, "name"),
  phone: z
    .string()
    .trim()
    .min(6, "phone")
    .max(20, "phone")
    .regex(/^[+\d\s\-()]+$/, "phone"),
  email: z.union([z.literal(""), z.string().trim().email("email")]).optional(),
  service: z.enum([...serviceSlugs, "other"], { message: "service" }),
  preferredDate: z.string().max(10).optional(),
  message: z.string().max(1000, "message").optional(),
  consent: z.literal(true, { message: "consent" }),
  locale: z.enum(locales).optional(),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactErrorKey = "name" | "phone" | "email" | "service" | "message" | "consent";

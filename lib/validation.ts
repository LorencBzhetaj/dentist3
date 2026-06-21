import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(6, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Invalid phone number format"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().optional(),
  message: z.string().max(1000, "Message too long").optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

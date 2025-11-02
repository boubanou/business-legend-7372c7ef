import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company must be less than 100 characters").optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

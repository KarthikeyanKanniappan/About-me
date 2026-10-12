import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().max(150, "Keep the subject under 150 characters."),
  message: z
    .string()
    .min(10, "Your message needs at least 10 characters.")
    .max(5000, "Keep your message under 5000 characters."),
});

export type ContactFields = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactFields;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string[]>>;
  values?: Partial<ContactFields>;
};

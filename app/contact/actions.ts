"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSchema, type ContactFields, type ContactState } from "./schema";

const fields = ["firstName", "lastName", "email", "subject", "message"] as const;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see this field, so pretend it worked.
  if (String(formData.get("company") ?? "") !== "") {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const values = Object.fromEntries(
    fields.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  ) as ContactFields;

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return {
      status: "error",
      message: "The contact form isn't set up yet. Please email me directly instead.",
      values,
    };
  }

  const { firstName, lastName, email, subject, message } = parsed.data;
  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${firstName} ${lastName}`,
    text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend failed", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email me directly.",
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent." };
}

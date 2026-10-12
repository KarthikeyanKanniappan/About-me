"use client";

import { useActionState } from "react";
import { sendMessage } from "@/app/contact/actions";
import type { ContactField, ContactState } from "@/app/contact/schema";

const initialState: ContactState = { status: "idle" };

type FieldProps = {
  name: ContactField;
  label: string;
  state: ContactState;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  className?: string;
};

function Field({ name, label, state, required, type = "text", autoComplete, multiline, className }: FieldProps) {
  const error = state.fieldErrors?.[name]?.[0];
  const errorId = `${name}-error`;
  const inputProps = {
    id: name,
    name,
    required,
    autoComplete,
    defaultValue: state.values?.[name] ?? "",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className:
      "mt-2 w-full rounded-none border border-ink bg-white px-3 py-2 font-normal focus-visible:outline-2 focus-visible:outline-offset-2 aria-invalid:border-accent-red",
  };

  return (
    <div className={className}>
      <label htmlFor={name} className="font-normal">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      {multiline ? <textarea rows={6} {...inputProps} /> : <input type={type} {...inputProps} />}
      {error && (
        <p id={errorId} className="mt-1 text-sm font-normal text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <form action={formAction} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field name="firstName" label="First Name" autoComplete="given-name" required state={state} />
      <Field name="lastName" label="Last Name" autoComplete="family-name" required state={state} />
      <Field name="email" label="Email" type="email" autoComplete="email" required state={state} className="sm:col-span-2" />
      <Field name="subject" label="Subject" state={state} className="sm:col-span-2" />
      <Field name="message" label="Message" multiline required state={state} className="sm:col-span-2" />

      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-sm text-muted sm:col-span-2">* Required</p>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent-orange px-6 py-3 font-heading text-lg font-semibold text-ink transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
      >
        {pending ? "Sending…" : "Submit"}
      </button>

      <p
        aria-live="polite"
        className={`font-normal sm:col-span-2 ${state.status === "error" ? "text-red-700" : "text-ink"}`}
      >
        {state.message}
      </p>
    </form>
  );
}

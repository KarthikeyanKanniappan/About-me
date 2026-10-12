import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageTitle } from "@/components/PageTitle";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <div className="container-page grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <div>
        <PageTitle>Contact</PageTitle>
        <p className="mt-6 text-lg">Looking forward to hearing from you.</p>
        <dl className="mt-10 space-y-6">
          {profile.phone && (
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {profile.phone}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="font-semibold">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}

import { profile } from "@/content/profile";
import { SocialIcon, type SocialNetwork } from "./SocialIcon";

const socialLabels: Record<SocialNetwork, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  x: "X (Twitter)",
};

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const socials = (Object.keys(socialLabels) as SocialNetwork[]).filter(
    (network) => profile.socials[network],
  );

  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-8 py-12 text-sm sm:grid-cols-2 md:grid-cols-4">
        {profile.phone && (
          <div>
            <h2 className="mb-2 font-semibold">Phone</h2>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:underline">
              {profile.phone}
            </a>
          </div>
        )}
        <div>
          <h2 className="mb-2 font-semibold">Email</h2>
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
        </div>
        <div>
          <h2 className="mb-2 font-semibold">Follow Me</h2>
          <ul className="flex gap-4">
            {socials.map((network) => (
              <li key={network}>
                <a
                  href={profile.socials[network]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLabels[network]}
                  className="block transition-opacity hover:opacity-60"
                >
                  <SocialIcon network={network} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-muted md:col-start-4 md:self-end md:text-right">
          © <CopyrightYear /> {profile.name}
        </p>
      </div>
    </footer>
  );
}

// TODO: replace the dummy data below with your own details.
export type Profile = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  phone?: string;
  email: string;
  location: string;
  socials: { linkedin?: string; github?: string; x?: string };
};

export const profile: Profile = {
  name: "Alex Morgan",
  role: "Full-Stack Engineer",
  bio: "I build fast, accessible web apps with React, Next.js and TypeScript. I care about clean interfaces, solid foundations and shipping things people actually use.",
  photo: "/images/profile.svg",
  email: "hello@example.com",
  location: "Chennai, India",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    x: "https://x.com/",
  },
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
  name: "Karthikeyan Kanniappan",
  role: "Full-Stack Engineer",
  bio: "Full-stack engineer building for the AI era. I create agents, MCP connectors and Claude Skills, and the tools that make existing apps agent-friendly.",
  photo: "/images/profile.jpg",
  email: "kartii.321@gmail.com",
  location: "Chennai, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/karthikeyan-k-816662149",
    github: "https://github.com/KarthikeyanKanniappan",
  },
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

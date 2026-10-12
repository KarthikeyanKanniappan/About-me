// TODO: replace the dummy data below with your own experience.
export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  description: string;
};

export const experience: TimelineEntry[] = [
  {
    period: "2023 – Present",
    title: "Module Lead",
    org: "Acme Software",
    description:
      "Lead a team of five building the desktop client and its web dashboard. Own architecture, code review and release planning.",
  },
  {
    period: "2021 – 2023",
    title: "Senior Frontend Engineer",
    org: "Northwind Labs",
    description:
      "Rebuilt the customer portal in React and TypeScript, cutting page load time by 40% and introducing a shared component library.",
  },
  {
    period: "2019 – 2021",
    title: "Software Engineer",
    org: "Globex",
    description:
      "Built REST APIs and internal tools, and moved the team from manual deploys to CI/CD.",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2015 – 2019",
    title: "B.E. Computer Science",
    org: "Anna University",
    description: "Focused on distributed systems and human-computer interaction.",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Electron",
  "Tailwind CSS",
  "REST & WebSockets",
  "PostgreSQL",
  "Testing (Jest, Playwright)",
  "CI/CD",
];

// Set to the file name in /public (e.g. "/resume.pdf") once you add your CV.
export const cvUrl: string | null = null;

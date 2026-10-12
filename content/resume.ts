export type TimelineEntry = {
  period: string;
  title: string;
  org?: string;
  description?: string;
};

export const experience: TimelineEntry[] = [
  {
    period: "Apr 2023 – Present",
    title: "Junior Software Engineer",
    org: "Full Creative Pvt Ltd, Chennai",
  },
  {
    period: "May 2021 – Jun 2022",
    title: "Design Engineer",
    org: "APA Engineering Pvt Ltd, Chennai",
  },
  {
    period: "Feb 2018 – Feb 2021",
    title: "Junior Engineer",
    org: "Wheels India Pvt Ltd, Chennai",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2013 – 2017",
    title: "B.E. Mechanical Engineering",
    org: "JNN Institute of Engineering (affiliated to Anna University)",
  },
];

export const certifications: TimelineEntry[] = [
  {
    period: "Nov 2022",
    title: "Full Stack Development",
    org: "GUVI Geek Networks, IITM Research Park",
  },
];

// TODO: replace with your own skills.
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

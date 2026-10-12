// TODO: replace the dummy data below with your own projects.
export type Project = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Realtime Team Chat",
    description:
      "A desktop chat client with presence, typing indicators and offline sync, built on WebSockets and Electron.",
    image: "/images/project-1.svg",
    tags: ["Electron", "React", "WebSockets"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/",
  },
  {
    title: "Appointment Dashboard",
    description:
      "An analytics dashboard for a booking platform: filters, charts and CSV export over millions of rows.",
    image: "/images/project-2.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
  {
    title: "Screen Snip Tool",
    description:
      "A lightweight screenshot and annotation utility with keyboard-first controls and instant sharing.",
    image: "/images/project-3.svg",
    tags: ["Tauri", "Rust", "React"],
    codeUrl: "https://github.com/",
  },
];

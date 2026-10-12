export type Project = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  liveUrl?: string;
  codeUrl?: string;
};

// Add projects here; the Projects page shows "coming soon" while this is empty.
export const projects: Project[] = [];

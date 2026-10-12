import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { ResumeSection } from "@/components/ResumeSection";
import { TimelineItem } from "@/components/TimelineItem";
import { cvUrl, education, experience, skills } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Work experience, education and skills.",
};

export default function ResumePage() {
  return (
    <div className="container-page">
      <div className="flex flex-wrap items-center justify-between gap-6 py-16 md:py-24">
        <PageTitle>Resume</PageTitle>
        {cvUrl && (
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 font-semibold transition-transform hover:scale-105"
          >
            <Download aria-hidden className="size-4" />
            Download CV (PDF)
          </a>
        )}
      </div>

      <ResumeSection title="Work Experience">
        <div className="space-y-12">
          {experience.map((entry) => (
            <TimelineItem key={`${entry.period}-${entry.title}`} {...entry} />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="space-y-12">
          {education.map((entry) => (
            <TimelineItem key={`${entry.period}-${entry.title}`} {...entry} />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Skills & Expertise">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-3">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent-orange" />
              {skill}
            </li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  );
}

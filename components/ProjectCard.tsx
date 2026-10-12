import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const { title, description, image, tags, liveUrl, codeUrl } = project;

  return (
    <article
      className={`flex flex-col gap-8 border-t border-line py-16 md:items-center md:gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-4 leading-relaxed">{description}</p>

        {tags && tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag} className="border border-ink px-3 py-1 text-sm font-normal">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(liveUrl || codeUrl) && (
          <div className="mt-6 flex gap-6 font-semibold">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <ExternalLink aria-hidden className="size-4" />
                Live<span className="sr-only"> site for {title}</span>
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <Code aria-hidden className="size-4" />
                Code<span className="sr-only"> for {title}</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="relative aspect-4/3 overflow-hidden border border-ink md:w-1/2">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          unoptimized={image.endsWith(".svg")}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}

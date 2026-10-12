import type { TimelineEntry } from "@/content/resume";

export function TimelineItem({ period, title, org, description }: TimelineEntry) {
  return (
    <article className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
      <p className="text-muted sm:w-44 sm:shrink-0">{period}</p>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {org && <p className="text-muted">{org}</p>}
        {description && <p className="mt-2 leading-relaxed">{description}</p>}
      </div>
    </article>
  );
}

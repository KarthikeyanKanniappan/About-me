import Image from "next/image";
import { CircleButton } from "@/components/CircleButton";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <section className="container-page grid items-center gap-10 py-12 md:grid-cols-[2fr_3fr] md:gap-16 md:py-24">
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={600}
        height={600}
        priority
        unoptimized={profile.photo.endsWith(".svg")}
        sizes="(min-width: 768px) 320px, (min-width: 640px) 256px, 192px"
        className="mx-auto aspect-square w-48 rounded-full sm:w-64 md:w-full md:max-w-xs object-cover"
      />

      <div>
        <h1 className="text-7xl font-bold md:text-8xl">Hello</h1>
        <h2 className="mt-8 text-2xl font-semibold">A Bit About Me</h2>
        <p className="mt-4 max-w-prose text-lg leading-relaxed">{profile.bio}</p>
        <div className="mt-10 flex flex-wrap gap-4 md:gap-6">
          <CircleButton href="/resume" label="Resume" color="orange" />
          <CircleButton href="/projects" label="Projects" color="red" />
          <CircleButton href="/contact" label="Contact" color="teal" />
        </div>
      </div>
    </section>
  );
}

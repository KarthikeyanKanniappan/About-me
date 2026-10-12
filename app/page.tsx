import Image from "next/image";
import { CircleButton } from "@/components/CircleButton";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={600}
        height={600}
        priority
        unoptimized={profile.photo.endsWith(".svg")}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="mx-auto aspect-square w-full max-w-md rounded-full object-cover grayscale"
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

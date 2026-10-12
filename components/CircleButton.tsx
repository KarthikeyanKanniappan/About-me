import Link from "next/link";

const colors = {
  orange: "bg-accent-orange",
  red: "bg-accent-red",
  teal: "bg-accent-teal",
} as const;

type CircleButtonProps = {
  href: string;
  label: string;
  color: keyof typeof colors;
};

export function CircleButton({ href, label, color }: CircleButtonProps) {
  return (
    <Link
      href={href}
      className={`${colors[color]} grid size-24 place-items-center rounded-full border border-ink font-heading font-bold text-ink sm:text-lg transition-transform hover:scale-105 sm:size-28 md:size-36`}
    >
      {label}
    </Link>
  );
}

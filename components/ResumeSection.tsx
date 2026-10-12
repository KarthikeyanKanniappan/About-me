export function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-line py-16 md:grid-cols-3 md:py-24">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="md:col-span-2">{children}</div>
    </section>
  );
}

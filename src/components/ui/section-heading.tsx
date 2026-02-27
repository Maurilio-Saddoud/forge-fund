type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/85">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-lg leading-8 text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-right";
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      {eyebrow && (
        <span className="rounded-full bg-rose-soft-100 px-4 py-1 text-xs font-bold text-rose-soft-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-snug text-plum-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-8 text-plum-600">
          {description}
        </p>
      )}
      <span className="mt-1 h-1 w-20 rounded-full bg-gradient-to-l from-rose-soft-400 to-gold-400" />
    </div>
  );
}

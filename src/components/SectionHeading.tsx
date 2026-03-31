interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-20 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-brand-purple font-semibold text-xs tracking-[0.25em] uppercase mb-6">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
        {title}{" "}
        {highlight && <span className="text-brand-purple">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={`mt-8 text-brand-gray-300 text-lg leading-relaxed font-light ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

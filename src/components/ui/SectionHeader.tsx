interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-[13px] font-semibold font-mono text-[var(--color-accent)] uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[32px] font-bold text-[var(--color-text-primary)] leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

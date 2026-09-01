interface TimelineItemProps {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  tools?: string[];
  isLast?: boolean;
}

export function TimelineItem({
  organization,
  role,
  startDate,
  endDate,
  location,
  responsibilities,
  tools = [],
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline track */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-background)] ring-2 ring-[var(--color-accent)] ring-opacity-30 mt-1.5" />
        {/* Line */}
        {!isLast && (
          <div className="flex-1 w-px bg-[var(--color-border)] mt-2 min-h-[40px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        {/* Date */}
        <p className="text-[12px] font-mono font-medium text-[var(--color-text-muted)] mb-2 uppercase tracking-wide">
          {startDate} – {endDate}
        </p>

        {/* Role */}
        <h3 className="text-[18px] font-semibold text-[var(--color-text-primary)] leading-snug">
          {role}
        </h3>

        {/* Org + location */}
        <p className="text-[15px] text-[var(--color-accent)] font-medium mt-0.5">
          {organization}
          <span className="text-[var(--color-text-muted)] font-normal"> · {location}</span>
        </p>

        {/* Responsibilities */}
        <ul className="mt-4 space-y-2">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tools */}
        {tools.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-[12px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-[6px] bg-[var(--color-surface-subtle)]"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

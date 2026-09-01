import type { ReactNode } from 'react';

type MessageType = 'success' | 'error' | 'info';

interface FormMessageProps {
  type: MessageType;
  children: ReactNode;
  'data-testid'?: string;
}

const styles: Record<MessageType, { wrapper: string; icon: ReactNode }> = {
  success: {
    wrapper:
      'bg-[var(--color-surface-subtle)] border border-[var(--color-success)] text-[var(--color-success)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>
      </svg>
    ),
  },
  error: {
    wrapper:
      'bg-[var(--color-surface-subtle)] border border-[var(--color-error)] text-[var(--color-error)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    ),
  },
  info: {
    wrapper:
      'bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-[var(--color-text-secondary)]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    ),
  },
};

export function FormMessage({ type, children, 'data-testid': testId }: FormMessageProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-testid={testId}
      className={`flex items-start gap-3 p-4 rounded-md text-[14px] font-medium ${styles[type].wrapper}`}
    >
      <span className="flex-shrink-0 mt-0.5">{styles[type].icon}</span>
      <span>{children}</span>
    </div>
  );
}

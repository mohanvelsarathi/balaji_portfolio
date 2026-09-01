import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  error?: string;
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

interface TextareaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
  rows?: number;
}

type FormInputProps = InputProps | TextareaProps;

const baseInputClasses = [
  'w-full px-4 py-3 rounded-md',
  'bg-[var(--color-surface)] text-[var(--color-text-primary)]',
  'border border-[var(--color-border)]',
  'placeholder:text-[var(--color-text-muted)]',
  'text-[15px] leading-relaxed',
  'transition-colors duration-150',
  'focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-20',
  'disabled:opacity-60 disabled:cursor-not-allowed',
].join(' ');

const errorInputClasses = 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]';

export function FormInput(props: FormInputProps) {
  const { id, label, error, required, as } = props;
  const errorId = id ? `${id}-error` : undefined;

  const sharedProps = {
    id,
    required,
    'aria-invalid': error ? ('true' as const) : undefined,
    'aria-describedby': error && errorId ? errorId : undefined,
    className: `${baseInputClasses} ${error ? errorInputClasses : ''}`,
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[14px] font-medium text-[var(--color-text-primary)]"
      >
        {label}
        {required && (
          <span className="text-[var(--color-error)] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea
          {...(props as TextareaProps)}
          {...sharedProps}
          rows={(props as TextareaProps).rows ?? 4}
          style={{ resize: 'vertical', minHeight: '100px' }}
        />
      ) : (
        <input
          {...(props as InputProps)}
          {...sharedProps}
        />
      )}

      {error && errorId && (
        <p id={errorId} role="alert" className="text-[13px] text-[var(--color-error)] flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

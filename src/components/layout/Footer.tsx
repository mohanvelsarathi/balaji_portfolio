import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-16">
      <Container>
        <div className="flex items-center justify-center text-center w-full">
          <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] font-medium tracking-wide">
            @2026 Balaji S
          </p>
        </div>
      </Container>
    </footer>
  );
}

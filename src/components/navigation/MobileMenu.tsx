import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavItem[];
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, activeSection }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus first item when opened
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const navHeight = 64;
        const top = (el as HTMLElement).offsetTop - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300); // Increased timeout slightly to allow exit animation to run
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            data-testid="mobile-menu"
            className="fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-[var(--shadow-elevated)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
              <span className="font-bold text-[var(--color-text-primary)]">Balaji S</span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-9 h-9 rounded-md flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const sectionId = link.url.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    ref={i === 0 ? firstFocusableRef : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.url);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'px-4 py-3 rounded-md text-[15px] font-medium transition-colors duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
                      isActive
                        ? 'text-[var(--color-accent)] bg-[var(--color-surface-subtle)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]',
                    ].join(' ')}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Footer actions */}
            <div className="p-4 border-t border-[var(--color-border)]">
              <a
                href="/Balaji-S-Java-Developer-Resume.pdf"
                download="Balaji-S-Java-Developer-Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md text-[14px] font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

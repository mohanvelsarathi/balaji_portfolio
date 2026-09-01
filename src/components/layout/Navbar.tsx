import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ThemeToggle } from '../navigation/ThemeToggle';
import { MobileMenu } from '../navigation/MobileMenu';
import { useActiveSection } from '../../hooks/useActiveSection';
import { User, Code, Briefcase, Award, GraduationCap, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

const NAV_ITEMS = [
  { name: 'Home', url: '#home', icon: User },
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#skills', icon: Code },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Education', url: '#education', icon: GraduationCap },
  { name: 'Contact', url: '#contact', icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 64;
      const top = el.offsetTop - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const currentActive = activeSection 
    ? NAV_ITEMS.find(item => item.url.replace('#', '') === activeSection)?.name || NAV_ITEMS[0].name
    : NAV_ITEMS[0].name;

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300 md:top-6',
          'bg-transparent'
        )}
      >
        <Container className="h-16 md:h-24 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
          
          {/* Left: Logo */}
          <div className="flex justify-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-bold text-[17px] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
            >
              Balaji S
            </a>
          </div>

          {/* Center: Main Navigation (Desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentActive === item.name;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => handleNavClick(e, item.url)}
                  className={cn(
                    "relative cursor-pointer text-[13.5px] font-medium px-5 py-2 rounded-full transition-colors duration-300",
                    isActive 
                      ? "text-white dark:text-slate-950"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/10"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 inline">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />

            {/* Download Resume — desktop */}
            <a
              href="/Balaji-S-Java-Developer-Resume.pdf"
              download="Balaji-S-Java-Developer-Resume.pdf"
              data-testid="nav-resume-btn"
              className={cn(
                'hidden md:inline-flex items-center gap-1.5',
                'px-5 py-2 rounded-full text-[13px] font-semibold',
                'bg-[var(--color-accent)] text-white',
                'hover:bg-[var(--color-accent-hover)] hover:text-white transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2',
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
              className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}

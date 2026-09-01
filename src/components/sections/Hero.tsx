import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { profile } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const role = 'Java Backend Developer';
    let currentCharIndex = 0;
    let timeoutId: number;

    const type = () => {
      setDisplayText(role.slice(0, currentCharIndex + 1));
      currentCharIndex++;

      if (currentCharIndex < role.length) {
        timeoutId = window.setTimeout(type, 80);
      }
    };

    timeoutId = window.setTimeout(type, 500);

    return () => window.clearTimeout(timeoutId);
  }, []);
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="min-h-screen flex items-center pt-16"
      style={{ background: 'var(--color-background)' }}
    >
      <Container className="w-full py-20 md:py-0">
        <div className="flex flex-col text-center lg:text-left lg:grid lg:grid-cols-[55fr_45fr] gap-y-10 lg:gap-y-6 lg:gap-x-16 items-center lg:items-start lg:py-32">
          
          {/* Left Column: Text Content & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start w-full gap-6 lg:gap-8 lg:mt-24"
          >
            
            <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start w-full">
              {/* Name */}
              <h1 className="text-[30px] sm:text-[40px] lg:text-[56px] font-bold text-[var(--color-text-primary)] leading-[1.05] tracking-tight">
                {profile.name}
              </h1>
              {/* Headline */}
              <p className="text-[15px] sm:text-[18px] lg:text-[24px] font-semibold text-[var(--color-text-secondary)] mt-2 lg:mt-3 min-h-[1.5em]" aria-label="Java Backend Developer">
                {displayText}
                {displayText !== 'Java Backend Developer' && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            </motion.div>

            {/* Supporting copy */}
            <motion.p variants={itemVariants} className="text-[14px] sm:text-[15px] lg:text-[17px] text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0 lg:mb-6">
              {profile.heroCopy}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 w-full px-4 sm:px-0">
              {/* Primary */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 lg:px-6 lg:py-3 rounded-md font-semibold text-[14px] lg:text-[15px] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:text-white transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.a>

              {/* Secondary */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={profile.resumeUrl}
                download={profile.resumeFilename}
                data-testid="hero-resume-download"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 lg:px-6 lg:py-3 rounded-md font-semibold text-[14px] lg:text-[15px] border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-surface)] transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:-translate-y-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </motion.a>

              {/* Tertiary: GitHub */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={profile.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-github-link"
                aria-label="Balaji S GitHub profile (opens in new tab)"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-3 rounded-md font-semibold text-[14px] lg:text-[15px] bg-white dark:bg-white/5 border border-[var(--color-border)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transition-transform group-hover:scale-110">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub ↗
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full"
          >
            <div className="relative w-[220px] sm:w-[260px] lg:w-full lg:max-w-[360px] aspect-square rounded-full overflow-hidden border-4 border-[var(--color-border)] shadow-xl lg:shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt={profile.name}
                className="w-full h-full object-cover bg-[var(--color-surface)]"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=512&background=random`;
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

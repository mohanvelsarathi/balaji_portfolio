import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { education, certifications } from '../../data/portfolio';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function EducationItem({ inst, qual, start, end, score, scoreLabel }: {
  inst: string; qual: string; start: number; end: number; score: string; scoreLabel: string;
}) {
  return (
    <motion.div variants={itemVariants} className="relative pl-6 border-l border-[var(--color-border)] pb-8 last:pb-0">
      <div className="absolute w-3 h-3 bg-[var(--color-surface)] border-2 border-[var(--color-accent)] rounded-full -left-[6.5px] top-1"></div>
      <p className="text-[12px] font-mono font-medium text-[var(--color-accent)] uppercase tracking-wide mb-1.5">
        {start} – {end}
      </p>
      <h4 className="text-[16px] font-bold text-[var(--color-text-primary)] leading-snug mb-1">{qual}</h4>
      <p className="text-[14px] text-[var(--color-text-secondary)] mb-3">{inst}</p>
      <div className="inline-flex items-center px-3 py-1 rounded border border-[var(--color-border)] bg-[var(--color-surface)]">
        <span className="text-[13px] font-bold text-[var(--color-text-primary)]">{score}</span>
        <span className="text-[11px] font-mono text-[var(--color-text-muted)] ml-2 uppercase">{scoreLabel}</span>
      </div>
    </motion.div>
  );
}

function CertificationItem({ title, issuer, mode }: { title: string; issuer: string; mode: string }) {
  return (
    <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface-subtle)] transition-all -ml-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="8" r="6"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      </div>
      <div>
        <h4 className="text-[15px] font-bold text-[var(--color-text-primary)] leading-snug mb-1">{title}</h4>
        <p className="text-[13px] text-[var(--color-text-secondary)] mb-2">{issuer}</p>
        <span className="text-[11px] font-mono text-[var(--color-text-muted)] px-2 py-1 rounded border border-[var(--color-border)] bg-[var(--color-surface)]">
          {mode}
        </span>
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <Section id="education" subtle>
      <Container>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Education & Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Academic Background
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)]">
            My formal education and specialized certifications.
          </p>
        </motion.div>

        {/* Main Card Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-xl border border-[var(--color-border)] bg-[#0d131f] md:bg-[var(--color-surface-subtle)] shadow-[var(--shadow-card)] overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]"
        >
          
          {/* Education Column */}
          <div className="flex-1 p-8 md:p-10 bg-[var(--color-surface)]">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </span>
              <h3 className="text-[13px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Education
              </h3>
            </motion.div>
            
            <div className="pl-2">
              {education.map((ed) => (
                <EducationItem
                  key={ed.id}
                  inst={ed.institution}
                  qual={ed.qualification}
                  start={ed.startYear}
                  end={ed.endYear}
                  score={ed.score}
                  scoreLabel={ed.scoreLabel}
                />
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="flex-1 p-8 md:p-10 bg-[var(--color-surface)]">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </span>
              <h3 className="text-[13px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Certifications
              </h3>
            </motion.div>
            
            <div className="space-y-2">
              {certifications.map((cert) => (
                <CertificationItem
                  key={cert.id}
                  title={cert.title}
                  issuer={cert.issuer}
                  mode={cert.mode}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
}

import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { profile } from '../../data/portfolio';
import { motion } from 'framer-motion';

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Contact() {
  return (
    <Section id="contact" subtle className="min-h-screen w-full flex items-center py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Let's <span className="text-[var(--color-accent)]">Connect</span>
            </h2>
            <p className="text-[17px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              I'm looking for an opportunity to start my career as a Java Backend Developer and contribute with my foundation in Java, Spring Boot, REST APIs, and MySQL.
            </p>
          </motion.div>

          {/* Compact Contact Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0 md:rounded-xl md:border md:border-[var(--color-border)] md:bg-[var(--color-surface-subtle)] md:shadow-[var(--shadow-card)] md:overflow-hidden md:divide-x md:divide-[var(--color-border)] mb-12"
          >
            
            {/* Email */}
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${profile.email}`} 
              className="flex-1 p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md md:hover:-translate-y-0 md:hover:shadow-none md:hover:bg-[var(--color-surface)] md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
            >
              <div className="text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-[13px] font-bold text-[var(--color-text-primary)] mb-1 uppercase tracking-wider">Email</div>
                <div className="text-[14px] text-[var(--color-text-secondary)]">{profile.email}</div>
              </div>
            </motion.a>

            {/* Call */}
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${profile.phone.replace(/\s/g, '')}`} 
              className="flex-1 p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md md:hover:-translate-y-0 md:hover:shadow-none md:hover:bg-[var(--color-surface)] md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
            >
              <div className="text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-[13px] font-bold text-[var(--color-text-primary)] mb-1 uppercase tracking-wider">Call</div>
                <div className="text-[14px] text-[var(--color-text-secondary)]">{profile.phone}</div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={profile.githubProfile} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md md:hover:-translate-y-0 md:hover:shadow-none md:hover:bg-[var(--color-surface)] md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
            >
              <div className="text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-[13px] font-bold text-[var(--color-text-primary)] mb-1 uppercase tracking-wider">GitHub</div>
                <div className="text-[14px] text-[var(--color-text-secondary)] text-ellipsis overflow-hidden max-w-[200px] whitespace-nowrap" title="github.com/balajisrinivasan360-glitch">github.com/balajisrinivasan...</div>
              </div>
            </motion.a>
          </motion.div>


        </div>
      </Container>
    </Section>
  );
}

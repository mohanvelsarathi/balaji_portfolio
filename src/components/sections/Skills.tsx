import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { skills } from '../../data/portfolio';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

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

const getIconPathForCategory = (id: string) => {
  switch (id) {
    case 'java-core': return '/icon-java.png';
    case 'spring': return '/icon-spring.png';
    case 'api-dev': return '/icon-api.png';
    case 'database': return '/icon-database.png';
    case 'architecture-tools': return '/icon-architecture.png';
    default: return '/icon-java.png';
  }
};

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          eyebrow="Skills"
          heading="Technical Foundation"
          description="Core backend skills I use to build reliable and scalable applications."
        />

        {/* Mobile / Tablet Layout (Vertical Cards) */}
        <div className="block lg:hidden mt-10 relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 'calc(100% - 32px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-4 left-[23px] w-px bg-[var(--color-border)] origin-top" 
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6 relative"
          >
            {skills.map((category) => {
              const iconPath = getIconPathForCategory(category.id);
              
              return (
                <motion.div variants={itemVariants} key={category.id} className="relative pl-14">
                  {/* Timeline Dot */}
                  <div className="absolute top-5 left-[19px] w-2.5 h-2.5 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] z-10" />
                  
                  {/* Card */}
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-full bg-[var(--color-surface-subtle)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                        <img src={iconPath} alt={category.category} className="w-9 h-9 object-contain dark:invert" />
                      </div>
                      
                      {/* Title & Description */}
                      <div>
                        <h3 className="font-bold text-[16px] text-[var(--color-text-primary)] mb-1">
                          {category.category}
                        </h3>
                        <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mt-4 ml-20">
                      {category.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-transparent border border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative mt-24">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="hidden lg:block absolute top-10 left-[10%] border-t-2 border-dashed border-[var(--color-border)] -z-10 origin-left" 
          />

          {/* Grid Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-5 gap-y-12 gap-x-6"
          >
            
            {skills.map((category) => {
              const iconPath = getIconPathForCategory(category.id);
              
              return (
                <motion.div variants={itemVariants} key={category.id} className="flex flex-col items-center text-center relative group">
                  
                  {/* Icon Node */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300">
                      {/* Inner glowing circle */}
                      <div className="absolute inset-3 rounded-full bg-[var(--color-accent)]/10" />
                      <img src={iconPath} alt={category.category} className="w-16 h-16 object-contain relative z-20 dark:invert" />
                    </div>
                    {/* Vertical connecting line to title */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[var(--color-accent)]/30" />
                    {/* Little dot at the end of the vertical line */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 mb-6">
                    <h3 className="text-[18px] font-bold text-[var(--color-text-primary)] mb-3">
                      {category.category}
                    </h3>
                    <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed px-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto w-full">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-wide",
                          "bg-[var(--color-surface)] text-[var(--color-text-primary)]",
                          "border-2 border-[var(--color-border)] shadow-sm"
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}
            
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

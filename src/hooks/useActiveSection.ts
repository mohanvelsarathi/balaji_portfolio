import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Intersection Observer for general scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only update if we're not at the absolute top (handled by scroll listener)
            if (window.scrollY > 100) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Triggers when the section reaches the upper portion of the viewport
        threshold: 0,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Scroll listener to guarantee 'home' is active at the very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}

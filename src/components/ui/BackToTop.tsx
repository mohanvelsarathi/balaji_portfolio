import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (isFlying) setIsFlying(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isFlying]);

  const scrollToTop = () => {
    setIsFlying(true);
    
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(0, { duration: 2.0 }); 
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all',
        'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2',
        !isVisible && !isFlying ? 'opacity-0 translate-y-10 invisible duration-300' : '',
        isVisible && !isFlying ? 'opacity-100 translate-y-0 visible duration-300' : '',
        isFlying ? 'opacity-0 -translate-y-[80vh] scale-75 visible duration-[1500ms] ease-in-out' : ''
      )}
    >
      <ArrowUp size={20} strokeWidth={2.5} className={cn("transition-transform duration-300", isFlying && "animate-bounce")} />
    </button>
  );
}

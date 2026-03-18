import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * Used for header transparency/solid state transitions
 */
export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.scrollY > 50;
  });

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;

      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled
      );
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return { isScrolled };
};

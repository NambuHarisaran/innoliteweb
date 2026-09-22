import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position on route changes and smoothly scrolls to hash anchors
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const scrollToHashElement = (attempts = 0) => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 84;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          });
        } else if (attempts < 10) {
          // Retry briefly if element is animating or mounting
          setTimeout(() => scrollToHashElement(attempts + 1), 50);
        }
      };

      setTimeout(() => scrollToHashElement(0), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

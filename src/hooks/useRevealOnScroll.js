import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll(options = { threshold: 0.12 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

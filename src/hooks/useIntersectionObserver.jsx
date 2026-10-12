import { useState, useEffect, useRef, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const setRef = useCallback((node) => {
    elementRef.current = node;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      const intersecting = entry.isIntersecting;
      setIsIntersecting(intersecting);
      if (intersecting) {
        entry.target.classList.add('is-visible');
        // Once visible, we can unobserve to save resources
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    observerRef.current = observer;
    observer.observe(node);

    // Also check if element is already visible (e.g., hero section on load)
    const rect = node.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInitiallyVisible) {
      node.classList.add('is-visible');
      setIsIntersecting(true);
    }
  }, [options]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [setRef, isIntersecting];
};

export const useCounter = (end, duration = 2000, start = 0, isActive = false) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * easedProgress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration, start, isActive]);

  return count;
};

export const Counter = ({ end, duration = 2000, start = 0, isActive = false, suffix = '', className = '' }) => {
  const count = useCounter(end, duration, start, isActive);
  return (
    <div className={`counter ${className}`} data-count={end}>
      {count}
      {suffix && <span className="counter__suffix">{suffix}</span>}
    </div>
  );
};
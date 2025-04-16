import { useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  threshold = 0.1, 
  delay = 0, 
  direction = 'up',
  distance = '30px',
  duration = 0.6,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    // Initial state (hidden)
    let translateValue;
    switch (direction) {
      case 'up':
        translateValue = `translateY(${distance})`;
        break;
      case 'down':
        translateValue = `translateY(-${distance})`;
        break;
      case 'left':
        translateValue = `translateX(${distance})`;
        break;
      case 'right':
        translateValue = `translateX(-${distance})`;
        break;
      default:
        translateValue = `translateY(${distance})`;
    }
    
    element.style.opacity = '0';
    element.style.transform = translateValue;
    element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
    element.style.transitionDelay = `${delay}s`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal animation
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
            
            // Unobserve if once is true
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Hide again if scrolled out of view
            element.style.opacity = '0';
            element.style.transform = translateValue;
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, direction, distance, duration, once]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal; 
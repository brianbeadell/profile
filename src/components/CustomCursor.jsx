import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    
    // Check for hovering over clickable elements
    const onLinkHoverIn = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('clickable')
      ) {
        setLinkHovered(true);
      }
    };
    
    const onLinkHoverOut = () => {
      setLinkHovered(false);
    };
    
    // Attach event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    // Event delegation for hovering over links
    document.addEventListener('mouseover', onLinkHoverIn);
    document.addEventListener('mouseout', onLinkHoverOut);
    
    return () => {
      // Restore default cursor and remove listeners
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onLinkHoverIn);
      document.removeEventListener('mouseout', onLinkHoverOut);
    };
  }, []);
  
  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: position.x,
          top: position.y,
          opacity: hidden ? 0 : 1,
          width: '12px',
          height: '12px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          transition: 'opacity 0.15s ease, transform 0.15s ease-out, width 0.2s ease, height 0.2s ease',
          transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : 1})`,
        }}
      />
      
      {/* Outer cursor ring */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference rounded-full border-2 border-white"
        style={{
          left: position.x,
          top: position.y,
          opacity: hidden ? 0 : 0.8,
          width: linkHovered ? '60px' : '40px',
          height: linkHovered ? '60px' : '40px',
          transition: 'width 0.3s ease, height 0.3s ease, transform 0.15s ease-out, opacity 0.15s ease',
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor; 
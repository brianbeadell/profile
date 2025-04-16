import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EntranceAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation sequence
  useEffect(() => {
    if (animationStage === 0) {
      // Start initial animation
      const timer = setTimeout(() => {
        setAnimationStage(1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (animationStage === 1) {
      // Animate text in
      const timer = setTimeout(() => {
        setAnimationStage(2);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (animationStage === 2) {
      // Display final message
      const timer = setTimeout(() => {
        setAnimationStage(3);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (animationStage === 3) {
      // Complete animation and notify parent
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animationStage, onComplete]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 z-50 flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ opacity: animationStage === 3 ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
    >
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: cursorPosition.x - 16, 
          top: cursorPosition.y - 16,
          transition: 'transform 0.05s ease-out',
          transform: `scale(${animationStage > 0 ? 1.5 : 1})`,
          backgroundColor: '#fff',
          borderRadius: '50%'
        }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white opacity-10 rounded-full"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${animationStage > 0 ? 1 + Math.random() : 0})`,
              transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${Math.random() * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter"
          style={{ 
            opacity: animationStage >= 1 ? 1 : 0, 
            transform: `translateY(${animationStage >= 1 ? 0 : '30px'})`,
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          BRIAN BEADELL
        </h1>
        
        <div 
          className="text-2xl md:text-3xl font-light"
          style={{ 
            opacity: animationStage >= 2 ? 1 : 0, 
            transform: `translateY(${animationStage >= 2 ? 0 : '20px'})`,
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '0.3s'
          }}
        >
          <span className="inline-block">Full-Stack Developer & AI/ML Engineer</span>
        </div>
        
        <div 
          className="mt-12 text-xl"
          style={{ 
            opacity: animationStage >= 2 ? 1 : 0, 
            transition: 'opacity 1s ease',
            transitionDelay: '0.6s'
          }}
        >
          <button 
            onClick={() => setAnimationStage(3)}
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-indigo-900 transition-colors duration-300 rounded-full"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntranceAnimation; 
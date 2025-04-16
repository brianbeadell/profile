import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);
  
  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };
  
  return (
    <div
      className={`transition-wrapper ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
      
      <style jsx="true">{`
        .transition-wrapper {
          position: relative;
          min-height: 100vh;
        }
        
        .fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .fadeOut {
          animation: fadeOut 0.5s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default PageTransition; 
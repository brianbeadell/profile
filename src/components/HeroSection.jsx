import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize particles.js
    if (typeof window !== 'undefined' && window.particlesJS) {
      // Adjust number of particles based on screen size
      const getParticleCount = () => {
        if (window.innerWidth < 768) {
          return 80; // Mobile
        } else if (window.innerWidth < 1024) {
          return 120; // Tablet
        } else {
          return 150; // Desktop
        }
      };

      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: getParticleCount(),
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#6366f1" // Indigo color
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#6366f1",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.8
              }
            },
            push: {
              particles_nb: 4
            },
          }
        },
        retina_detect: true
      });
    } else {
      console.warn("particles.js not loaded");
    }
    
    // Set loaded state after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Add resize event listener to reinitialize particles on window resize
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        // Clear existing particles
        if (window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS();
          window.pJSDom = [];
        }
        
        // Reinitialize with new particle count
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: window.innerWidth < 768 ? 80 : window.innerWidth < 1024 ? 120 : 150,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: "#6366f1" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: true, speed: 10, size_min: 0.5, sync: false } },
            line_linked: { enable: true, distance: 120, color: "#6366f1", opacity: 0.4, width: 1 },
            move: { 
              enable: true, 
              speed: 1.2, 
              direction: "none", 
              random: true, 
              straight: false, 
              out_mode: "out", 
              bounce: false, 
              attract: { enable: true, rotateX: 600, rotateY: 1200 } 
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.8 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        });
      }
    };
    
    // Debounce function to limit resize event firing
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };
    
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 animate-pulse-slow">
            Brian Beadell
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-10 text-gray-200">
              <span className="typed-text"></span>
              <span id="cursor" className="inline-block w-1 h-8 bg-indigo-400 ml-1 animate-pulse-slow"></span>
            </h2>
          </div>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            I build intelligent systems that drive real-world change — from satellite-powered agriculture tools to multi-modal AI agents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link 
              to="/projects" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-2 text-lg"
            >
              <i className="fas fa-code mr-2"></i> View Projects
            </Link>
            <a 
              href="https://github.com/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/70 hover:bg-gray-700 text-white font-medium py-4 px-10 rounded-full shadow-lg backdrop-blur-sm hover:shadow-gray-500/20 transition-all duration-300 transform hover:-translate-y-2 text-lg"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a 
              href="/Beadell_Resume_2024.pdf" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-4 px-10 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 text-lg"
            >
              <i className="fas fa-file-pdf mr-2"></i> Resume
            </a>
          </div>
          
          <div className="flex justify-center mt-24">
            <div className="animate-bounce scale-150">
              <a href="#skills" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <i className="fas fa-chevron-down text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
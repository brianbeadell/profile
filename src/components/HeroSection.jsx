import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize particles.js
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
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
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6366f1",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
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
                opacity: 1
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
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
            Brian Beadell
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
              <span className="typed-text"></span>
              <span id="cursor" className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-pulse-slow"></span>
            </h2>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            I build intelligent systems that drive real-world change — from satellite-powered agriculture tools to multi-modal AI agents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              to="/projects" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-code mr-2"></i> View Projects
            </Link>
            <a 
              href="https://github.com/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800/70 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full shadow-lg backdrop-blur-sm hover:shadow-gray-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a 
              href="/Beadell_Resume_2024.pdf" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-8 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-file-pdf mr-2"></i> Resume
            </a>
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <a href="#skills" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <i className="fas fa-chevron-down text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
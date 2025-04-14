import { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import { Link } from 'react-router-dom';

// Typed.js effect for the hero section - we'll add it manually
const initTypedEffect = () => {
  const textElement = document.querySelector('.typed-text');
  if (!textElement) return;
  
  const phrases = [
    'AI Engineer',
    'Data Scientist',
    'AgTech Innovator',
    'Navy Veteran',
    'Full-Stack Developer'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 120;
  
  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 80;
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      typingSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      // Pause before typing next phrase
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  };
  
  setTimeout(type, 1000);
};

export default function Home() {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    // Initialize typed.js effect
    initTypedEffect();
    
    // Add animation to about section when it comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.2 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with particles */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white dark:bg-gray-900 opacity-0 transform translate-y-10 transition-all duration-1000">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="border-t-2 border-white/30 w-16 mb-6"></div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Education</p>
                      <p className="font-medium">M.S. Data Science</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <i className="fas fa-medal"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Military</p>
                      <p className="font-medium">Navy Veteran</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Location</p>
                      <p className="font-medium">Portland, OR (Remote)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Expertise</p>
                      <p className="font-medium">AI/ML, Data Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Building intelligent systems that drive real-world change
                </h3>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    With a Master's in Data Science and Applied Machine Learning, I specialize in full-stack AI/ML engineering, computer vision, LLM integration, and automated decision-making tools.
                  </p>
                  
                  <p>
                    Before this, I served in high-pressure leadership roles as a Navy veteran, commercial diver, and medic. I bring that same precision and execution to building machine learning pipelines, geospatial tools, and voice-driven AI systems.
                  </p>
                  
                  <div className="border-l-4 border-indigo-500 pl-4 py-2 mt-4 italic text-gray-600 dark:text-gray-400">
                    "Calm under pressure, great at simplifying complexity, and incredibly self-motivated."
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/credentials" 
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    View my credentials <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            I'm actively pursuing remote opportunities in Data Engineering, MLOps Engineering, Generative AI, Data Science, AI/ML Engineering, Applied AI, AgTech, and Computational Biology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="mailto:brianbeadell.udc@gmail.com" 
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">Email</p>
                <p className="font-medium">brianbeadell.udc@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/brianbeadell</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                <i className="fab fa-github"></i>
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">GitHub</p>
                <p className="font-medium">github.com/brianbeadell</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="/Brian_Beadell_Resume.pdf" 
              className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <i className="fas fa-file-pdf text-xl"></i> Download Resume
            </a>
          </div>
        </div>
      </section>
      
      <style>
        {`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        `}
      </style>
    </div>
  );
}

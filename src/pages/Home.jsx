import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

// Typed.js effect for the hero section - we'll add it manually
const initTypedEffect = () => {
  const textElement = document.querySelector('.typed-text');
  if (!textElement) return;
  
  const phrases = [
    'AI/ML Engineer',
    'Generative AI Data Scientist',
    'AgTech AI/ML Innovator',
    'Navy Veteran',
    'Full-Stack Developer'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // Slightly faster typing
  
  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 60; // Faster deletion
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Consistent typing speed
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      typingSpeed = 2000; // Longer pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      // Pause before typing next phrase
      typingSpeed = 700; // Increased pause between phrases
    }
    
    setTimeout(type, typingSpeed);
  };
  
  setTimeout(type, 800); // Start animation sooner
};

export default function Home() {
  useEffect(() => {
    // Initialize typed.js effect
    initTypedEffect();
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with particles */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                <span className="inline-block transform hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-user text-indigo-600 dark:text-indigo-400 mr-4"></i>
                  About Me
                </span>
              </h2>
              <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-indigo-100/30 dark:border-indigo-900/30">
            <div className="md:flex">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white relative">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 L100,0 L100,100 Z" fill="white"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">At a Glance</h3>
                  <div className="border-t-2 border-white/30 w-16 mb-6"></div>
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shadow-md">
                        <i className="fas fa-graduation-cap text-xl"></i>
                      </div>
                      <div>
                        <p className="text-white/80 text-xs uppercase tracking-wider">Education</p>
                        <p className="font-medium">M.S. Data Science</p>
                        <p className="font-medium">B.S. Biology</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shadow-md">
                        <i className="fas fa-medal text-xl"></i>
                      </div>
                      <div>
                        <p className="text-white/80 text-xs uppercase tracking-wider">Military</p>
                        <p className="font-medium">Navy Veteran</p>
                        <p className="text-sm text-white/80">Leadership & Discipline</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shadow-md">
                        <i className="fas fa-map-marker-alt text-xl"></i>
                      </div>
                      <div>
                        <p className="text-white/80 text-xs uppercase tracking-wider">Location</p>
                        <p className="font-medium">Portland, OR</p>
                        <p className="text-sm text-white/80">Available Remote Worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 shadow-md">
                        <i className="fas fa-laptop-code text-xl"></i>
                      </div>
                      <div>
                        <p className="text-white/80 text-xs uppercase tracking-wider">Expertise</p>
                        <p className="font-medium">AI/ML Engineering</p>
                        <p className="text-sm text-white/80">Data Science & Full-Stack</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4}>
                <div className="md:w-2/3 p-10">
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                    Building Intelligent Systems<span className="text-indigo-600 dark:text-indigo-400"> for Real-World Impact</span>
                  </h3>
                  
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      With a Master's in Data Science and Applied Machine Learning, I specialize in full-stack AI/ML engineering, computer vision, LLM integration, and automated decision-making tools.
                    </p>
                    
                    <p>
                      Before this, I served in high-pressure leadership roles as a Navy veteran, commercial diver, and medic. I bring that same precision and execution to building machine learning pipelines, geospatial tools, and voice-driven AI systems.
                    </p>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 pl-6 py-4 mt-6 rounded-r-lg">
                      <p className="italic text-gray-700 dark:text-gray-300">
                        "Calm under pressure, great at simplifying complexity, and incredibly self-motivated."
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">— Former Team Lead</p>
                    </div>
                    
                    <div className="flex flex-wrap mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mr-8 mb-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                          <i className="fas fa-brain"></i>
                        </div>
                        <span>AI/ML Development</span>
                      </div>
                      <div className="flex items-center mr-8 mb-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                          <i className="fas fa-database"></i>
                        </div>
                        <span>Data Engineering</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                          <i className="fas fa-code"></i>
                        </div>
                        <span>Full-Stack Development</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link 
                      to="/credentials" 
                      className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <i className="fas fa-file-alt mr-2"></i> View my credentials
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-8 text-center">Let's Connect</h2>
            <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto text-center">
              I'm actively pursuing remote opportunities in Data Engineering, MLOps Engineering, Generative AI, Data Science, AI/ML Engineering, Applied AI, AgTech, and Computational Biology.
            </p>
          </ScrollReveal>
          
          <div className="md:flex md:gap-10 md:items-start">
            {/* Contact Details */}
            <div className="md:w-1/3 mb-12 md:mb-0">
              <ScrollReveal delay={0.2} direction="left">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-address-card text-indigo-300 mr-3"></i> Contact Details
                  </h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="mailto:brianbeadell.udc@gmail.com" 
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600/30 flex items-center justify-center text-xl group-hover:bg-indigo-600/50 transition-all duration-200">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">Email</p>
                        <p className="font-medium">brianbeadell.udc@gmail.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/brianbeadell" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600/30 flex items-center justify-center text-xl group-hover:bg-indigo-600/50 transition-all duration-200">
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">LinkedIn</p>
                        <p className="font-medium">linkedin.com/in/brianbeadell</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/brianbeadell" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600/30 flex items-center justify-center text-xl group-hover:bg-indigo-600/50 transition-all duration-200">
                        <i className="fab fa-github"></i>
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">GitHub</p>
                        <p className="font-medium">github.com/brianbeadell</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <a 
                      href="/profile/Beadell_Resume_2024.pdf" 
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <i className="fas fa-file-pdf"></i> Download Resume
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <ScrollReveal delay={0.4} direction="right">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <form className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-paper-plane text-indigo-300 mr-3"></i> Send Me a Message
                      </h3>
                      <p className="text-indigo-200 mb-6">Have a question or want to work together? Feel free to reach out!</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-indigo-200 text-sm font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-indigo-200 text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-indigo-200 text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                        placeholder="Job Opportunity"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-indigo-200 text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <i className="fas fa-paper-plane mr-2"></i> Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

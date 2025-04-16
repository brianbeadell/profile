import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  const navigation = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'Projects', path: '/projects', icon: 'fas fa-code' },
    { name: 'Credentials', path: '/credentials', icon: 'fas fa-certificate' },
    { name: 'Resume', path: '/profile/Beadell_Resume_2024.pdf', external: true, icon: 'fas fa-file-pdf' }
  ];

  const isActive = (path) => pathname === path;

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-xl font-bold transition-all duration-300 ${
                scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-500 dark:text-white'
              }`}>
                Brian Beadell
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    className="border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:border-indigo-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'border-indigo-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:border-indigo-300`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {/* Dark mode toggle button */}
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors ${isMenuOpen ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                <div className="flex items-center">
                  <span className={`mr-2 text-sm font-medium transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>Menu</span>
                  <div className="relative w-6 h-6">
                    <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                    <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, using a transition for the overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-800/70 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      ></div>
      
      {/* Dropdown menu */}
      <div 
        ref={menuRef}
        className={`absolute right-0 w-full sm:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: isMenuOpen ? '400px' : '0' }}
      >
        <div className="mx-4 my-3 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="pt-2 pb-3 px-1">
            {navigation.map((item, index) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-3 mx-2 my-1 pl-3 pr-4 py-3 rounded-xl text-gray-700 hover:bg-indigo-50 dark:text-gray-200 dark:hover:bg-indigo-900/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <i className={item.icon}></i>
                  </div>
                  <span className="font-medium">{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 mx-2 my-1 pl-3 pr-4 py-3 rounded-xl transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                      : 'text-gray-700 hover:bg-indigo-50 dark:text-gray-200 dark:hover:bg-indigo-900/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <i className={item.icon}></i>
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            ))}
            
            {/* Dark mode toggle in mobile menu */}
            <div 
              className="flex items-center justify-between mx-2 my-3 pl-3 pr-4 py-3 mt-4 rounded-xl border border-gray-200 dark:border-gray-700"
              style={{ 
                transitionDelay: `${navigation.length * 50}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <i className={darkMode ? "fas fa-moon" : "fas fa-sun"}></i>
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {darkMode ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
              <button 
                onClick={() => {
                  toggleDarkMode();
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
                className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center transition duration-300 focus:outline-none shadow"
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
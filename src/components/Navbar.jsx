import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-xl font-bold transition-all duration-300 ${
                scrolled ? 'text-indigo-600' : 'text-indigo-500'
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
                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:border-indigo-300"
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
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:border-indigo-300`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors ${isMenuOpen ? 'bg-gray-100' : ''}`}
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                <div className="flex items-center">
                  <span className={`mr-2 text-sm font-medium transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 w-0' : 'opacity-100'}`}><strong>Menu</strong></span>
                  <div className="relative w-6 h-6">
                    <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                    <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
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
        <div className="mx-4 my-3 rounded-2xl bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="pt-2 pb-3 px-1">
            {navigation.map((item, index) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-3 mx-2 my-1 pl-3 pr-4 py-3 rounded-xl text-gray-700 hover:bg-indigo-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
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
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-indigo-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(10px)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <i className={item.icon}></i>
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 
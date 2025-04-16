import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Credentials from './pages/Credentials';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Add dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Scroll to top on navigation
  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('/')) {
        handleNavigation();
      }
    });
    
    return () => {
      document.removeEventListener('click', handleNavigation);
    };
  }, []);
  
  // Handle hash links (like #skills) for smooth scrolling
  useEffect(() => {
    const handleHashLinks = (e) => {
      const link = e.target.closest('a');
      if (link && link.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleHashLinks);
    
    return () => {
      document.removeEventListener('click', handleHashLinks);
    };
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/credentials" element={<Credentials />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

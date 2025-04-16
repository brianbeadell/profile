import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Randomly select a gradient for each card
  const gradients = [
    'from-indigo-500 to-purple-500',
    'from-blue-500 to-teal-500',
    'from-green-500 to-teal-500',
    'from-purple-500 to-pink-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  // Map tech stack to icons
  const getIconForTech = (tech) => {
    const techIcons = {
      'Python': 'fab fa-python',
      'JavaScript': 'fab fa-js',
      'React': 'fab fa-react',
      'Node.js': 'fab fa-node-js',
      'Django': 'fab fa-python',
      'Flask': 'fab fa-python',
      'AWS': 'fab fa-aws',
      'OpenAI': 'fas fa-robot',
      'TensorFlow': 'fas fa-brain',
      'PyTorch': 'fas fa-fire',
      'Java': 'fab fa-java',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'Docker': 'fab fa-docker',
      'Git': 'fab fa-git-alt',
    };
    
    // Default icon for technologies not in our mapping
    const lowerTech = tech.toLowerCase();
    
    if (lowerTech.includes('react')) return 'fab fa-react';
    if (lowerTech.includes('python') || lowerTech.includes('django') || lowerTech.includes('flask')) return 'fab fa-python';
    if (lowerTech.includes('node') || lowerTech.includes('javascript') || lowerTech.includes('js')) return 'fab fa-js';
    if (lowerTech.includes('aws')) return 'fab fa-aws';
    if (lowerTech.includes('ai') || lowerTech.includes('ml') || lowerTech.includes('tensorflow')) return 'fas fa-brain';
    if (lowerTech.includes('api')) return 'fas fa-plug';
    if (lowerTech.includes('database') || lowerTech.includes('sql')) return 'fas fa-database';
    
    return techIcons[tech] || 'fas fa-code';
  };
  
  // Additional project details content
  const renderProjectDetails = () => {
    // Function to render text with newlines as proper paragraphs
    const formatText = (text) => {
      if (!text) return null;
      
      // If the text contains markdown-like sections with headers
      if (text.includes('\n\n')) {
        return text.split('\n\n').map((section, idx) => {
          const lines = section.split('\n');
          // Check if this is a header section
          if (lines[0].endsWith(':')) {
            return (
              <div key={idx} className="mb-4">
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{lines[0]}</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {lines.slice(1).map((line, lineIdx) => (
                    <li key={lineIdx} className={line.startsWith('- ') ? 'ml-2' : ''}>
                      {line.replace(/^- /, '')}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          // Regular paragraph
          return <p key={idx} className="mb-3">{section}</p>;
        });
      }
      
      return <p>{text}</p>;
    };

    return (
      <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 animate-slideUp">
        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">Project Details</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p className="mb-4">{project.longDescription || "This project demonstrates application of key technical skills and problem-solving approach."}</p>
          
          {project.features && (
            <div className="mt-3 mb-4">
              <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.learnings && (
            <div className="mt-4">
              <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack & Learnings:</h5>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-300">
                {formatText(project.learnings)}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  };
  
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-gray-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with gradient background */}
      <div className={`p-6 bg-gradient-to-r ${randomGradient} relative overflow-hidden group-hover:bg-opacity-90 transition-all duration-300`}>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-shadow transition-all duration-300">{project.title}</h3>
          
          {/* GitHub link if available */}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors group-hover:rotate-6 transform transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          )}
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-300"></div>
        </div>
      </div>
      
      {/* Technology stack */}
      <div className="px-6 py-4 flex flex-wrap gap-2 border-b border-gray-100 dark:border-gray-700">
        {project.stack.map((tech, techIdx) => (
          <span 
            key={techIdx} 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 transform hover:scale-105 transition-all"
          >
            <i className={`${getIconForTech(tech)} mr-1`}></i>
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project description */}
      <div className="px-6 py-4">
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {project.description.map((bullet, bulletIdx) => (
            <li key={bulletIdx} className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer with action links */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 flex justify-end items-center">
        {project.demoUrl && (
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors text-sm font-medium flex items-center hover:underline"
          >
            <i className="fas fa-external-link-alt mr-1"></i> View Demo
          </a>
        )}
        <button 
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium flex items-center hover:scale-105 transform transition-transform"
          onClick={() => setShowDetails(!showDetails)}
        >
          <i className={`${showDetails ? 'fas fa-chevron-up' : 'fas fa-info-circle'} mr-1`}></i> 
          {showDetails ? 'Hide Details' : 'Details'}
        </button>
      </div>
      
      {/* Expandable details section */}
      {showDetails && renderProjectDetails()}
    </div>
  );
};

export default ProjectCard; 
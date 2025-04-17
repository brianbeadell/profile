import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-item').forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in');
            }, index * 150);
          });
          
          // Animate skill bars after cards appear
          setTimeout(() => {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-width');
              }, index * 100);
            });
          }, skillCategories.length * 150 + 300);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: "fas fa-brain",
      color: "indigo",
      description: "Creating intelligent systems that learn from data and adapt to new scenarios.",
      skills: [
        { name: "Machine Learning", icon: "fas fa-cogs", proficiency: 89 },
        { name: "Generative AI", icon: "fas fa-wand-magic-sparkles", proficiency: 85 },
        { name: "LLMs & GPT", icon: "fas fa-comment-dots", proficiency: 85 },
        { name: "NLP", icon: "fas fa-comments", proficiency: 87 },
        { name: "AI Agents", icon: "fas fa-robot", proficiency: 88 },
        { name: "Reinforcement Learning", icon: "fas fa-chart-line", proficiency: 83 },
      ]
    },
    {
      title: "ML Frameworks",
      icon: "fas fa-microchip",
      color: "blue",
      description: "Expertise in leading machine learning and AI development frameworks.",
      skills: [
        { name: "PyTorch", icon: "fas fa-fire", proficiency: 88 },
        { name: "TensorFlow/Keras", icon: "fas fa-network-wired", proficiency: 85 },
        { name: "Hugging Face", icon: "fas fa-code-branch", proficiency: 82 },
        { name: "scikit-learn", icon: "fas fa-brain", proficiency: 88 },
        { name: "LangChain/Phi", icon: "fas fa-link", proficiency: 80 },
      ]
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "green",
      description: "Developing efficient and maintainable software across multiple languages.",
      skills: [
        { name: "Python", icon: "fab fa-python", proficiency: 90 },
        { name: "JavaScript/TypeScript", icon: "fab fa-js", proficiency: 80 },
        { name: "React", icon: "fab fa-react", proficiency: 75 },
        { name: "Django/Flask", icon: "fab fa-python", proficiency: 85 },
        { name: "Node.js", icon: "fab fa-node-js", proficiency: 75 },
      ]
    },
    {
      title: "Data Engineering",
      icon: "fas fa-database",
      color: "purple",
      description: "Building robust data pipelines and infrastructure for processing and analyzing data.",
      skills: [
        { name: "pandas/NumPy", icon: "fas fa-table", proficiency: 90 },
        { name: "PostgreSQL/MongoDB", icon: "fas fa-server", proficiency: 82 },
        { name: "ETL Pipelines", icon: "fas fa-exchange-alt", proficiency: 85 },
        { name: "Data Visualization", icon: "fas fa-chart-bar", proficiency: 80 },
        { name: "yfinance/Financial Data", icon: "fas fa-dollar-sign", proficiency: 88 },
      ]
    },
    {
      title: "AI Specialties",
      icon: "fas fa-lightbulb",
      color: "emerald",
      description: "Specialized AI applications and techniques for domain-specific problems.",
      skills: [
        { name: "NLP & Sentiment Analysis", icon: "fas fa-comments", proficiency: 85 },
        { name: "Computer Vision", icon: "fas fa-eye", proficiency: 80 },
        { name: "Speech Recognition", icon: "fas fa-microphone", proficiency: 75 },
        { name: "Multi-Modal AI", icon: "fas fa-layer-group", proficiency: 80 },
        { name: "RL Trading Systems", icon: "fas fa-chart-line", proficiency: 85 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-toolbox",
      color: "orange",
      description: "Utilizing industry-standard tools and cloud platforms for efficient development.",
      skills: [
        { name: "AWS/Cloud", icon: "fab fa-aws", proficiency: 80 },
        { name: "Docker", icon: "fab fa-docker", proficiency: 78 },
        { name: "Git/GitHub", icon: "fab fa-git-alt", proficiency: 85 },
        { name: "Groq/OpenAI APIs", icon: "fas fa-plug", proficiency: 85 },
        { name: "Playwright/Automation", icon: "fas fa-cogs", proficiency: 80 },
      ]
    },
  ];

  // Get color utility class based on category color
  const getColorClass = (category, element, shade = '') => {
    const colorMap = {
      'indigo': {
        'bg': `bg-indigo${shade ? `-${shade}` : ''}`,
        'text': `text-indigo${shade ? `-${shade}` : ''}`,
        'border': `border-indigo${shade ? `-${shade}` : ''}`,
      },
      'blue': {
        'bg': `bg-blue${shade ? `-${shade}` : ''}`,
        'text': `text-blue${shade ? `-${shade}` : ''}`,
        'border': `border-blue${shade ? `-${shade}` : ''}`,
      },
      'green': {
        'bg': `bg-green${shade ? `-${shade}` : ''}`,
        'text': `text-green${shade ? `-${shade}` : ''}`,
        'border': `border-green${shade ? `-${shade}` : ''}`,
      },
      'purple': {
        'bg': `bg-purple${shade ? `-${shade}` : ''}`,
        'text': `text-purple${shade ? `-${shade}` : ''}`,
        'border': `border-purple${shade ? `-${shade}` : ''}`,
      },
      'emerald': {
        'bg': `bg-emerald${shade ? `-${shade}` : ''}`,
        'text': `text-emerald${shade ? `-${shade}` : ''}`,
        'border': `border-emerald${shade ? `-${shade}` : ''}`,
      },
      'orange': {
        'bg': `bg-orange${shade ? `-${shade}` : ''}`,
        'text': `text-orange${shade ? `-${shade}` : ''}`,
        'border': `border-orange${shade ? `-${shade}` : ''}`,
      }
    };

    return colorMap[category]?.[element] || '';
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="inline-block relative">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                <i className="fas fa-code text-indigo-600 dark:text-indigo-400 mr-4"></i>
                Technical Skills
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 dark:bg-indigo-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized in AI, ML, data engineering, and full-stack development, with a focus on building practical solutions 
            for complex problems.
          </p>
          
          {/* Category navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {skillCategories.map((category, idx) => (
              <button
                key={`nav-${idx}`}
                onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === idx 
                    ? `${getColorClass(category.color, 'bg', '600')} text-white`
                    : `bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:${getColorClass(category.color, 'bg', '100')} hover:${getColorClass(category.color, 'text', '600')}`
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`skill-item opacity-0 translate-y-8 transition-all duration-500 ease-out bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl border-t-4 ${getColorClass(category.color, 'border', '500')} ${
                activeCategory !== null && activeCategory !== idx ? 'opacity-50' : ''
              }`}
              style={{
                transform: activeCategory === idx ? 'scale(1.03)' : '',
                zIndex: activeCategory === idx ? 10 : 1
              }}
            >
              <div className={`${getColorClass(category.color, 'bg', '600')} dark:${getColorClass(category.color, 'bg', '800')} px-6 py-5`}>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <i className={`${category.icon} mr-3 text-2xl`}></i>
                  {category.title}
                </h3>
                <p className="text-white text-opacity-80 mt-2 text-sm">
                  {category.description}
                </p>
              </div>

              <div className="p-6 space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClass(category.color, 'bg', '100')} dark:${getColorClass(category.color, 'bg', '900')}/30 ${getColorClass(category.color, 'text', '600')} dark:${getColorClass(category.color, 'text', '400')}`}>
                          <i className={skill.icon}></i>
                        </div>
                        <span className="ml-3 text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`skill-bar-fill h-2.5 rounded-full ${getColorClass(category.color, 'bg', '500')}`} 
                        style={{ width: '0%' }}
                        data-width={`${skill.proficiency}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
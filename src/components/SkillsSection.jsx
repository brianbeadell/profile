import { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-item').forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in');
            }, index * 100);
          });
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
      skills: [
        { name: "Machine Learning", icon: "fas fa-cogs" },
        { name: "Generative AI", icon: "fas fa-wand-magic-sparkles" },
        { name: "Computer Vision", icon: "fas fa-eye" },
        { name: "NLP", icon: "fas fa-comments" },
        { name: "AI Agents", icon: "fas fa-robot" },
      ]
    },
    {
      title: "Data Engineering",
      icon: "fas fa-database",
      color: "blue",
      skills: [
        { name: "ETL Pipelines", icon: "fas fa-exchange-alt" },
        { name: "SQL Databases", icon: "fas fa-table" },
        { name: "Data Modeling", icon: "fas fa-project-diagram" },
        { name: "Data Analysis", icon: "fas fa-chart-line" },
      ]
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "green",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Java", icon: "fab fa-java" },
        { name: "R", icon: "fas fa-chart-bar" },
        { name: "Go", icon: "fas fa-code-branch" },
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      color: "purple",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "Django", icon: "fab fa-python" },
        { name: "Flask", icon: "fab fa-python" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
      ]
    },
    {
      title: "AgTech & Geospatial",
      icon: "fas fa-leaf",
      color: "emerald",
      skills: [
        { name: "Remote Sensing", icon: "fas fa-satellite" },
        { name: "GIS", icon: "fas fa-map-marked-alt" },
        { name: "Agricultural Analysis", icon: "fas fa-seedling" },
        { name: "Earth Engine", icon: "fas fa-globe" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-toolbox",
      color: "orange",
      skills: [
        { name: "AWS", icon: "fab fa-aws" },
        { name: "TensorFlow", icon: "fas fa-network-wired" },
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
      ]
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">
              <i className="fas fa-code text-indigo-600 dark:text-indigo-400 mr-4"></i>
              Technical Skills
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized in AI, ML, data engineering, and full-stack development, with a focus on building practical solutions 
            for complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-item opacity-0 translate-y-8 transition-all duration-500 ease-out bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl"
            >
              <div className={`bg-${category.color}-600 dark:bg-${category.color}-800 px-6 py-4 flex items-center justify-between`}>
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <i className={`${category.icon} mr-3`}></i>
                  {category.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 dark:text-${category.color}-400`}>
                        <i className={skill.icon}></i>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 
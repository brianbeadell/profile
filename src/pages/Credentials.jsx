export default function Credentials() {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Eastern University, St. Davids, PA",
      year: "2024",
      description: "Focused on advanced topics in applied machine learning, big data analytics, and ETL workflows. Key projects: Developed a machine learning model for predictive analytics and automated data pipelines for real-world datasets."
    },
    {
      degree: "Bachelor of Science in Biology",
      institution: "Pacific University, Forest Grove, OR",
      year: "2020",
      description: "Specialized in research and statistical methods, with applications in laboratory and agricultural studies. Developed foundational skills in data collection, statistical analysis, and reporting."
    }
  ];

  const certifications = [
    {
      name: "Amazon Web Services: Machine Learning",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Art of the Possible, Introduction to Amazon SageMaker, Planning a Machine Learning Project, Machine Learning Terminology and Process."
    },
    {
      name: "AI Strategy",
      issuer: "Codecademy",
      year: "2024",
      description: "Comprehensive training in AI strategy development and implementation."
    },
    {
      name: "Intro to MidJourney",
      issuer: "Codecademy",
      year: "2024",
      description: "Fundamentals of generative AI image creation with MidJourney."
    },
    {
      name: "AI for Marketing",
      issuer: "Codecademy",
      year: "2024",
      description: "Application of AI technologies in marketing strategies and campaigns."
    },
    {
      name: "Intro to Generative AI on GCP",
      issuer: "Codecademy",
      year: "2024",
      description: "Introduction to Google Cloud Platform's generative AI capabilities and tools."
    },
    {
      name: "Generative AI on AWS",
      issuer: "Codecademy",
      year: "2024",
      description: "Deploying & Managing GenAI Services on AWS."
    },
    {
      name: "JavaScript",
      issuer: "Codecademy",
      year: "2024",
      description: "Comprehensive JavaScript programming fundamentals and applications."
    },
    {
      name: "Google Earth Engine for Remote Sensing & GIS",
      issuer: "Udemy",
      year: "2024",
      description: "Advanced techniques for geospatial analysis and remote sensing using Google Earth Engine."
    },
    {
      name: "Java Developer: Beginner to Master",
      issuer: "Udemy",
      year: "2024",
      description: "Comprehensive Java programming from basic concepts to advanced applications."
    },
    {
      name: "Geospatial APIs for Data Science in Python",
      issuer: "Udemy",
      year: "2024",
      description: "Integration of geospatial APIs with Python for data science applications."
    }
  ];

  const militaryBackground = [
    {
      position: "Navy Veteran - Aviation Boatswain's Mate",
      years: "2012-2018",
      description: "Deployed during Operation Iraqi Freedom. Developed exceptional leadership, critical thinking, and operational skills in high-pressure environments requiring precision and teamwork."
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">Credentials & Education</h2>
        
        {/* Education Section */}
        <div className="mb-16 relative">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-indigo-300 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-8 flex items-center">
            <span className="bg-indigo-500 text-white p-2 rounded-full mr-3">🎓</span>
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 mt-1 flex items-center">
                  <span className="mr-2">🏫</span>
                  {edu.institution} • {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Military Background */}
        <div className="mb-16 relative">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-8 flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-full mr-3">🪖</span>
            Military Service
          </h3>
          <div className="space-y-6">
            {militaryBackground.map((mil, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">{mil.position}</h4>
                <p className="text-blue-600 dark:text-blue-400 mt-1 flex items-center">
                  <span className="mr-2">⏱️</span>
                  {mil.years}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{mil.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="relative">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-green-300 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-8 flex items-center">
            <span className="bg-green-500 text-white p-2 rounded-full mr-3">🏆</span>
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                <p className="text-green-600 dark:text-green-400 mt-1 flex items-center">
                  <span className="mr-2">📜</span>
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
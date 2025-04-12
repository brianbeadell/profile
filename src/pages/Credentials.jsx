export default function Credentials() {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Eastern University",
      year: "2024",
      description: "Specialized in Data Science and Applied Machine Learning"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      year: "2023", // Replace with actual year
      description: "Demonstrated expertise in designing, implementing, and deploying ML solutions on AWS"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022", // Replace with actual year
      description: "Proficiency in building deep learning models using TensorFlow"
    },
    {
      name: "Professional Certificate in AI and Machine Learning",
      issuer: "Professional Institution", // Replace with actual institution
      year: "2021", // Replace with actual year
      description: "Comprehensive training in AI/ML fundamentals and applications"
    }
  ];

  const militaryBackground = [
    {
      position: "Navy Veteran",
      years: "2012-2018", // Replace with your actual years of service
      description: "Served as a Naval medical specialist and commercial diver. Developed exceptional leadership, critical thinking, and operational skills in high-pressure environments requiring precision and teamwork."
    }
  ];

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Credentials & Education</h2>
      
      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">Education</h3>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
              <p className="text-indigo-600 dark:text-indigo-400">{edu.institution} • {edu.year}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Military Background */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">Military Service</h3>
        <div className="space-y-6">
          {militaryBackground.map((mil, idx) => (
            <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
              <h4 className="text-xl font-medium text-gray-900 dark:text-white">{mil.position}</h4>
              <p className="text-indigo-600 dark:text-indigo-400">{mil.years}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{mil.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{cert.name}</h4>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm">{cert.issuer} • {cert.year}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
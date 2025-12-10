import React from 'react';

const Education = () => {
  // Add a unique ID to the education section for better debugging
  const sectionId = 'education-section';
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      school: "Amity University",
      period: "2022 - 2026",
      logo: "/logos/amity-logo.png",
      description: "CGPA 7.28"
    },
    {
      degree: "XII",
      school: "Manava Bharati India International School",
      period: "2020 - 2021",
      description: "80%"
    },
    {
      degree: "X",
      school: "Manava Bharati India International School",
      period: "2018 - 2019",
      description: "86%"
    }
  ];

  return (
    <section id="education" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-purple-200/30"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                      {edu.school.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {edu.degree}
                      </span>
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a 
              href="https://drive.google.com/file/d/1KFZzjIOxZYuCxkN_K9QUogJV2LkKcWhQ/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

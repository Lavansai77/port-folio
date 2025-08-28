import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

const Education: React.FC<EducationProps> = ({ isDark }) => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vaagdevi College of Engineering",
      duration: "2023 - 2026",
      location: "Warangal, Telangana",
      status: "Pursuing",
      highlights: [
        "Core CS subjects: Data Structures, Algorithms, DBMS",
        "Web Development specialization",
        "Active participation in coding competitions",
        "Leadership roles in technical societies"
      ]
    },
    {
      degree: "Diploma in Electronics & Communication",
      institution: "VMR Polytechnic",
      duration: "2020 - 2023",
      location: "Telangana",
      status: "Completed",
      highlights: [
        "Strong foundation in electronic systems",
        "Programming fundamentals",
        "Circuit design and analysis",
        "Technical project development"
      ]
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDark ? 'bg-gray-900 border-blue-500' : 'bg-white border-blue-500'
                } z-10`}></div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <GraduationCap className="text-blue-500 mr-3" size={24} />
                        <div>
                          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-lg font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Pursuing' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex items-center mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {edu.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
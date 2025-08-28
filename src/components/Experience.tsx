import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="experience" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative p-8 rounded-xl shadow-lg ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-full ${
                isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`}>
                <Briefcase className="text-white" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Web Development Intern
                    </h3>
                    <p className={`text-xl font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      EY GDS & AICTE
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Recently Completed
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={18} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      December 2024 - January 2025
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={18} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Remote
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Developed full-stack web applications using MERN stack technologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Collaborated with senior developers on enterprise-level application development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Implemented responsive designs with modern CSS frameworks and best practices
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Participated in code reviews and agile development methodologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Gained hands-on experience with real-world project requirements and deployment
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                    <h5 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'].map((tech, index) => (
                        <span key={index} className={`px-2 py-1 rounded text-sm ${
                          isDark ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                    <h5 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Key Skills Developed
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Full-Stack Development', 'Team Collaboration', 'Agile Methodology', 'Code Reviews'].map((skill, index) => (
                        <span key={index} className={`px-2 py-1 rounded text-sm ${
                          isDark ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="absolute top-6 right-6">
              <div className={`p-2 rounded-full ${
                isDark ? 'bg-yellow-600' : 'bg-yellow-500'
              }`}>
                <Award className="text-white" size={20} />
              </div>
            </div>
          </div>

          {/* Looking for Opportunities */}
          <div className={`mt-8 p-6 rounded-xl text-center ${
            isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
          }`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Open to New Opportunities
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently seeking full-time opportunities in software development, particularly in MERN stack and Python development roles.
              Ready to contribute to innovative projects and grow with forward-thinking teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { Code, Target, Users, Lightbulb } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const highlights = [
    {
      icon: <Code className="text-blue-500" size={24} />,
      title: "Technical Expertise",
      description: "Proficient in MERN stack and Python development with hands-on project experience"
    },
    {
      icon: <Target className="text-green-500" size={24} />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that meet business objectives"
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "Team Player",
      description: "Strong collaborative skills with experience in agile development environments"
    },
    {
      icon: <Lightbulb className="text-orange-500" size={24} />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices to stay current"
    }
  ];

  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate Software & Python Developer currently pursuing my B.Tech in Computer Science. 
              With a strong foundation in both frontend and backend technologies, I specialize in building 
              scalable web applications using the MERN stack and Python.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My journey in technology is driven by adaptability and continuous learning. I believe in 
              delivering high-quality solutions that not only meet technical requirements but also 
              provide exceptional user experiences. My recent internship at EY GDS & AICTE has given me 
              valuable real-world experience in developing enterprise-level applications.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Frontend Focus
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  React.js, JavaScript, Tailwind CSS
                </p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Backend Expertise
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Node.js, Python, MongoDB, MySQL
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className={`p-6 rounded-xl transition-transform hover:scale-105 ${
                isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h4 className={`ml-3 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
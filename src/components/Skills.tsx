import React from 'react';
import { Code, Palette, Server, Database, PenTool as Tool, Users, Phone as Python, Subscript as Javascript, Cpu } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-500" size={28} />,
      skills: [
        { name: "Java", level: 85, icon: "☕" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "SQL", level: 80, icon: "🗄️" },
        { name: "JavaScript", level: 88, icon: "⚡" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Palette className="text-pink-500" size={28} />,
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "Bootstrap", level: 82, icon: "🅱️" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-green-500" size={28} />,
      skills: [
        { name: "Node.js", level: 83, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python Flask", level: 78, icon: "🔥" },
        { name: "REST APIs", level: 87, icon: "📡" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-500" size={28} />,
      skills: [
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Database Design", level: 78, icon: "🏗️" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Tool className="text-purple-500" size={28} />,
      skills: [
        { name: "Git", level: 88, icon: "📚" },
        { name: "GitHub", level: 90, icon: "🐱" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-indigo-500" size={28} />,
      skills: [
        { name: "Problem Solving", level: 90, icon: "🧩" },
        { name: "Teamwork", level: 88, icon: "🤝" },
        { name: "Adaptability", level: 92, icon: "🌟" },
        { name: "Leadership", level: 80, icon: "👑" },
        { name: "Communication", level: 85, icon: "💬" }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Specialized in MERN Stack & Python Development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg hover:shadow-xl`}>
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className={`ml-3 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{skill.icon}</span>
                        <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Python Specialization Highlight */}
        <div className={`mt-12 p-8 rounded-xl text-center ${
          isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-center mb-4">
            <Python className="text-blue-500 mr-3" size={32} />
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Python Development Focus
            </h3>
          </div>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Specialized in Python for web development, data analysis, automation, and API development. 
            Experienced with Flask, Django, and various Python libraries for diverse applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
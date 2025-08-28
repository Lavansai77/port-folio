import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: "Spotify Clone",
      category: "MERN Stack",
      description: "A comprehensive music streaming platform built with the MERN stack, featuring real-time audio playback, dynamic playlist management, and advanced music discovery capabilities.",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
      features: [
        "Advanced song search with real-time filtering",
        "Dynamic playlist creation and management",
        "Seamless real-time music playback",
        "User authentication",
        "Responsive design for all devices",
        "Music library with categorized browsing"
      ],
      links: {
        github: "https://github.com/bandarilavansai/spotify-clone",
        live: "https://spotify-clone-bandari.netlify.app"
      },
      color: "from-green-500 to-emerald-600",
      status: "Live"
    },
    {
      title: "Fitness Management System",
      category: "MERN Stack",
      description: "A complete fitness ecosystem designed to help users achieve their health goals through personalized workout plans, nutrition tracking, and comprehensive progress monitoring.",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Material-UI"],
      features: [
        "Personalized goal-based workout plans",
        "Smart budget-friendly diet recommendations",
        "Advanced calorie calculator and tracker",
        "Interactive progress monitoring dashboard",
        "Automated workout reminders and notifications",
        "BMI calculator and health metrics tracking"
      ],
      links: {
        github: "https://github.com/bandarilavansai/fitness-management",
        live: "https://fitness-tracker-bandari.netlify.app"
      },
      color: "from-blue-500 to-cyan-600",
      status: "Live"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Showcasing real-world MERN Stack applications with live demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75 group-hover:opacity-85 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/25 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/25 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/35 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title="View Live Demo"
                  >
                    <Play size={20} />
                  </a>
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/25 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/35 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700 text-blue-400' : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                      }`}
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                      title="Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Live Demo Button */}
                <div className="mb-6">
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${project.color} text-white shadow-lg hover:shadow-xl`}
                  >
                    <Play size={18} />
                    View Live Demo
                  </a>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-3 flex-shrink-0`}></div>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in collaborating or want to see more projects?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/bandarilavansai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              <ExternalLink size={20} />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
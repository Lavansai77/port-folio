import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${
      isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bandari Lavansai
              </span>
            </h1>
            <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Software & Python Developer
            </h2>
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Building scalable web applications with MERN stack & Python, 
              delivering high-quality solutions with a focus on innovation and excellence
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border-2 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              Contact Me
              <Mail size={20} />
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              isDark ? 'border-gray-600' : 'border-gray-400'
            }`}>
              <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
                isDark ? 'bg-gray-400' : 'bg-gray-600'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
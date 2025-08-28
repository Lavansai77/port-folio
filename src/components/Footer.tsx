import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/bandarilavansai",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/bandarilavansai",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:bandarilavansai@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      isDark 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Bandari Lavansai
            </button>
            <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Software & Python Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className={`text-sm flex items-center justify-center md:justify-end gap-1 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Made with <Heart className="text-red-500" size={16} /> by Bandari Lavansai
            </p>
            <p className={`mt-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 All rights reserved
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm transition-colors hover:text-blue-600 ${
                  isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
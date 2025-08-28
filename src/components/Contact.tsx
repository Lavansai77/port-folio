import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      label: "Email",
      value: "bandarilavansai@gmail.com",
      href: "mailto:bandarilavansai@gmail.com"
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      label: "Location",
      value: "Warangal, Telangana, India",
      href: "#"
    },
    {
      icon: <Github className="text-purple-500" size={24} />,
      label: "GitHub",
      value: "github.com/bandarilavansai",
      href: "https://github.com/bandarilavansai"
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/bandarilavansai",
      href: "https://linkedin.com/in/bandarilavansai"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss opportunities and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  } ${info.href === '#' ? 'cursor-default' : 'hover:shadow-lg'}`}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} mr-4`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      {info.label}
                    </h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Message */}
            <div className={`mt-8 p-6 rounded-lg ${
              isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
            }`}>
              <h4 className={`font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Collaborate?
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out through any of the channels above or use the contact form.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Write your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services (via Forage)",
      date: "2024",
      type: "Cloud Computing",
      description: "Comprehensive understanding of AWS cloud services, architecture design, and best practices for scalable solutions.",
      skills: ["AWS Services", "Cloud Architecture", "Scalability", "Security"],
      color: "from-orange-500 to-yellow-500",
      verified: true
    },
    {
      title: "MERN Stack Development",
      issuer: "AICTE & EY GDS",
      date: "2024-2025",
      type: "Full-Stack Development",
      description: "Intensive training program covering MongoDB, Express.js, React.js, and Node.js with real-world project implementation.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "from-green-500 to-blue-500",
      verified: true
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "2024",
      type: "Data Science",
      description: "Comprehensive course covering data manipulation, analysis, and visualization using Python libraries.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization"],
      color: "from-blue-500 to-purple-500",
      verified: true
    },
    {
      title: "Programming Essentials in Python",
      issuer: "CISCO Networking Academy",
      date: "2024",
      type: "Programming",
      description: "Fundamental and advanced Python programming concepts with practical applications and best practices.",
      skills: ["Python", "Object-Oriented Programming", "Data Structures", "Algorithms"],
      color: "from-indigo-500 to-blue-500",
      verified: true
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "CISCO Networking Academy",
      date: "2023",
      type: "Security",
      description: "Understanding of cybersecurity principles, threat landscape, and security best practices for modern applications.",
      skills: ["Network Security", "Threat Analysis", "Risk Management", "Security Protocols"],
      color: "from-red-500 to-pink-500",
      verified: true
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
            & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${cert.color} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center">
                  <Award className="text-white mr-2" size={24} />
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.type}
                  </span>
                </div>
                {cert.verified && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {cert.issuer}
                </p>
                
                <div className="flex items-center mb-4">
                  <Calendar className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.date}
                  </span>
                </div>

                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 text-sm ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    Skills Gained:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-2 py-1 rounded-full text-xs ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                }`}>
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 p-8 rounded-xl ${
          isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                5
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Certifications
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                4
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tech Domains
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                100%
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Completion Rate
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                2024
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Latest Year
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
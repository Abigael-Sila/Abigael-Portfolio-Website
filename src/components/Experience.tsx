import React from 'react';
import { MapPin, Calendar, Award, Users, Wrench } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Electrical Engineering Intern",
      company: "Kenya Railways Corporation",
      location: "Nairobi, Kenya",
      duration: "June 2023 - August 2023",
      type: "Internship",
      description: "Gained hands-on experience in railway signaling systems, industrial automation, and maintenance procedures.",
      responsibilities: [
        "Assisted in maintenance and troubleshooting of railway signaling systems",
        "Participated in the installation and testing of electrical control systems",
        "Conducted routine inspections of electrical equipment and infrastructure",
        "Collaborated with senior engineers on system upgrade projects",
        "Documented maintenance procedures and created technical reports"
      ],
      skills: ["Industrial Control Systems", "Electrical Maintenance", "Technical Documentation", "Team Collaboration"],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "2022 - Present",
      type: "Freelance",
      description: "Developing web applications and embedded systems solutions for various clients.",
      responsibilities: [
        "Built responsive web applications using React and modern frameworks",
        "Developed mobile applications using React Native and Flutter",
        "Created IoT solutions and embedded systems for smart devices",
        "Provided technical consulting for hardware-software integration projects",
        "Maintained and updated existing client applications"
      ],
      skills: ["React", "React Native", "IoT Development", "Client Management"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in electrical engineering and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className="ml-16 bg-gray-700/30 rounded-xl p-6 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left Side - Basic Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          {exp.icon}
                        </div>
                        <div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            exp.type === 'Internship' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold text-gray-200 mb-3">{exp.company}</p>
                      
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Detailed Info */}
                    <div className="lg:w-2/3">
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                          <Award size={16} />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-600/50 text-xs rounded-full text-gray-300 border border-gray-500/50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">2+</h3>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">10+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">5+</h3>
            <p className="text-gray-400">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
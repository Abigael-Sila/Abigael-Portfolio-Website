// src/components/Experience.tsx
import { useState } from 'react';
import { Award, Users, Wrench, ChevronDown, ChevronUp, MapPin, Calendar, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Experience = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const experiences = [
    {
      "title": "Electrical Engineering Intern",
      "company": "Kenya Space Agency",
      "location": "Nairobi, Kenya",
      "duration": "August 2025 - Present",
      "type": "Internship",
      "description": "Engaged in projects related to satellite systems, ground station operations, and power systems for space technology. Gained exposure to the technical infrastructure supporting space science and Earth observation.",
      "responsibilities": [
        "Assisted in the maintenance and testing of ground station electrical systems",
        "Participated in data acquisition from satellite monitoring systems",
        "Conducted routine inspections of power supply infrastructure for mission-critical equipment",
        "Collaborated with senior engineers on telecommunications and satellite technology projects",
        "Documented system specifications and contributed to technical reports on ongoing missions"
      ],
      "skills": ["Satellite Systems", "Ground Station Operations", "Power Systems", "Technical Documentation", "Team Collaboration"],
      "icon": <Wrench className="w-6 h-6" />
    },
    {
      title: "Electrical Engineering Intern",
      company: "Kenya Railways Corporation",
      location: "Nairobi, Kenya",
      duration: "May 2024 - August 2024",
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
      title: "Freelance",
      company: "Self-Employed",
      location: "Remote",
      duration: "2022 - Present",
      type: "Freelance",
      description: "Developing web applications and embedded systems solutions for various clients. I also offer home electrification and solar panel installation services.",
      responsibilities: [
        "Built responsive web applications using React and modern frameworks",
        "Developed mobile applications using React Native and Flutter",
        "Created IoT solutions and embedded systems for smart devices",
        "Provided technical consulting for hardware-software integration projects",
        "Maintained and updated existing client applications",
        "Performed electrical installations for residential and commercial properties",
        "Installed and maintained solar panel systems for homes and businesses"
      ],
      skills: ["React", "React Native", "IoT Development", "Client Management", "Electrification", "Solar Panel Installation"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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

        {/* ACCORDION LAYOUT (visible on mobile and small screens) */}
        <div className="lg:hidden">
          <div className="space-y-6 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                      <p className="text-lg font-semibold text-gray-200">{exp.company}</p>
                      <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                    </div>
                  </div>
                  {activeAccordion === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      <div className="border-t border-gray-600/50 pt-4 mt-4">
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                            <Award size={16} /> Key Responsibilities
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE LAYOUT (hidden on mobile, visible on large screens) */}
        <div className="hidden lg:block">
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
                          <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
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
        </div>

        {/* Resume View */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <a
            href="Abigael_Sila_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Download size={18} />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
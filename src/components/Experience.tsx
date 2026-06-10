// src/components/Experience.tsx
import { useState } from 'react';
import { Award, Wrench, ChevronDown, ChevronUp, MapPin, Calendar, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Experience = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const experiences = [
     {
      title: "Data Center Engineer",
      company: "Safaricom PLC",
      location: "Nairobi, Kenya",
      duration: "May 2026 - Present",
      type: "Internship",
      description: "Supporting the operation, maintenance, and optimization of critical data center infrastructure, including power, cooling, monitoring, and facility systems. Gaining hands-on experience in data center operations, electrical systems, capacity planning, incident response, and infrastructure reliability while contributing to the delivery of highly available and resilient digital services.",
      responsibilities: [
        "Designing and implementing data center infrastructure and systems",
        "Monitoring system performance to ensure efficiency and system integrity",
        "Carrying out routine maintenance and inspections of equipment and software",
        "Testing and troubleshooting hardware and software issues",
        "Assessing network and server architecture for potential improvements or upgrades",
        "Ensuring the data center’s physical and digital security measures are up to standard",
        "Creating and maintaining detailed documentation of the data center’s layout, systems, and processes",
        "Responding promptly to emergencies or outages, and implementing disaster recovery protocols",
        "Keeping up-to-date with advancements in data center technology and making recommendations for upgrades or new equipment",
        "Working closely with IT staff, vendors, and other stakeholders to meet the data center’s operational goals"
      ],
      skills: ["Electrical Power Systems", "Power Distribution & Protection", "DCIM Systems", "Power System Maintenance", "Renewable Energy Systems", "Fault Diagnosis & Troubleshooting", "Electrical Design & Analysis", "Stakeholder Communication"],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Electrical Engineering Technician",
      company: "Kenya Airports Authority",
      location: "JKIA - Nairobi, Kenya",
      duration: "August 2025 - December 2025",
      type: "Attachment",
      description: "Contributed to the maintenance and operation of electrical systems, including airfield lighting, power distribution, and building management systems. Gained hands-on experience with critical infrastructure in a high-stakes operational environment.",
      responsibilities: [
        "Maintaining and troubleshooting critical airport electrical infrastructure, including transformers, switchgears, distribution boards, and power networks",
        "Diagnosing and resolving complex electrical faults, equipment failures, and power outages to ensure uninterrupted airport operations",
        "Maintaining and testing standby power systems, including diesel generators, UPS systems, battery banks, and automatic transfer switches (ATS)",
        "Calibrating and monitoring Constant Current Regulators (CCRs) to ensure reliable operation of airfield ground lighting circuits",
        "Supporting the maintenance and reliability of airfield ground lighting systems, including runway, taxiway, and approach lighting infrastructure",
        "Performing preventive maintenance, inspections, and performance testing on electrical and electromechanical systems",
        "Maintaining and troubleshooting building electrical services, including lighting systems, power sockets, emergency lighting, and other terminal utility infrastructure",
        "Inspecting and servicing passenger boarding bridge electrical systems",
        "Ensuring compliance with aviation safety standards, electrical regulations, and ICAO Regulations.",
        "Preparing technical documentation, maintenance records, test reports, and equipment performance logs for engineering review"
      ],
      skills: ["Airfield Lighting", "Power Distribution", "Building Management Systems", "Technical Troubleshooting", "Operational Safety"],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Electrical Engineering Technician",
      company: "Kenya Railways Corporation",
      location: "SGR - Nairobi, Kenya",
      duration: "May 2024 - December 2024",
      type: "Attachment",
      description: "Gained hands-on experience in railway signaling systems, industrial automation, and maintenance procedures.",
      responsibilities: [
        "Monitored and operated SCADA systems to supervise power distribution across substations and passing stations along the SGR network",
        "Participated in the maintenance, inspection, and troubleshooting of railway electrical power infrastructure, including transformers, circuit breakers, and distribution equipment",
        "Performed fault diagnosis and corrective maintenance on power supply systems to ensure reliable railway operations",
        "Assisted in power transfer and switching operations between substations while adhering to operational safety procedures",
        "Conducted routine inspections of power lines, electrical installations, and station equipment to identify and resolve potential faults",
        "Supported preventive maintenance activities on critical railway electrical systems to improve system reliability and availability",
        "Interpreted electrical design drawings and equipment layouts for transformer cabinets and power infrastructure projects",
        "Collaborated with engineers and technicians during field maintenance activities, equipment installations, and system restoration works",
        "Prepared maintenance records, technical reports, fault logs, and operational documentation for engineering review",
        "Participated in the planning, procurement, and management of electrical equipment and maintenance materials required for railway operations"
      ],
      skills: ["Power Distribution Systems", "Electrical Maintenance", "Technical Documentation", "Team Collaboration"],
      icon: <Wrench className="w-6 h-6" />
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
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
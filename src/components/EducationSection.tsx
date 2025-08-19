// src/components/EducationSection.tsx

import { motion, Variants } from 'framer-motion';
import { School, GraduationCap, Code } from 'lucide-react';

// Factual data for education history
const educationData = [
  {
    institution: "Moi University",
    degree: "Bachelors of Engineering, Electrical and Electronics Engineering",
    date: "January 2021 - July 2025",
    icon: <GraduationCap />,
    description: "Completed comprehensive coursework in electrical and electronics engineering. Actively participated in various field trips and workshops to gain practical, hands-on experience and sharpen skills.",
  },
  {
    institution: "MODCOM Institute",
    degree: "Web Development Certificate",
    date: "January 2020 - June 2020",
    icon: <Code />,
    description: "Successfully completed a 6-month intensive course in full-stack web development, building a strong foundation in modern web technologies.",
  },
  {
    institution: "Asumbi Girls High School",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    date: "February 2016 - November 2019",
    icon: <School />,
    description: "Focused on Physics and Computer Studies, achieving a final grade of A-. Participated in and attended several science fairs to apply theoretical knowledge.",
  },
  {
    institution: "One Hill's Academy",
    degree: "Primary School Education",
    date: "Completed February 2016",
    icon: <School />,
    description: "Completed primary school education.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A summary of my academic journey and achievements.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line for the timeline - hidden on small screens, centered on large screens */}
        <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gray-700 hidden md:block"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center w-full my-8 md:my-16 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline content and icon container for small screens */}
              <div className="flex flex-col md:flex-row items-center w-full my-8 md:my-0">
                {/* Icon and vertical line for mobile */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg md:hidden mb-4">
                  {item.icon}
                  {index < educationData.length - 1 && (
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-[150%] bg-gray-700 -translate-x-1/2 translate-y-1/2"></div>
                  )}
                </div>
                
                {/* Content for mobile */}
                <div className="text-center md:hidden">
                  <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                  <p className="text-gray-300 italic">{item.degree}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </div>

              {/* Timeline content and icon container for large screens */}
              <div className="hidden md:flex flex-row items-center w-full md:my-0">
                {/* Content for large screens */}
                <div className={`w-5/12 flex-grow ${index % 2 === 0 ? 'text-right pr-16' : 'text-left pl-16'}`}>
                  <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                  <p className="text-gray-300 italic">{item.degree}</p>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>

                {/* Icon for large screens */}
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Empty div for spacing */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
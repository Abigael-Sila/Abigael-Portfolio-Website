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
              className={`relative flex items-center my-8 md:my-16 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content block */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-bold text-white mb-1 md:mb-0">{item.institution}</h3>
                <p className="text-gray-300 italic">{item.degree}</p>
                <p className="text-sm text-gray-400 mb-2 md:mb-0">{item.date}</p>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>

              {/* Icon with connecting line for both mobile and desktop */}
              <div className="md:w-2/12 relative flex justify-center items-center">
                {/* Vertical line for small screens, aligned left with the icon */}
                {index < educationData.length - 1 && (
                  <div className="absolute w-0.5 h-full bg-gray-700 left-1/2 transform -translate-x-1/2 top-1/2 md:hidden"></div>
                )}
                {/* Icon for all screens */}
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg mx-auto">
                  {item.icon}
                </div>
              </div>

              {/* Empty div to balance the layout on large screens */}
              <div className={`hidden md:block md:w-5/12`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
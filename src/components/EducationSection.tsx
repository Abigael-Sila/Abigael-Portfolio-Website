// src/components/EducationSection.tsx

import { motion, Variants } from 'framer-motion';
import { School, GraduationCap } from 'lucide-react';

// Placeholder data for education history
const educationData = [
  {
    institution: "University of Nairobi",
    degree: "Bachelor of Science in Electrical and Electronic Engineering",
    date: "2019 - 2023",
    icon: <GraduationCap />,
    description: "Specialized in telecommunications and computer engineering. Graduated with First Class Honours.",
  },
  {
    institution: "Moi High School, Kabarak",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    date: "2015 - 2018",
    icon: <School />,
    description: "Achieved a grade of A-. Participated in robotics and science fairs.",
  },
  {
    institution: "St. Patrick's Primary School",
    degree: "Kenya Certificate of Primary Education (KCPE)",
    date: "2007 - 2014",
    icon: <School />,
    description: "Awarded top student in the class of 2014.",
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
        {/* Vertical line for the timeline */}
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
              className={`flex flex-col md:flex-row items-center w-full my-8 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`order-1 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                <p className="text-gray-300 italic">{item.degree}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
              <div className="order-2 w-full md:w-2/12 flex justify-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg">
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
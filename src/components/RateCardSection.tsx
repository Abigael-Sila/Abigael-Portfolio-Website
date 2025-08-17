// src/components/RateCardSection.tsx

import { motion, Variants } from 'framer-motion';
import { Code, Globe, Smartphone, Wifi } from 'lucide-react';

// Placeholder data for rate card
const rateCardData = [
  {
    title: "Web Development",
    price: "$50/hour",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    description: "Front-end and back-end development for modern web applications.",
  },
  {
    title: "Mobile App Development",
    price: "$60/hour",
    icon: <Smartphone className="w-6 h-6 text-green-400" />,
    description: "Building native and cross-platform mobile applications.",
  },
  {
    title: "Embedded Systems & IoT",
    price: "$75/hour",
    icon: <Wifi className="w-6 h-6 text-yellow-400" />,
    description: "From concept to prototype, including firmware and hardware design.",
  },
  {
    title: "UI/UX Design",
    price: "$45/hour",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    description: "Creating intuitive and beautiful user interfaces and experiences.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const RateCardSection = () => {
  return (
    <section id="rate-card" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Rate Card</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparent pricing for my professional services.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {rateCardData.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-700/50 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
            <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {service.price}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RateCardSection;
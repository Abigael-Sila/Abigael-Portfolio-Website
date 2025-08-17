// src/components/TestimonialsSection.tsx

import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

// Placeholder data for testimonials
const allTestimonials = [
  {
    quote: "Abigael's work on our project was exceptional. Her attention to detail and technical skills are top-notch.",
    name: "John Doe",
    title: "CEO, Tech Solutions Inc.",
  },
  {
    quote: "A true professional and a pleasure to work with. She delivered a beautiful and functional design ahead of schedule.",
    name: "Jane Smith",
    title: "Project Manager, Creative Works",
  },
  {
    quote: "Her expertise in embedded systems helped us solve a complex problem we had been struggling with for months.",
    name: "Michael Green",
    title: "Lead Engineer, IoT Innovations",
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

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          What <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from those I've had the pleasure of working with.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {allTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
          >
            <Quote className="w-8 h-8 text-blue-500 mb-4" />
            <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
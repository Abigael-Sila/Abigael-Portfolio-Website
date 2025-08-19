// src/components/TestimonialsSection.tsx

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Placeholder data for testimonials with your clients' names
const allTestimonials = [
  {
    quote: "Working with Abigael was an absolute pleasure. Her attention to detail and creative approach made our portfolio a standout project.",
    name: "James Ngene",
    title: "Satisfied Client",
  },
  {
    quote: "Abigael's expertise in web development and design is top-notch. She delivered a beautiful and highly functional website that exceeded all our expectations.",
    name: "Emmanuel Ngetich",
    title: "Satisfied Client",
  },
  {
    quote: "Lucas Kunkuru's portfolio site, designed by Abigael, perfectly captures his professional brand. The clean and modern design is a testament to her skills.",
    name: "Lucas Kunkuru",
    title: "Satisfied Client",
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
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  const testimonial = allTestimonials[currentTestimonial];

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

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-20">
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative bg-gray-800/50 rounded-xl p-8 md:p-12 border border-gray-700/50 min-h-[300px] flex flex-col justify-center items-center"
          >
            <Quote className="w-10 h-10 text-blue-500 mb-6" />
            <p className="text-gray-300 italic text-center mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;
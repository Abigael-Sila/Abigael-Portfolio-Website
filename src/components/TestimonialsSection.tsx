// src/components/TestimonialsSection.tsx

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Factual data for testimonials
const allTestimonials = [
  {
    quote: "Working with Abigael was an absolute pleasure. Her attention to detail and creative approach made our portfolio a standout project.",
    name: "James Ngene",
    title: "Satisfied Client",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop", // Replace with actual image
  },
  {
    quote: "Abigael's expertise in web development and design is top-notch. She delivered a beautiful and highly functional website that exceeded all our expectations.",
    name: "Emmanuel Ngetich",
    title: "Satisfied Client",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", // Replace with actual image
  },
  {
    quote: "Abigael's work on Lucas Kunkuru's portfolio perfectly captures his professional brand. The clean and modern design is a testament to her skills.",
    name: "Lucas Kunkuru",
    title: "Satisfied Client",
    image: "https://images.unsplash.com/photo-1544725176-7c40e6a71c5e?q=80&w=1740&auto=format&fit=crop", // Replace with actual image
  },
];

const itemVariants: Variants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentTestimonial((prev) =>
          prev === allTestimonials.length - 1 ? 0 : prev + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentTestimonial]);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
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
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          What clients say about my work.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              variants={itemVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="group relative bg-gray-800/50 rounded-xl border border-gray-700/50 p-8 min-h-[400px] flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center"
            >
              {/* Person's Image (Now on top on mobile) */}
              <div className="flex flex-col items-center mt-8 md:mt-0 md:w-1/3 order-1 md:order-2">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full">
                    <Quote size={16} />
                  </div>
                </div>
              </div>

              {/* Testimonial Content (Now below image on mobile) */}
              <div className="flex flex-col items-center md:items-start md:w-2/3 md:pr-12 order-2 md:order-1">
                <div className="md:hidden">
                  <Quote size={48} className="text-blue-500 mb-4" />
                </div>
                <p className="text-gray-300 italic text-center text-xl font-serif leading-relaxed mb-6 md:text-left">"{testimonial.quote}"</p>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
                {/* Navigation buttons and "See All Reviews" button moved inside the card and centered */}
                <div className="flex justify-center items-center space-x-4 mt-8 md:mt-12 w-full">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    title="Previous Testimonial"
                    className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <a
                    href="#"
                    className="text-white text-sm uppercase font-semibold tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    See All Reviews
                  </a>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    title="Next Testimonial"
                    className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
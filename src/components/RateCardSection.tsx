// src/components/RateCardSection.tsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Code, Globe, Smartphone, Wifi, Zap, Sun } from 'lucide-react';

// Updated data for rate card with new services and no prices
const rateCardData = [
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    description: "Front-end and back-end development for modern web applications.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-6 h-6 text-green-400" />,
    description: "Building native and cross-platform mobile applications.",
  },
   {
    title: "UI/UX Design",
    price: "$45/hour",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    description: "Creating intuitive and beautiful user interfaces and experiences.",
  },
  {
    title: "Residential Electrification",
    icon: <Zap className="w-6 h-6 text-red-400" />,
    description: "Safe and efficient electrical systems for homes and residential properties.",
  },
  {
    title: "Solar Panel Installation",
    icon: <Sun className="w-6 h-6 text-orange-400" />,
    description: "Complete solar panel solutions for sustainable and reliable power.",
  },
  {
    title: "Embedded Systems & IoT",
    icon: <Wifi className="w-6 h-6 text-yellow-400" />,
    description: "From concept to prototype, including firmware and hardware design.",
  },

];

const RateCardSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % rateCardData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + rateCardData.length) % rateCardData.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardElement = carouselRef.current.children[currentSlide] as HTMLElement;
      const cardWidth = cardElement.clientWidth;
      const cardMargin = 32; // This is the space-x-8 from Tailwind CSS, which is 32px
      carouselRef.current.scrollTo({
        left: currentSlide * (cardWidth + cardMargin),
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

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

      <div className="relative max-w-6xl mx-auto">
        {/* Carousel Navigation */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-20">
          <button
            onClick={handlePrev}
            aria-label="Previous card"
            title="Previous card"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next card"
            title="Next card"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>
            {`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {rateCardData.map((service, index) => (
            <motion.div
              key={index}
              className="flex-none w-[90%] sm:w-1/2 lg:w-1/3 group relative bg-gray-800/50 rounded-xl overflow-hidden p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-700/50 p-3 rounded-full">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
              <div className="mt-8 text-center">
                <button
                  aria-label="View Rates"
                  className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  View Rates
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RateCardSection;
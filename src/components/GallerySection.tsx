// src/components/GallerySection.tsx

import { motion, Variants } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Placeholder data for gallery items
const galleryItems = [
  {
    image: "https://images.pexels.com/photos/1739503/pexels-photo-1739503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "UI/UX Design Mockup",
    description: "A clean and modern interface for a mobile application.",
  },
  {
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Hardware Prototype",
    description: "The initial prototype of a connected device.",
  },
  {
    image: "https://images.pexels.com/photos/1036814/pexels-photo-1036814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Project Workflow",
    description: "Visualizing the development process from ideation to completion.",
  },
];

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
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
      const cardWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollTo({
        left: currentSlide * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  return (
    <section id="gallery" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gallery</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my creative work, from design to photography.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Carousel Navigation */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-20">
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            title="Previous image"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            title="Next image"
            className="p-3 bg-gray-800/50 rounded-full text-white hover:bg-gray-700 transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex space-x-8 overflow-x-auto snap-x snap-mandatory scroll-p-4 md:scroll-p-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>
            {`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[90%] md:w-1/2 lg:w-1/3 snap-center group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
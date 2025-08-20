// src/components/GallerySection.tsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import your new images with the correct .jpg file extensions
import Abbie1 from '../assets/Abbie1.jpg';
import Abbie2 from '../assets/Abbie2.jpg';
import Abbie3 from '../assets/Abbie3.jpg';
import Abbie4 from '../assets/Abbie4.jpg';
import Abbie5 from '../assets/Abbie5.jpg';

// Updated data for gallery items with new images and descriptions
const galleryItems = [
  {
    image: Abbie1,
    title: "Engineering on Site",
    description: "Inspecting an electrical panel during a field project.",
  },
  {
    image: Abbie2,
    title: "Project Progress",
    description: "Documenting progress on a complex engineering installation.",
  },
  {
    image: Abbie3,
    title: "The Engineer's Climb",
    description: "Taking a moment on a locomotive at Kenya Railways.",
  },
  {
    image: Abbie4,
    title: "Railway Signaling",
    description: "Hands-on experience with railway signaling and control systems.",
  },
  {
    image: Abbie5,
    title: "Overlooking the Tracks",
    description: "At the end of a long day of work, taking a break on the tracks.",
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
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[90%] md:w-1/2 lg:w-1/3 group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
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
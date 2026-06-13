// src/components/GallerySection.tsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import your new images with the correct .jpg file extensions
import EHU from '../assets/EHU.jpeg';
import MWC from '../assets/MWC.jpeg';
import WED from '../assets/WED.jpeg';
import GenSet from '../assets/GenSet.jpeg';
import Pole from '../assets/Pole.jpeg';
import Runway from '../assets/runway lights.jpeg';
import BMS from '../assets/BMS.jpeg';
import Abbie2 from '../assets/Abbie2.jpg';
import Abbie3 from '../assets/Abbie3.jpg';
import Abbie6 from '../assets/Abbie6.jpg';

// Updated data for gallery items with new images and descriptions
const galleryItems = [
  {
    image: EHU,
    title: "Environment Handling Units",
    description: "Conducting a routine inspection and maintenance check on an Environment Handling Unit (EHU).",
  },
  {
    image: MWC,
    title: "Mini MWC 2026",
    description: "Attending the Safaricom & Huawei Mini MWC, exploring the latest telecommunications innovations.",
  },
  {
    image: WED,
    title: "World Engineering Day 2026",
    description: "Celebrating engineering innovation and sustainable development solutions alongside fellow industry professionals.",
  },
  {
    image: GenSet,
    title: "Backup Power Solutions",
    description: "Maintenance of industrial generator sets ensuring high availability.",
  },
  {
    image: Pole,
    title: "Overhead Infrastructure",
    description: "Field inspection and maintenance of utility poles and overhead power distribution lines.",
  },
  {
    image: Runway,
    title: "Airfield Ground Lighting",
    description: "Maintenance and operation of critical runway lighting and specialized aviation electrical systems.",
  },
  {
    image: BMS,
    title: "Building Management",
    description: "Relamping operation to restore nominal illuminance levels and improve energy efficiency across facility infrastructure.",
  },
    {
    image: Abbie6,
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
    title: "Enjoying the Job",
    description: "Taking a moment on a locomotive at Kenya Railways.",
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
              {/* Increased the height of the image container to h-[400px] */}
              <div className="relative h-[575px] overflow-hidden">
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
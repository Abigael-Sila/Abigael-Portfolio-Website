// src/components/BlogSection.tsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, ArrowLeft, ArrowRight } from 'lucide-react';

// Placeholder data for blog posts
const allBlogPosts = [
  {
    title: "The Future of IoT in Smart Cities",
    date: "July 25, 2024",
    excerpt: "Exploring how embedded systems and connected devices are transforming urban living.",
    link: "/blog/post-1",
  },
  {
    title: "A Designer's Guide to Frontend Frameworks",
    date: "June 10, 2024",
    excerpt: "My journey into front-end development and why I chose React and Tailwind CSS.",
    link: "/blog/post-2",
  },
  {
    title: "Building an SOS Device with ESP32 and A9G",
    date: "May 1, 2024",
    excerpt: "A deep dive into the technical challenges and solutions for the Symphion project.",
    link: "/blog/post-3",
  },
];

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % allBlogPosts.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + allBlogPosts.length) % allBlogPosts.length);
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
    <section id="blog" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on technology and creativity.
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
          {allBlogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="flex-none w-[90%] sm:w-1/2 lg:w-1/3 group relative bg-gray-800/50 rounded-xl overflow-hidden p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <Pencil className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link
                to={post.link}
                className="text-blue-400 font-semibold text-sm hover:underline"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
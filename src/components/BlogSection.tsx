// src/components/BlogSection.tsx

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, ArrowLeft, ArrowRight, Mail, Sparkles, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
  const [showPopup, setShowPopup] = useState(false);

  // Replace with your actual EmailJS credentials
  const serviceId = 'service_opuoiab';
  const templateId = 'template_ac1a5zb';
  const publicKey = 'Dxq52kbbRczsrJ78J';

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

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.email.value;

    emailjs.send(serviceId, templateId, { email: emailInput }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowPopup(true);
        form.reset(); // Clear the form input
        setTimeout(() => {
          setShowPopup(false);
        }, 9000); // Hide the pop-up after 5 seconds
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to subscribe. Please try again later.');
      });
  };

  return (
    <section id="blog" className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative">
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
      
      {/* Newsletter Subscription Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-16 max-w-xl mx-auto text-center"
      >
        <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <Mail className="w-12 h-12 mx-auto text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Stay Updated!</h3>
          <p className="text-gray-400 mb-6">
            Never miss a new blog post or an important update. Subscribe to my newsletter!
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Thank You Pop-up */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -50 }}
          transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl z-50 shadow-2xl backdrop-blur-md"
          style={{ 
            background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.3), rgba(200, 150, 255, 0.3))',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-4"
            >
              <Sparkles className="w-16 h-16 text-yellow-300" />
            </motion.div>
            <h3 className="text-4xl font-extrabold text-white mb-2">
              You're in! ✨
            </h3>
            <p className="text-gray-100 text-lg mb-4 max-w-xs">
              Thank you for subscribing to my newsletter. You'll be the first to know about new updates!
            </p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            >
              <Heart className="w-12 h-12 text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BlogSection;
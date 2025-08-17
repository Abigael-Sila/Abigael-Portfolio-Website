// src/components/BlogSection.tsx

import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

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

const BlogSection = () => {
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {allBlogPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
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
      </motion.div>
    </section>
  );
};

export default BlogSection;
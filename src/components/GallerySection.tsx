// src/components/GallerySection.tsx

import { motion, Variants } from 'framer-motion';

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
};

const GallerySection = () => {
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
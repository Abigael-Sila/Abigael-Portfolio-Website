// src/pages/AllProjectsPage.tsx

import { Github, ExternalLink, Play } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Removed 'type' keyword, directly import Variants
import { allProjects } from '../data/projectsData.tsx'; // Ensure .tsx extension for JSX content

const AllProjectsPage = () => {

  // Variants for the main container to orchestrate staggered entry of cards
  const containerVariants: Variants = { // Explicitly type containerVariants
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child's animation
        delayChildren: 0.2 // Delay before the first child starts animating
      }
    }
  };

  // Variants for each individual project card
  const itemVariants: Variants = { // Explicitly type itemVariants
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // Reverting to "easeOut" string. If this still fails, your framer-motion or TypeScript
        // installation might need a refresh or specific tsconfig.json adjustment for library types.
        ease: "easeOut"
      }
    }
  };

  // Variants for the hover effect on each card

  // Variants for the play icon appearing on hover
  const playIconVariants: Variants = { // Explicitly type playIconVariants
    initial: { opacity: 0, x: 10 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          All <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive showcase of my completed and ongoing works.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants} // For page entry animation (hidden to show)
            initial="hidden" // Start from hidden state defined in itemVariants
            animate="show"   // Animate to show state defined in itemVariants
            whileHover="hover" // Use the 'hover' state from cardHoverVariants
            whileTap="tap" // Optional: Add a tap state for mobile or click feedback
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </div>

              {/* Category Icon */}
              <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg text-blue-400">
                {project.icon}
              </div>

              {/* Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"
              >
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live Demo of ${project.title}`}
                      className="text-gray-200 hover:text-white ml-3 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                <motion.div
                  variants={playIconVariants} // Apply play icon specific variants
                  initial="initial" // Start with initial state for the icon
                  whileHover="hover" // Animate to hover state when parent card is hovered
                  // Tailwind `group-hover` ensures the `motion.div` is present in DOM to be animated
                  className="hidden group-hover:block"
                >
                  <Play className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700/50 text-xs rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Back to Home button */}
      <div className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: allProjects.length * 0.1 + 0.5, duration: 0.5 }}
        >
          <a
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
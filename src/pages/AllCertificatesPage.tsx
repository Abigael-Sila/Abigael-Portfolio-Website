// src/pages/AllCertificatesPage.tsx
import { motion, Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCertificates } from '../data/certificatesData.tsx';

const AllCertificatesPage = () => {
    
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
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
          All <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificates</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive list of my professional certificates and achievements.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {allCertificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
          >
            {/* Certificate Content */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <p className="text-gray-300 text-sm mb-6 flex-grow">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg font-semibold text-sm hover:bg-blue-500/30 transition-colors"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Back to Home button */}
      <div className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: allCertificates.length * 0.1 + 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AllCertificatesPage;
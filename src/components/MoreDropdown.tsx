// src/components/MoreDropdown.tsx

import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa'; // Icon for the dropdown
import { motion, AnimatePresence } from 'framer-motion';

interface MoreDropdownProps {
  links: { name: string; href: string; icon: JSX.Element }[];
  scrollToSection: (href: string) => void;
  activeLink: string;
}

const MoreDropdown = ({ links, scrollToSection, activeLink }: MoreDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium transition-colors duration-200 px-3 py-2 text-gray-300 hover:text-blue-400 focus:outline-none"
        aria-label="More navigation links"
      >
        <div className="flex items-center space-x-1">
          <span>More</span>
          <FaEllipsisH className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 right-0 z-50 w-48 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg py-2"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 ${
                  activeLink === link.href ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoreDropdown;
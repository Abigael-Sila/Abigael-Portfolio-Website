import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaEnvelope,
  FaCertificate,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/', icon: <FaHome /> },
    { label: 'About', href: '/#about', icon: <FaUser /> },
    { label: 'Projects', href: '/#projects', icon: <FaFolderOpen /> },
    { label: 'Experience', href: '/#experience', icon: <FaChalkboardTeacher /> },
    { label: 'Skills', href: '/#skills', icon: <FaLaptopCode /> },
    { label: 'Certificates', href: '/#certificates', icon: <FaCertificate /> },
    { label: 'Contact', href: '/#contact', icon: <FaEnvelope /> },
  ];

  const floatingIcons = [
    { label: 'Home', href: '/', icon: <FaHome /> },
    { label: 'About', href: '/#about', icon: <FaUser /> },
    { label: 'Projects', href: '/#projects', icon: <FaFolderOpen /> },
    { label: 'Contact', href: '/#contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Off-canvas menu for mobile/small screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 h-screen w-full transform bg-gray-900/90 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white" aria-label="Close navigation menu">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex h-full flex-col items-center justify-center space-y-8 text-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className="text-2xl font-bold transition-colors hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main navigation bar for large screens */}
      <header className="sticky top-0 z-40 bg-gray-900 shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo/Name */}
          <a href="/" className="flex items-center space-x-2 text-xl font-bold text-white">
            <span className="text-blue-400">Abigael Kalunde Sila</span>
          </a>

          {/* Top-aligned menu for large screens */}
          <nav className="hidden space-x-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-white transition-colors hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white" aria-label="Toggle navigation menu">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating vertical icon bar for large screens */}
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col space-y-4 lg:flex">
        {floatingIcons.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-500"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
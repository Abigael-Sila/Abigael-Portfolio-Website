import { useState, useEffect } from 'react';
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
import AbigaelLogo from '../assets/abigael_logo.png'; // Assuming your logo is in this path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Projects', href: '#projects', icon: <FaFolderOpen /> },
    { name: 'Experience', href: '#experience', icon: <FaChalkboardTeacher /> },
    { name: 'Skills', href: '#skills', icon: <FaLaptopCode /> },
    { name: 'Certificates', href: '#certificates', icon: <FaCertificate /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
  ];

  const floatingIcons = [
    { label: 'Home', href: '/', icon: <FaHome /> },
    { label: 'About', href: '#about', icon: <FaUser /> },
    { label: 'Projects', href: '#projects', icon: <FaFolderOpen /> },
    { label: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  // Scroll effect from the old Header component
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Handle the root path or other non-anchor links
      window.location.href = href;
    }
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <>
      {/* Off-canvas menu for mobile/small screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 h-screen w-full transform bg-gray-900/90 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white" aria-label="Close navigation menu">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex h-full flex-col items-center justify-center space-y-8 text-white">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-bold transition-colors hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main navigation bar for large screens */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo from the original Header component */}
            <a href="/" className="flex items-center space-x-2">
              <img 
                src={AbigaelLogo} 
                alt="Abigael Kalunde Sila Logo" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abigael Kalunde Sila
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile hamburger icon */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Toggle navigation menu">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>
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

export default Header;
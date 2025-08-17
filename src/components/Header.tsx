// src/components/Header.tsx

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
  FaEllipsisV,
  FaTools,
  FaQuoteRight,
  FaImages,
  FaDollarSign,
  FaBlog,
  FaGraduationCap,
  FaEllipsisH,
} from 'react-icons/fa';
import AbigaelLogo from '../assets/abigael_logo.png';
import ShareButton from './ShareButton';
import MoreDropdown from './MoreDropdown'; // Import the new component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isFloatingMoreOpen, setIsFloatingMoreOpen] = useState(false);

  // Main navigation links for the desktop header and top of mobile menu
  const mainNavigation = [
    { name: 'Home', href: '#home', icon: <FaHome className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <FaUser className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <FaFolderOpen className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="w-5 h-5" /> },
  ];

  // Links for the "More" dropdown and mobile menu
  const moreNavigation = [
    { name: 'Education', href: '#education', icon: <FaGraduationCap className="w-5 h-5" /> },
    { name: 'Testimonials', href: '#testimonials', icon: <FaQuoteRight className="w-5 h-5" /> },
    { name: 'Experience', href: '#experience', icon: <FaChalkboardTeacher className="w-5 h-5" /> },
    { name: 'Skills', href: '#skills', icon: <FaLaptopCode className="w-5 h-5" /> },
    { name: 'Certificates', href: '#certificates', icon: <FaCertificate className="w-5 h-5" /> },
    { name: 'Gallery', href: '#gallery', icon: <FaImages className="w-5 h-5" /> },
    { name: 'Services', href: '#services', icon: <FaTools className="w-5 h-5" /> },
    { name: 'Rate Card', href: '#rate-card', icon: <FaDollarSign className="w-5 h-5" /> },
    { name: 'Blog', href: '#blog', icon: <FaBlog className="w-5 h-5" /> },
  ];
  
  // Combine all links for the mobile menu
  const navigation = [...mainNavigation, ...moreNavigation];

  // Floating icons, now with logical grouping for visual clarity
  const floatingIconsGroup1 = [
    { label: 'Home', href: '#home', icon: <FaHome /> },
    { label: 'About', href: '#about', icon: <FaUser /> },
    { label: 'Projects', href: '#projects', icon: <FaFolderOpen /> },
    { label: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  const floatingIconsGroup2 = [
    { label: 'Experience', href: '#experience', icon: <FaChalkboardTeacher /> },
    { label: 'Skills', href: '#skills', icon: <FaLaptopCode /> },
    { label: 'Certificates', href: '#certificates', icon: <FaCertificate /> },
    { label: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { label: 'Testimonials', href: '#testimonials', icon: <FaQuoteRight /> },
    { label: 'Gallery', href: '#gallery', icon: <FaImages /> },
    { label: 'Services', href: '#services', icon: <FaTools /> },
    { label: 'Rate Card', href: '#rate-card', icon: <FaDollarSign /> },
    { label: 'Blog', href: '#blog', icon: <FaBlog /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      setActiveLink(window.location.hash);
    } else {
      setActiveLink('#home');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Off-canvas menu for mobile/small screens */}
      <div
        className={`fixed inset-y-0 right-0 z-50 h-screen w-96 transform bg-gray-900/80 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-row-reverse justify-between items-center p-4">
          <span className="text-xl font-bold text-white">Abigael Kalunde Sila</span>
          <button onClick={() => setIsMenuOpen(false)} className="text-white" aria-label="Close navigation menu">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2 text-white overflow-y-auto">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-colors duration-200 ${
                activeLink === link.href || (activeLink === '' && link.href === '#home')
                  ? 'bg-blue-600/20 text-blue-400 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
              }`}
            >
              {link.icon}
              <span className="text-lg">{link.name}</span>
            </a>
          ))}

          <div className="mt-4">
            <ShareButton label=" my portfolio" />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main navigation bar for large screens */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
                {mainNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 px-3 py-2 ${
                      activeLink === item.href || (activeLink === '' && item.href === '#home')
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-300 hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <MoreDropdown
                  links={moreNavigation}
                  scrollToSection={scrollToSection}
                  activeLink={activeLink}
                />
                <div className="relative">
                  <ShareButton label="" />
                </div>
              </div>
            </div>

            {/* Mobile kebab icon */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2" aria-label="Toggle navigation menu">
                {isMenuOpen ? <FaTimes size={24} /> : <FaEllipsisV size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating vertical icon bar with transparent captions for large screens */}
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col space-y-4 lg:flex">
        {floatingIconsGroup1.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={`group flex items-center justify-center relative p-2 h-12 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110
              ${
                activeLink === item.href || (activeLink === '' && item.href === '#home')
                  ? 'bg-blue-500'
                  : 'bg-gray-800 hover:bg-blue-500'
              }`}
            title={item.label}
          >
            {item.icon}
            <span className="absolute right-full mr-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 min-w-max">
              {item.label}
            </span>
          </a>
        ))}

        {isFloatingMoreOpen && (
          <div className="flex flex-col space-y-4">
            {floatingIconsGroup2.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`group flex items-center justify-center relative p-2 h-12 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110
                  ${
                    activeLink === item.href ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-500'
                  }`}
                title={item.label}
              >
                {item.icon}
                <span className="absolute right-full mr-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 min-w-max">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsFloatingMoreOpen(!isFloatingMoreOpen)}
          className={`relative p-2 h-12 rounded-full text-white shadow-lg transition-all duration-300 ${
            isFloatingMoreOpen ? 'bg-blue-500 rotate-180' : 'bg-gray-800 hover:bg-blue-500'
          }`}
          aria-label="Toggle more icons"
        >
          <FaEllipsisH className="h-full w-full" />
        </button>
      </div>
    </>
  );
};

export default Header;
import {Heart, Github, Linkedin, Mail } from 'lucide-react';
import AbigaelLogo from '../assets/abigael_logo.png';
import ShareButton from './ShareButton'; // Import the new ShareButton component

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Application Development',
    'Mobile App Development',
    'Embedded Systems Development',
    'IoT Solutions',
    'Technical Consulting',
    'Electrification & Solar Panel Installation',
    'UI/UX Design',
    'PCB Design'
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Abigael-Sila', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/abigael-sila', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:abigaelkalundesila@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                  src={AbigaelLogo} 
                  alt="Abigael Kalunde Sila Logo" 
                  className="w-10 h-10 rounded-full object-cover"
                />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abigael Kalunde Sila
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Electrical & Electronics Engineer with extra skills in embedded systems, IoT solutions, web and mobile app development and ui/ux design. Creator of innovative projects like Symphion wearable SOS device.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <div className="bg-gray-800 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-300">
                <ShareButton label="my portfolio" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 abigaelkalundesila@gmail.com</p>
              <p>📱 +254 707 321 345</p>
              <p>📍 Nairobi, Kenya</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Open for opportunities</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Abigael Kalunde Sila</span>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Abigael Kalunde Sila. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
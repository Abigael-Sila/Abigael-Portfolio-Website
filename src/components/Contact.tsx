import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Download, MapPin, Phone, X, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abigaelkalundesila@gmail.com",
      link: "mailto:abigaelkalundesila@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+254 707 321 345",
      link: "tel:+254707321345"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
      link: "#"
    }
  ];

  const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    link: "https://github.com/Abigael-Sila",
    color: "hover:text-gray-400"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abigael-sila-542a36350/",
    color: "hover:text-blue-400"
  },
  {
    icon: <X className="w-6 h-6" />,
    label: "Twitter",
    link: "https://x.com/AbbieSila",
    color: "hover:text-blue-400"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    link: "https://www.instagram.com/abigael_sila/?hl=en",
    color: "hover:text-pink-400"
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    label: "Facebook",
    link: "https://www.facebook.com/abigael.sillah.1",
    color: "hover:text-blue-600"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    link: "https://wa.me/254707321345",
    color: "hover:text-green-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    link: "mailto:abigaelkalundesila@gmail.com",
    color: "hover:text-green-400"
  }
];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life
          </p>
        </div>
      

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects, and innovative ideas. Whether you need help with embedded systems, IoT solutions, software development, or UI/UX Design, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

                {/* Resume View */}
<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
  <h4 className="text-lg font-semibold mb-3 text-blue-400">Resume</h4>
  <p className="text-gray-300 mb-4">
    View my resume to learn more about my experience and qualifications.
  </p>
  <a
    href="Abigael_Sila_Resume.pdf" // Correct path to the file in the public directory
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Recommended for security when using target="_blank"
    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    <Download size={18} />
    View Resume
  </a>
</div>
              </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
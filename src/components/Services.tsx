// src/components/Services.tsx
import { Code, Lightbulb, Zap, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web & Mobile Design and Development',
      description: 'Building and design modern, responsive web applications and creating cross-platform mobile apps.',
      icon: <Code className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Residential & Commercial Electrification',
      description: 'Providing professional electrical installation and wiring services for homes, businesses, and apartments to ensure safe and efficient power distribution.',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-orange-400'
    },
    {
      title: 'Solar Panel Installation',
      description: 'Offering complete solar energy solutions, from system design to installation, for residential and commercial properties to help you transition to renewable energy.',
      icon: <Sun className="w-6 h-6" />, 
      color: 'text-green-400'
    },
    {
      title: 'Embedded Systems & IoT',
      description: 'Designing and developing intelligent solutions for hardware-software integration, including smart devices and Internet of Things applications.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'text-purple-400'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">I Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Available for hire to bring your projects to life, from code to circuit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100">{service.title}</h3>
              </div>
              <p className="text-gray-400">{service.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
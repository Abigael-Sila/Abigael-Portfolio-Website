import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    // Replace this with your actual certificate data
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "February 2024",
      link: "https://www.credly.com/badges/your-certificate-id",
      image: "https://images.credly.com/size/340x340/images/0063490f-0261-4c68-aa98-316279f06a0e/AWS-Cloud-Practitioner-2020.png",
      description: "Validated a foundational understanding of AWS Cloud concepts, services, security, and economics."
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "January 2024",
      link: "https://www.udemy.com/certificate/your-certificate-id/",
      image: "https://image.shutterstock.com/image-vector/certificate-of-completion-template-vintage-600w-128913346.jpg",
      description: "Mastered React.js fundamentals, hooks, state management (Redux), and building scalable web applications."
    },
    {
      name: "Embedded Systems Development",
      issuer: "Coursera",
      date: "December 2023",
      link: "https://coursera.org/verify/your-certificate-id",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2230?w=500&auto=format&fit=crop",
      description: "Gained expertise in microcontroller programming, sensor integration, and real-time operating systems."
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my professional development and acquired expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 flex flex-col items-center text-center hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-400" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
// src/components/Certificates.tsx
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCertificates } from '../data/certificatesData.tsx';

const Certificates = () => {
  // Certificates to display (first three)
  const certificatesToDisplay = allCertificates.slice(0, 3);

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my professional development and acquired expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesToDisplay.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 flex flex-col items-center text-center hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
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
          ))}
        </div>
        
        {/* View All Certificates Button */}
        <div className="mt-12 text-center">
          <Link
            to="/all-certificates" // This is the new route for your All Certificates page
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Certificates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
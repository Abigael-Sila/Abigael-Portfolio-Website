// src/components/ShareButton.tsx

import { useState } from 'react';
import {
  FaShareAlt,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaQrcode,
  FaTimes,
  FaCopy,
} from 'react-icons/fa';
import { Mail, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface ShareButtonProps {
  label: string;
}

const ShareButton = ({ label }: ShareButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const portfolioUrl = window.location.href;
  const portfolioTitle = "Abigael Kalunde Sila's Portfolio";

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
        aria-label={`Share ${label}`}
      >
        <FaShareAlt className="w-5 h-5" />
        <span>Share {label}</span>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Share My Portfolio</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close share modal"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex justify-around py-4 border-b border-gray-700">
              <a
                href={`https://twitter.com/intent/tweet?text=${portfolioTitle}&url=${portfolioUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <X size={32} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${portfolioUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${portfolioTitle}: ${portfolioUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors duration-200"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp size={32} />
              </a>
              <a
                href={`mailto:?subject=${portfolioTitle}&body=Check out my portfolio: ${portfolioUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Share via Email"
              >
                <Mail size={32} />
              </a>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <FaLink className="text-blue-400" />
                <input
                  type="text"
                  value={portfolioUrl}
                  readOnly
                  className="flex-grow p-2 text-sm bg-gray-700 text-white rounded-md"
                  aria-label="Portfolio URL"
                />
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  aria-label="Copy URL to clipboard"
                >
                  <FaCopy size={20} />
                </button>
              </div>
              {copied && <p className="text-center text-green-500 text-sm">Link copied to clipboard!</p>}

              <div className="flex flex-col items-center justify-center space-y-2">
                <FaQrcode className="text-blue-400" size={24} />
                <span className="text-sm font-medium text-white">Scan QR Code</span>
                <div className="w-32 h-32 bg-white flex items-center justify-center rounded-lg p-2">
                  <QRCodeSVG value={portfolioUrl} size={112} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
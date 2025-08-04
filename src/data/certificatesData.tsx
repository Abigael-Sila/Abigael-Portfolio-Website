// src/data/certificatesData.tsx
import { Award, Code, Monitor, GraduationCap } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link: string;
  image: string; // URL or local path to the image
  description: string;
  icon: React.ReactNode;
}

export const allCertificates: Certificate[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "February 2024",
    link: "https://www.credly.com/badges/your-aws-cert-id",
    image: "/assets/aws-certified-cloud-practitioner.png", // Example image path from public folder
    description: "Validated a foundational understanding of AWS Cloud concepts, services, security, and economics.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "January 2024",
    link: "https://www.udemy.com/certificate/your-udemy-cert-id/",
    image: "/assets/react-complete-guide.png", // Example image path from public folder
    description: "Mastered React.js fundamentals, hooks, state management (Redux), and building scalable web applications.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Embedded Systems Design",
    issuer: "Coursera",
    date: "December 2023",
    link: "https://coursera.org/verify/your-coursera-cert-id",
    image: "/assets/embedded-systems-design.png", // Example image path from public folder
    description: "Gained expertise in microcontroller programming, sensor integration, and real-time operating systems.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "LeetCode",
    date: "November 2023",
    link: "https://leetcode.com/certificate/your-leetcode-cert-id",
    image: "https://example.com/images/data-structures-algorithms.png", // Example of a remote image URL
    description: "Successfully solved over 500 problems, demonstrating strong proficiency in DSA and problem-solving.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "C++ Programming Fundamentals",
    issuer: "Coursera",
    date: "October 2023",
    link: "https://coursera.org/verify/your-cpp-cert-id",
    image: "/assets/cpp-fundamentals.png",
    description: "Developed a solid foundation in C++ programming, including object-oriented concepts and memory management.",
    icon: <Code className="w-6 h-6" />,
  }
];
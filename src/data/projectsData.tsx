import AbigaelPortfolioImage from '../assets/Abigael_Portfolio.png';
import SymphionScreenshot from '../assets/Symphion_Screenshot.png';
import LucasScreenshot from '../assets/Lucas_Screenshot.png';

import { Wifi, Globe, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  icon: React.ReactNode;
  status: "Completed" | "In Progress";
  isFeatured: boolean;
  links: {
    github: string;
    live?: string;
  };
}

export const allProjects: Project[] = [
  {
    title: "My Portfolio Website",
    category: "Web Development",
    description: "My personal portfolio highlighting a selection of my best projects, skills, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design",
      "EmailJS for contact form",
      "Dark mode support",
      "Project showcase"
    ],
    image: AbigaelPortfolioImage, 
    icon: <Globe className="w-6 h-6" />,
    status: "Completed",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Abigael-Portfolio-Website",
      live: "https://abigael-sila.github.io/Abigael-Portfolio-Website/"
    }
  },
  {
    title: "Symphion - Wearable SOS Device",
    category: "Embedded Systems & IoT",
    description: "A life-saving wearable device that provides real-time location tracking and emergency communication capabilities using ESP32 and A9G GSM/GPS modules.",
    technologies: ["ESP32", "A9G GSM/GPS", "C++", "Arduino IDE", "GPS Tracking", "GSM Communication"],
    features: [
      "Real-time GPS location tracking",
      "Emergency SOS communication",
      "Low power consumption design",
      "Wearable form factor",
      "Web app integration"
    ],
    image: SymphionScreenshot, 
    icon: <Wifi className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Symphion",
      live: "https://abigael-sila.github.io/Symphion/"
    }
  },
  {
    title: "Lucas Kunkuru Portfolio",
    category: "Web Development",
    description: "A creative and minimalist portfolio site for Lucas Kunkuru, showcasing design sensibilities and front-end development skills.",
    technologies: ["Html", "Javascript", "CSS Modules"],
    features: [
      "Unique design",
      "Interactive gallery",
      "Client testimonials",
      "Contact integration"
    ],
    image: LucasScreenshot,
    icon: <Smartphone className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Lucas-Kunkuru.git",
      live: "https://lucas-kunkuru.vercel.app/"
    }
  },
  {
    title: "Emmanuel Ngetich Portfolio",
    category: "Full-stack Development",
    description: "A robust portfolio demonstrating expertise in full-stack applications for Emmanuel Ngetich, with an emphasis on scalability and backend logic.",
    technologies: ["Django", "React", "PostgreSQL", "Docker", "AWS"],
    features: [
      "User authentication",
      "API integration",
      "Deployment showcases",
      "Technical blog posts"
    ],
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: true,
    links: {
      github: "https://github.com/emmanuel-ngetich/fullstack-portfolio",
      live: "https://emmanuel-ngetich.herokuapp.com/"
    }
  },
  {
    title: "James Ngene Portfolio",
    category: "Mobile Development",
    description: "A mobile-first portfolio for James Ngene, optimized to showcase projects and skills on smaller devices.",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    features: [
      "Mobile-first design",
      "Smooth UI animations",
      "Integrated blog",
      "API consumption"
    ],
    image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Smartphone className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: false,
    links: {
      github: "https://github.com/james-ngene/portfolio-app",
      live: "https://example.com/james-ngene-demo"
    }
  }
];
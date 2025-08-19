import AbigaelPortfolioImage from '../assets/Abigael_Portfolio.png';
import SymphionScreenshot from '../assets/Symphion_Screenshot.png';
import LucasScreenshot from '../assets/Lucas_Screenshot.png';
import ManuScreenshot from '../assets/Manu_Screenshot.png';
import NgeneScreenshot from '../assets/Ngene_Screenshot.png';

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
      "SEO optimized",
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
    title: "James Ngene Portfolio",
    category: "Web Development",
    description: "A portfolio for James Ngene, built to showcase projects and skills.",
    technologies: ["React", "Typescript", "Tailwind CSS"],
    features: [
      "Mobile-first design",
      "Smooth UI animations",
      "User-friendly navigation",
      "Project highlights"

    ],
    image: NgeneScreenshot,
    icon: <Smartphone className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: false,
    links: {
      github: "https://github.com/Abigael-Sila/James-Ngene.git",
      live: "https://james-ngene.vercel.app/"
    }
  },
  {
    title: "Lucas Kunkuru Portfolio",
    category: "Web Development",
    description: "A creative and minimalist portfolio site for Lucas Kunkuru, showcasing design sensibilities and front-end development skills.",
    technologies: ["React", "Typescript", "Tailwind CSS"],
    features: [
      "Unique design",
      "Responsive design",
      "EmailJS for contact form",
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
    category: "Web Development",
    description: "A portfolio  for Emmanuel Ngetich, with an emphasis on scalability and responsiveness.",
    technologies: ["React", "Typescript", "Tailwind CSS"],
    features: [
      "User authentication",
      "API integration",
      "Deployment showcases",
      "Technical blog posts"
    ],
    image: ManuScreenshot,
    icon: <Globe className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Emmanuel-Ngetich.git",
      live: "https://emmanuel-ngetich.vercel.app/"
    }
  }
];
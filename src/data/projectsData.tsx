import AbigaelPortfolioImage from '../assets/Abigael_Portfolio.png';
import SymphionScreenshot from '../assets/Symphion_Screenshot.jpg';


import { Wifi, Globe,} from 'lucide-react';

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
  
];
import AbigaelPortfolioImage from '../assets/Abigael_Portfolio.png';
import SymphionScreenshot from '../assets/Symphion_Screenshot.jpg';
import PEOSImage from '../assets/PEOS.png';


import { Wifi, Globe, Cpu,} from 'lucide-react';

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
  title: "PEOS (Personal Engineering Operating System)",
  category: "Full-Stack Web Application",
  description: "A full-stack engineering productivity platform developed to function as a Personal Engineering Operating System (PEOS), enabling me to manage projects, document technical knowledge, track professional development, monitor KPIs, and consolidate career growth activities into a single integrated workspace.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Recharts",
    "Vite"
  ],
  features: [
    "Career progress tracking",
    "Performance analytics",
    "Knowledge base and personal engineering wiki",
    "AI-assisted research workspace",
    "Engineering insights and reporting",
  ],
  image: PEOSImage,
  icon: <Cpu className="w-6 h-6" />,
  status: "In Progress",
  isFeatured: true,
  links: {
    github: "https://github.com/Abigael-Sila/PEOS.git",
    live: "https://peos.bolt.host"
  }
},

{
title: "Symphion - Intelligent Emergency Response Wearable",
category: "Embedded Systems & IoT",
description: "A wearable emergency response system designed to enhance personal safety through real-time location tracking, intelligent SOS alerting, and remote incident monitoring. Built from the ground up using ESP32 and A9G technologies, Symphion integrates GPS positioning, GSM/GPRS communication, cloud connectivity, and emergency response workflows into a compact, low-power device capable of delivering critical assistance when every second counts.",
technologies: ["ESP32", "A9G GSM/GPS", "C++", "Arduino IDE", "GPS", "GSM/GPRS", "IoT", "Cloud Integration"],
features: [
  "Multi-channel emergency response system with dedicated SOS triggers for different incident types",
  "Real-time GPS tracking and location sharing for rapid emergency response",
  "Automated GSM-based calling and SMS alert workflows to notify guardians and responders",
  "Cloud-connected IoT architecture enabling remote incident reporting and monitoring",
  "Designed and developed end-to-end, including embedded firmware, electronics, system architecture, and communication workflows"
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
title: "My Professional Brand Platform",
category: "Technical Branding",
description: "I built this platform to showcase my journey as an Electrical and Electronics Engineer, highlighting the projects, technical skills, certifications, and industry experiences that have shaped my career, while providing a central hub for recruiters, and collaborators to explore my capabilities and professional growth.",
technologies: ["React", "TypeScript", "Tailwind CSS"],
features: [
"Showcases real-world engineering projects and technical achievements",
"Documents industry experience and professional development milestones",
"Presents a comprehensive view of my multidisciplinary expertise across hardware, software, and power systems engineering",
"Provides recruiters and collaborators with a centralized platform to explore my technical portfolio, career journey, and professional accomplishments"
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
];
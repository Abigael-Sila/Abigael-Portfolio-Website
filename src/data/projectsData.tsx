// src/data/projectsData.ts

// Ensure you are importing these correctly as components
import { Wifi, Globe, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  // Change JSX.Element to React.ReactNode for more flexibility
  icon: React.ReactNode;
  status: "Completed" | "In Progress";
  links: {
    github: string;
    live?: string; // Live link is optional
  };
}

export const allProjects: Project[] = [
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
      "Mobile app integration"
    ],
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Wifi className="w-6 h-6" />, // This syntax is correct for React.ReactNode
    status: "Completed",
    links: {
      github: "https://github.com/Abigael-Sila/Symphion-Wearable-SOS-Device",
      live: "https://example.com/symphion-demo"
    }
  },
  {
    title: "Chris Maina's Portfolio",
    category: "Web Development",
    description: "A sleek and modern personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    features: [
      "Responsive design",
      "Project showcase",
      "Interactive UI elements",
      "Contact form"
    ],
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "Completed",
    links: {
      github: "https://github.com/chris-maina-dev/portfolio-website",
      live: "https://chris-maina-dev.github.io/portfolio-website/"
    }
  },
  {
    title: "Chrispus Kiptoo's Portfolio",
    category: "Web Development",
    description: "A dynamic portfolio highlighting web development projects with a focus on clean code and user experience.",
    technologies: ["Next.js", "TypeScript", "SCSS", "GSAP"],
    features: [
      "Smooth animations",
      "Blog section",
      "Optimized for performance",
      "Case studies"
    ],
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "Completed",
    links: {
      github: "https://github.com/chrispus-kiptoo/portfolio",
      live: "https://chrispus-kiptoo.netlify.app/"
    }
  },
  {
    title: "Lucas Kunkuru's Portfolio",
    category: "Web Development",
    description: "A creative and minimalist portfolio site showcasing design sensibilities and front-end development skills.",
    technologies: ["Vue.js", "Nuxt.js", "CSS Modules", "Firebase"],
    features: [
      "Unique design",
      "Interactive gallery",
      "Client testimonials",
      "Contact integration"
    ],
    image: "https://images.pexels.com/photos/1036647/pexels-photo-1036647.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "Completed",
    links: {
      github: "https://github.com/lucas-kunkuru/portfolio-v2",
      live: "https://lucas-kunkuru.vercel.app/"
    }
  },
  {
    title: "Emmanuel Ngetich's Portfolio",
    category: "Full-stack Development",
    description: "A robust portfolio demonstrating expertise in full-stack applications with an emphasis on scalability and backend logic.",
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
    links: {
      github: "https://github.com/emmanuel-ngetich/fullstack-portfolio",
      live: "https://emmanuel-ngetich.herokuapp.com/"
    }
  }
];
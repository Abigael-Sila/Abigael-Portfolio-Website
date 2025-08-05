// src/data/projectsData.ts

import { Wifi, Globe, Smartphone, Lightbulb, HardHat } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  icon: React.ReactNode;
  status: "Completed" | "In Progress";
  isFeatured: boolean; // Added a new field to highlight key projects
  links: {
    github: string;
    live?: string;
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
    icon: <Wifi className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Symphion-Wearable-SOS-Device",
      live: "https://example.com/symphion-demo"
    }
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description: "My personal portfolio highlighting a selection of my best projects, skills, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design",
      "EmailJS for contact form",
      "Dark mode support",
      "Project showcase"
    ],
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "Completed",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Abigael-Sila-Portfolio-Website",
      live: "https://abigael-sila.github.io/Abigael-Sila-Portfolio-Website/"
    }
  },
  {
    title: "Smart Home Hub",
    category: "IoT & Embedded Systems",
    description: "A centralized hub to control and monitor smart home devices using MQTT protocol.",
    technologies: ["Raspberry Pi", "Python", "Node-RED", "MQTT"],
    features: [
      "Centralized device control",
      "Real-time sensor data visualization",
      "Automated routines",
      "Cross-platform compatibility"
    ],
    image: "https://images.pexels.com/photos/3760065/pexels-photo-3760065.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Lightbulb className="w-6 h-6" />,
    status: "Completed",
    isFeatured: true,
    links: {
      github: "https://github.com/Abigael-Sila/Smart-Home-Hub",
      live: "https://example.com/smarthome-demo"
    }
  },
  {
    title: "Robot Arm Controller",
    category: "Robotics & Control Systems",
    description: "Developed a GUI to control a 6-axis robot arm, simulating movements and performing pick-and-place tasks.",
    technologies: ["Python", "PyQt5", "ROS", "Microcontrollers"],
    features: [
      "Graphical User Interface",
      "Real-time joint angle feedback",
      "Inverse kinematics solver",
      "Task-based programming"
    ],
    image: "https://images.pexels.com/photos/1036647/pexels-photo-1036647.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <HardHat className="w-6 h-6" />,
    status: "Completed",
    isFeatured: false,
    links: {
      github: "https://github.com/Abigael-Sila/Robot-Arm-Controller",
    }
  },
  {
    title: "E-commerce Web App",
    category: "Full-stack Development",
    description: "A full-featured e-commerce platform with user authentication, product management, and a secure payment gateway.",
    technologies: ["MERN Stack", "Stripe API", "Redux"],
    features: [
      "Secure user authentication",
      "Shopping cart functionality",
      "Admin dashboard",
      "Payment processing"
    ],
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: false,
    links: {
      github: "https://github.com/Abigael-Sila/Ecommerce-Web-App",
      live: "https://example.com/ecommerce-demo"
    }
  },
  {
    title: "Mobile Fitness Tracker",
    category: "Mobile Development",
    description: "A mobile application that tracks user fitness activities, including steps, distance, and calories burned.",
    technologies: ["Flutter", "Dart", "Firebase"],
    features: [
      "Real-time activity tracking",
      "User progress charts",
      "Goal setting and achievements",
      "Social sharing"
    ],
    image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Smartphone className="w-6 h-6" />,
    status: "In Progress",
    isFeatured: false,
    links: {
      github: "https://github.com/Abigael-Sila/Mobile-Fitness-Tracker",
    }
  },
];
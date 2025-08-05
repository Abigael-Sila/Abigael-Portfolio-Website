// src/data/certificatesData.tsx
import { Code, Monitor, GraduationCap } from 'lucide-react';

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
    name: "Advanced React",
    issuer: "Coursera | Meta",
    date: "July 2024",
    link: "Advanced react.pdf",
    image: "/assets/meta-react-advanced.png",
    description: "Mastered advanced React concepts, including hooks, context API, and performance optimization for building complex applications.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Front-End Developer Capstone",
    issuer: "Coursera | Meta",
    date: "July 2024",
    link: "Front-End Developer Capstone.pdf",
    image: "/assets/meta-frontend-capstone.png",
    description: "Completed a comprehensive capstone project, applying skills in HTML, CSS, JavaScript, and React to build a full-scale front-end application.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "React Basics",
    issuer: "Coursera | Meta",
    date: "June 2024",
    link: "React basics.pdf",
    image: "/assets/meta-react-basics.png",
    description: "Gained a solid foundation in React, learning about components, props, state, and event handling to create dynamic user interfaces.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Working with Data in Android",
    issuer: "Coursera | Meta",
    date: "June 2024",
    link: "working with data in android.pdf",
    image: "/assets/meta-android-data.png",
    description: "Developed skills in handling and managing data within Android applications, including local storage and network requests.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: "Introduction to Android Mobile Application Development",
    issuer: "Coursera | Meta",
    date: "June 2024",
    link: "Introduction to Android Mobile Application.pdf",
    image: "/assets/meta-android-intro.png",
    description: "Learned the fundamentals of Android app development, from setting up the development environment to building simple user interfaces.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: "HTML and CSS in Depth",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "Html and css in depth.pdf",
    image: "/assets/meta-html-css-depth.png",
    description: "Deepened my knowledge of HTML and CSS, focusing on advanced layout techniques, responsive design, and best practices.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Mobile Development and JavaScript",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "Mobile development and javascript.pdf",
    image: "/assets/meta-mobile-js.png",
    description: "Explored the synergy between JavaScript and mobile development, including frameworks and tools for creating mobile-first web experiences.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Coursera | Meta",
    date: "April 2024",
    link: "introduction to front end development.pdf",
    image: "/assets/meta-frontend-intro.png",
    description: "Covered the core concepts of front-end development, including an introduction to HTML, CSS, and JavaScript.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Version Control",
    issuer: "Coursera | Meta",
    date: "April 2024",
    link: "version control.pdf",
    image: "/assets/meta-version-control.png",
    description: "Gained a solid understanding of version control with Git and GitHub, learning how to track changes and collaborate effectively.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "Programming Fundamentals in Kotlin",
    issuer: "Coursera | Meta",
    date: "April 2024",
    link: "Programming Fundamentals in Kotlin.pdf",
    image: "/assets/meta-kotlin-fundamentals.png",
    description: "Learned the foundational principles of programming using Kotlin, a modern language for Android development.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Advanced Programming in Kotlin",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "advanced programming in kotlin.pdf",
    image: "/assets/meta-kotlin-advanced.png",
    description: "Expanded my Kotlin skills to include advanced topics such as coroutines, functional programming, and more complex data structures.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Create the User Interface in Android Studio",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "Create the User Interface in Android Studio.pdf",
    image: "/assets/meta-android-ui.png",
    description: "Focused on designing and implementing user interfaces in Android Studio, utilizing layouts and UI components to create an engaging user experience.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "data structures and algorithm.pdf",
    image: "/assets/meta-dsa.png",
    description: "Developed a strong understanding of fundamental data structures and algorithms, essential for efficient problem-solving.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "Programming with JavaScript",
    issuer: "Coursera | Meta",
    date: "May 2024",
    link: "Programming wit javascript.pdf",
    image: "/assets/meta-javascript.png",
    description: "Learned core JavaScript concepts, including variables, data types, functions, and control flow to build interactive web features.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Principles of Web and App Design",
    issuer: "Coursera | Meta",
    date: "April 2024",
    link: "Principles of web and app Design.pdf",
    image: "/assets/meta-design-principles.png",
    description: "Studied the fundamental principles of design for both web and mobile applications, focusing on user experience and visual aesthetics.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];
// src/components/Skills.tsx
import { Cpu, Code, Wrench, Users, Star, Bolt, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import custom styles for this component
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Electrical & Electronics Engineering",
      icon: <Bolt className="w-6 h-6" />,
      color: "orange",
      skills: [
        { name: "Residential & Commercial Electrification", level: 95, description: "Professional wiring, installation, and compliance for homes and businesses" },
        { name: "Solar Panel Installation & Maintenance", level: 90, description: "Designing and implementing solar power systems for sustainable energy solutions" },
        { name: "Circuit Analysis & Design", level: 90, description: "Comprehensive AC/DC circuit analysis and schematic design" },
        { name: "Power Systems", level: 85, description: "Electrical power generation, distribution, and protection" },
        { name: "Control Systems", level: 80, description: "Design and implementation of automatic control and feedback systems" },
        { name: "Digital Electronics", level: 85, description: "Digital logic design, microprocessors, and embedded systems" },
        { name: "Electrical Machines", level: 80, description: "Operating principles of motors, generators, and transformers" },
        { name: "Renewable Energy Systems", level: 85, description: "Integration of clean energy sources like solar and wind power" }
      ]
    },
    {
      title: "Software Development & Design",
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "React & Next.js", level: 90, description: "Building modern, scalable web applications and server-rendered sites" },
        { name: "React Native & Kotlin", level: 85, description: "Developing cross-platform mobile apps for iOS and Android" },
        { name: "Node.js", level: 80, description: "Backend development with Express.js for RESTful APIs" },
        { name: "TypeScript", level: 75, description: "Enhancing code quality with type-safe JavaScript development" },
        { name: "HTML/CSS/JavaScript", level: 90, description: "Semantic markup and responsive, utility-first styling" },
        { name: "Figma", level: 80, description: "Creating professional UI/UX designs and interactive prototypes" },
        { name: "Data Structures and Algorithms", level: 75, description: "Optimizing code for efficiency and performance" },
        { name: "Python", level: 70, description: "Data analysis, automation, and backend scripting" },
      ]
    },
    {
      title: "Embedded Systems & IoT",
      icon: <Cpu className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "Microcontrollers", level: 90, description: "Programming and interfacing with microcontrollers like ESP32 and Arduino" },
        { name: "Firmware Development", level: 85, description: "Writing low-level code for embedded devices and microcontrollers" },
        { name: "Embedded C/C++", level: 85, description: "Efficient programming for resource-constrained hardware" },
        { name: "C/C++", level: 80, description: "Efficient, low-level programming for embedded optimization" },
        { name: "PCB Design", level: 75, description: "Designing printed circuit boards for custom hardware" },
        { name: "Wireless Communication Protocols", level: 80, description: "Interfacing with Wi-Fi, Bluetooth, and GSM for IoT connectivity" },
        { name: "Sensors & Actuators", level: 85, description: "Integration and programming of various hardware components" },
        { name: "Prototyping", level: 80, description: "Rapidly assembling and testing circuits" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "Git/GitHub", level: 90, description: "Collaborative version control and project management" },
        { name: "VS Code", level: 90, description: "Configuring and utilizing a powerful integrated development environment" },
        { name: "AWS/Firebase", level: 75, description: "Cloud services for backend hosting, databases, and authentication" },
        { name: "Docker", level: 70, description: "Containerization for consistent development and deployment environments" },
        { name: "AutoCAD", level: 70, description: "Computer-aided design for 2D and 3D electrical schematics" },
        { name: "MATLAB", level: 75, description: "Data analysis and algorithm development for engineering applications" },
        { name: "EasyEDA", level: 75, description: "Online tool for schematic capture, PCB design, and simulation" },
        { name: "Android Studio", level: 80, description: "Official IDE for native Android application development" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "yellow",
      skills: [
        { name: "Problem Solving", level: 95, description: "Applying analytical thinking to troubleshoot and innovate technical solutions" },
        { name: "Communication", level: 90, description: "Effective communication of complex technical information to diverse audiences" },
        { name: "Team Leadership", level: 85, description: "Guiding teams to achieve project goals and foster a collaborative environment" },
        { name: "Adaptability", level: 85, description: "Quickly learning new technologies and adapting to changing project requirements" },
        { name: "Project Management", level: 80, description: "Organizing and executing projects from conception to completion" },
        { name: "Collaboration", level: 90, description: "Working effectively with interdisciplinary teams and stakeholders" },
        { name: "Mentoring", level: 80, description: "Sharing knowledge and fostering growth within technical teams" },
        { name: "Critical Thinking", level: 95, description: "Evaluating information and ideas to make sound engineering decisions" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      green: "bg-green-500/20 text-green-400 border-green-500/50",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      orange: "bg-orange-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and capabilities
          </p>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 10, transition: { repeat: Infinity, repeatType: "reverse", duration: 1 } }}
            className="text-sm text-gray-400 italic sm:hidden"
          >
            Swipe →
          </motion.div>
        </motion.div>

        {/* Carousel container with relative positioning for navigation buttons */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'custom',
              renderCustom: function (_swiper: any, current: number, total: number) {
                let paginationHtml = '';
                for (let i = 1; i <= total; i++) {
                  if (i === current) {
                    paginationHtml += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>`;
                  } else {
                    paginationHtml += `<span class="swiper-pagination-bullet"></span>`;
                  }
                }
                return paginationHtml;
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {skillCategories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 md:p-8 bg-gray-800 rounded-xl">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.description}</p>
                          </div>
                          <div className="flex items-center gap-1 ml-4">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-white">{skill.level}%</span>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* New navigation buttons for larger screens */}
          <div className="absolute inset-y-0 left-0 right-0 items-center justify-between z-10 hidden sm:flex">
            <button className="swiper-button-prev p-3 rounded-full bg-gray-800/50 text-white hover:bg-gray-700 transition" aria-label="Previous Slide">
              <ArrowLeft size={24} />
            </button>
            <button className="swiper-button-next p-3 rounded-full bg-gray-800/50 text-white hover:bg-gray-700 transition" aria-label="Next Slide">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
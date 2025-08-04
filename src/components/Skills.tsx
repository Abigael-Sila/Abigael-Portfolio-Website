// src/components/Skills.tsx
import { Cpu, Code, Wrench, Users, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Electrical & Electronics Engineering",
      icon: <Cpu className="w-6 h-6" />,
      color: "orange",
      skills: [
        { name: "Circuit Analysis", level: 90, description: "AC/DC circuit analysis and design" },
        { name: "Power Systems", level: 85, description: "Electrical power generation and distribution" },
        { name: "Control Systems", level: 80, description: "Automatic control and feedback systems" },
        { name: "Digital Electronics", level: 85, description: "Digital logic design and microprocessors" },
        { name: "Signal Processing", level: 75, description: "Analog and digital signal processing" },
        { name: "Electrical Machines", level: 80, description: "Motors, generators, and transformers" }
      ]
    },
    {
      title: "Software Development & Design",
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "React", level: 90, description: "Modern web application development" },
        { name: "React Native", level: 85, description: "Cross-platform mobile app development" },
        { name: "Node.js", level: 80, description: "Backend development and API creation" },
        { name: "UI/UX Design", level: 85, description: "User interface and experience design" },
        { name: "Figma", level: 80, description: "Design prototyping and collaboration" },
        { name: "TypeScript", level: 75, description: "Type-safe JavaScript development" },
        { name: "HTML/CSS", level: 90, description: "Frontend markup and styling" },
        { name: "JavaScript", level: 85, description: "Dynamic web programming" },
        { name: "Python", level: 70, description: "Data analysis and automation scripts" },
      ]
    },
    {
      title: "Embedded Systems & IoT",
      icon: <Cpu className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "ESP32/ESP8266", level: 90, description: "Microcontroller programming and IoT applications" },
        { name: "Arduino", level: 85, description: "Rapid prototyping and embedded development" },
        { name: "C/C++", level: 80, description: "Low-level programming and system optimization" },
        { name: "PCB Design", level: 75, description: "Circuit design and hardware prototyping" },
        { name: "Sensors & Actuators", level: 85, description: "Integration of various hardware components" },
        { name: "RTOS", level: 70, description: "Real-time operating systems for embedded devices" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "Git/GitHub", level: 85, description: "Version control and collaboration" },
        { name: "Docker", level: 70, description: "Containerization and deployment" },
        { name: "AWS/Firebase", level: 75, description: "Cloud services and hosting" },
        { name: "Figma", level: 80, description: "UI/UX design and prototyping" },
        { name: "KiCad", level: 75, description: "PCB design and schematic creation" },
        { name: "VS Code", level: 90, description: "Integrated development environment" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "yellow",
      skills: [
        { name: "Problem Solving", level: 90, description: "Analytical thinking and troubleshooting" },
        { name: "Team Leadership", level: 80, description: "Project management and team coordination" },
        { name: "Communication", level: 85, description: "Technical writing and presentation skills" },
        { name: "Adaptability", level: 85, description: "Quick learning and technology adaptation" },
        { name: "Project Management", level: 75, description: "Planning and execution of technical projects" },
        { name: "Mentoring", level: 80, description: "Knowledge sharing and team development" }
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
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3); /* Lighter, less obtrusive dots */
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #8b5cf6; /* Vibrant purple for active dot */
          width: 12px;
          height: 12px;
          transform: scale(1.2);
          opacity: 1;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Carousel controls and swipe indicator moved to the top */}
        <div className="relative flex justify-center items-center gap-4 text-white mb-8">
          <button className="swiper-button-prev p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors hidden sm:block" aria-label="Previous Slide"></button>
          <div className="swiper-pagination"></div>
          <button className="swiper-button-next p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors hidden sm:block" aria-label="Next Slide"></button>

          {/* Swipe text hint for mobile, now positioned relative to this block */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 10, transition: { repeat: Infinity, repeatType: "reverse", duration: 1 } }}
            className="absolute right-4 text-sm text-gray-400 italic pointer-events-none sm:hidden"
          >
            Swipe →
          </motion.div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            // pb-10 class removed to fix the space
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
                          </div>
                          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
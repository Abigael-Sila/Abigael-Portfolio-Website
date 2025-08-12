import { GraduationCap, Award, Users, Code } from 'lucide-react';
import myProfilePic from '../assets/beautifulme.jpg'; 

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Education",
      description: "Bachelors of Engineering, Electrical & Electronics Engineering at Moi University"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Experience",
      description: "Internships at Kenya Railways Corporation, Kenya Space Agency" 
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Innovation",
      description: "Creator of Symphion - Wearable SOS Device"
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: "Development",
      description: "Web Development, Mobile App Development & UI/UX Design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about bridging the gap between hardware and software to create innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={myProfilePic}
                  alt="Abigael Kalunde Sila"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Available</div>
                <div className="text-sm">for hire</div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-2">
                    {item.icon}
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-md leading-relaxed">
                Hi, I’m Abigael Kalunde Sila an <span className="text-blue-400 font-semibold">Engineer and Digital Creative</span> shaping the future through both circuitry and code. My academic foundation spans control systems, power systems, electrical machines, digital and analogue electronics, power distribution and transmission, energy audits, and renewable energy.
              </p>
              
              <p className="leading-relaxed mt-6">
                Beyond the classroom, I’ve cultivated self-taught skills in <span className="text-purple-400 font-semibold">Front-End Web Development</span>, <span className="text-green-400 font-semibold">Mobile App Development</span>, <span className="text-yellow-400 font-semibold">UI/UX Design</span>, and <span className="text-blue-400 font-semibold">Embedded Systems and IoT</span>. My work is rooted in solving real-world problems with creativity and technical precision. I invite you to explore my projects and connect with me to discover how we can turn your ideas into a reality.
              </p>
              
              <p className="leading-relaxed mt-6">
                Outside of tech, I’m tuned into creativity and fresh perspectives, whether I’m vibing to amapiano, afrobeats, Kenyan hits, or mixing in pop and nostalgic 80s-90s classics. I thrive on experiences that challenge and inspire me, from road trips and coffee-and-cake dates to trying out archery, golf, and even the shooting range. You can find me networking at tech meet-ups, sip and paint sessions, or singing my heart out to karaoke classics. When I’m not watching a good comedy, action, or romance film, I’m keeping the energy up with fitness and running clubs, and hanging out in social circles that spark great conversations and even greater ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
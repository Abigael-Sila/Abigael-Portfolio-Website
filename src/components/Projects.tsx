import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projectsData.tsx';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectsToDisplay = allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning embedded systems, IoT, and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                activeProject === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg text-blue-400">
                  {project.icon}
                </div>

                {/* Live Demo Button - Highly visible, replaces hover overlay */}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents the card from becoming the active project
                    className="absolute bottom-4 left-4 px-4 py-2 bg-blue-500/80 hover:bg-blue-600/90 backdrop-blur-sm text-white rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 transform scale-100 hover:scale-105 opacity-100 group-hover:opacity-100"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents the card from becoming the active project
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-xs rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-xs rounded-md text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features - Show on active project */}
                {activeProject === index && (
                  <div className="space-y-2 animate-fadeIn">
                    <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/all-projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building IoT Solutions with ESP32: A Complete Guide",
      excerpt: "Learn how to create robust IoT applications using ESP32 microcontrollers, from basic sensor integration to cloud connectivity.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "IoT Development",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ESP32", "IoT", "Arduino", "Sensors"]
    },
    {
      title: "Embedded Systems Design Patterns for Beginners",
      excerpt: "Explore essential design patterns that every embedded systems developer should know to write maintainable and efficient code.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Embedded Systems",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Embedded", "Design Patterns", "C++", "Architecture"]
    },
    {
      title: "React Native vs Flutter: A Developer's Perspective",
      excerpt: "A comprehensive comparison of React Native and Flutter based on real-world project experience and development workflow.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Flutter", "Mobile", "Cross-platform"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and experiences from my journey in embedded systems, IoT, and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-400">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-600/50 text-xs rounded-md text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="group/btn flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles about embedded systems, IoT development, and software engineering delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
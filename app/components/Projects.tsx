'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Framer Motion.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/images/portfolio.jpg',
  },
  {
    id: 2,
    title: 'Speedcubing Timer',
    description: 'A web application to time and track Rubik\'s cube solving times with statistics.',
    category: 'Web Development',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/images/timer.jpg',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather application that shows current weather and forecasts.',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: '/images/weather.jpg',
  },
  {
    id: 4,
    title: 'Python Quiz Game',
    description: 'A terminal-based quiz game with multiple categories and difficulty levels.',
    category: 'Python',
    technologies: ['Python'],
    image: '/images/quiz.jpg',
  },
];

const categories = ['All', 'Web Development', 'Python'];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
              variants={item}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[16/9] bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                <span className="text-4xl text-white/90">{project.title.substring(0, 2)}</span>
              </div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-1 bg-indigo-600/80 text-white text-xs rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8
                      }}
                      transition={{ delay: 0.05 * index, duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium self-start hover:bg-indigo-700 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-foreground/70 mb-6">
            These are some of my learning projects. I'm constantly working on new ideas and improving my skills!
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Interested in collaborating?
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'RUMBLE-ROULETTE',
    description: 'Experience the thrill of roulette with this interactive online game!',
    tags: ['React', 'JavaScript', 'CSS'],
    image: 'https://www.thegamehunter.co.uk/wp-content/uploads/casino-roulette-wheel.jpg',
    link: 'https://rumble-roulette.vercel.app/'
  },
  {
    id: 2,
    title: 'Memory Maze game',
    description: 'Memorize a glowing path from green start to red goal, then trace it from memory before time runs out.',
    tags: ['React', 'Vercel', 'TypeScript', 'JavaScript'],
    image: 'https://play-lh.googleusercontent.com/YCkHJLIpElFzZcTdiA8ky2QvJCiCFeOjpc3EknPoZNUhHmGRjsIxkoNxCVfPGwoHt5Y',
    link: 'https://memory-maze-psi.vercel.app/'
  },
  {
    id: 3,
    title: 'MY Portfolio',
    description: 'A modern and responsive portfolio website built with React and Tailwind CSS.',
    tags: ['React', 'ThreeJs', 'TailwindCSS'],
    image: 'https://mir-s3-cdn-cf.behance.net/projects/808/587ff4235471139.Y3JvcCwzOTAxLDMwNTEsOTY1LDUxMQ.jpg',
    link: 'https://portfolio-blue-five-31.vercel.app/'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

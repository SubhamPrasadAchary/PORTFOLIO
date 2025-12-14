import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-visible p-8 border border-gray-700 relative z-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Redux', 'Next.js', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30 hover:bg-green-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-6 bg-purple-500 rounded-full mr-3"></span>
                AI/ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'OpenCV', 'Pandas', 'NumPy', 'PyTorch'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-6 bg-yellow-500 rounded-full mr-3"></span>
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

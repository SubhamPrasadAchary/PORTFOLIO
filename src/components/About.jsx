import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-visible p-8 border-2 border-blue-200 dark:border-blue-900 relative z-20"
          style={{
            minHeight: '500px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transform: 'translateZ(0)' // Force hardware acceleration
          }}
        >
          <div className="flex items-center mb-8">
            <FaBrain className="text-2xl text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Technical Skills
            </h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'SQL'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'OpenCV', 'Pandas'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 text-sm rounded-full font-medium">
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

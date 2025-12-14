import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Hero3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.8), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    mountRef.current.appendChild(renderer.domElement);

    // Add a simple cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x6366f1,
      shininess: 100
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 3;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.8);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={mountRef} className="absolute inset-0 opacity-30" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-24">
          {/* Left Side - Text Content */}
          <div className="lg:w-5/16 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-none whitespace-nowrap">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Subham Prasad Achary</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              4th-year B.Tech CSE student at Amity University, passionate about coding, web development, and AI, actively building projects, good communication skills and continuously learning. Ex-intern@JabszGamingStudiosLLP.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
          </div>

          {/* Right Side - Profile Photo with Quote */}
          <div className="lg:w-3/5 flex flex-col items-end justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl -z-10 animate-pulse"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Subham Prasad Achary"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236b7280"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="10">Photo</text></svg>';
                  }}
                />
              </div>
            </div>
            
            <div className="relative max-w-md w-full lg:ml-8 mt-8 lg:mt-0">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-3/5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div className="pl-8">
                <div className="text-gray-700 dark:text-gray-200 italic">
                  <p className="text-lg md:text-xl font-medium leading-relaxed">
                    "Our future is decided by
                  </p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xl md:text-2xl mt-1">
                    What we do TODAY!
                  </p>
                  <p className="text-red-500 dark:text-red-400 font-semibold text-xl md:text-2xl">
                    not TOMORROW"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;


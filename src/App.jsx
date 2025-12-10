// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="relative">
        <Hero3D />
        <div className="relative z-10">
          <About />
          <div className="h-16"></div> {/* Add spacing between sections */}
          <Education />
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
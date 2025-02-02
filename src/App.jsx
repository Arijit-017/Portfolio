import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import bgImage from './assets/33aa7dae-6bb9-467e-af19-a05caf2419f9.jpg'; // ✅ Import the image

const App = () => {
  return (
    <div className="relative text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div 
        className="fixed top-0 left-0 w-screen h-screen z-[-1] bg-black"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',  // ✅ Covers the entire viewport
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed' // ✅ Keeps it fixed while scrolling
        }}
      ></div>

      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-[-1]"></div>

      <div className="relative min-h-screen container mx-auto lg:px-10 px-6">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

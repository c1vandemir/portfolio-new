import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';

function App() {
  return (
    <div className="min-h-[100dvh] relative overflow-clip font-sans">
      {/* Dynamic background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accentPrimary/20 dark:bg-accentPrimary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 dark:bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10 pt-24">
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

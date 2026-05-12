import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact, { Footer } from './sections/Contact';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text selection:bg-blue-600/30 relative">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Stats Section */}
          <Stats />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Experience Section */}
          <Experience />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Achievements Section */}
          <Achievements />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        <Footer />
        
        {/* Sticky Contact Button on Mobile */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <a
            href="#contact"
            className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 active:scale-95 transition-all border border-white/20 animate-bounce"
            style={{ animationDuration: '3s' }}
            title="Contact Me"
          >
            <MessageCircle size={24} />
          </a>
        </div>
        
        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

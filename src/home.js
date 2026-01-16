import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Briefcase, Github, Linkedin } from 'lucide-react';

const App = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans flex flex-col">
      {}
      <section
        id="home"
        ref={heroRef}
        className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4"
      >
        {}
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
              filter: 'grayscale(30%) brightness(0.7)'
            }}
          ></div>
          <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/95"></div>
        </div>

        {}
        <div
          className={`relative z-10 text-center transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            Hello, I'm <span className="text-indigo-600 dark:text-indigo-400">Gemachis Tesfaye</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-light">
            A Passionate software engineer specializing in web development and data-driven solutions.
          </p>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 justify-center items-center">
  {}
  <button
    onClick={() => {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
  >
    <Briefcase className="mr-2 h-5 w-5" />
    View My Work
  </button>

  {}
  <button
    onClick={() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="w-full sm:w-auto bg-transparent border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
  >
    <Mail className="mr-2 h-5 w-5" />
    Get in Touch
  </button>
</div>


          {}
          <div className="mt-9 flex justify-center space-x-8">
            <a href="https://github.com/gemachistesfaye" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/gemachis-tesfaye-137196318" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="animate-bounce text-gray-400 dark:text-gray-600">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>


    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { 
  Sun, Moon, Menu, X, ArrowRight, User, Briefcase, Code, Send 
} from "lucide-react";


const Navbar = ({ 
  isDarkMode: externalIsDarkMode, 
  toggleDarkMode: externalToggleDarkMode 
}) => {
  const [internalDarkMode, setInternalDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  
  const isDarkMode = externalIsDarkMode !== undefined ? externalIsDarkMode : internalDarkMode;

  const navLinks = [
    { name: "About", href: "#about", id: "about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Code size={18} /> },
    { name: "Project", href: "#projects", id: "projects", icon: <Briefcase size={18} /> },
  ];

  const handleToggle = () => {
    if (externalToggleDarkMode) {
      externalToggleDarkMode();
    } else {
      const newMode = !internalDarkMode;
      setInternalDarkMode(newMode);
      if (newMode) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0);

      const sectionIds = ["home", "about", "skills", "projects", "contact"];
      const currentActive = sectionIds.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (currentActive) setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    setIsOpen(false);
    
    if (elem) {
      const offset = 80;
      window.scrollTo({
        top: elem.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300"
    >
   
      <div 
        className="absolute top-0 left-0 h-[3px] bg-indigo-600 transition-all duration-150 z-[60]" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center space-x-3 text-xl font-bold text-gray-900 dark:text-white"
            >
              <div className="flex items-center justify-center bg-indigo-600 text-white w-10 h-10 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-200 dark:shadow-none">
                G
              </div>
              <span className="hidden sm:inline-block tracking-tight font-display">Gemachis T.</span>
            </a>
          </div>

 
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-4 border-r border-gray-200 dark:border-gray-800 pr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group flex items-center space-x-2 ${
                    activeSection === link.id 
                    ? "text-indigo-600 dark:text-indigo-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className={`transition-all duration-300 ${activeSection === link.id ? "scale-110 opacity-100" : "opacity-0 group-hover:opacity-100 scale-100"}`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  <span className={`absolute inset-x-4 bottom-0 h-0.5 bg-indigo-600 transition-transform duration-300 ${
                    activeSection === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-4">
              {}
              <button
                onClick={handleToggle}
                aria-label="Toggle Dark Mode"
                className="w-10 h-10 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:ring-2 hover:ring-indigo-500 transition-all focus:outline-none"
              >
                {isDarkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-indigo-600" />}
              </button>
              
              {}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-md"
              >
                <span>Hire Me</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={handleToggle} 
              className="p-2.5 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2.5 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out shadow-2xl overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`flex items-center space-x-4 px-5 py-4 text-lg font-bold rounded-2xl transition-all ${
                activeSection === link.id 
                ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" 
                : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-between px-6 py-5 text-lg font-bold bg-indigo-600 text-white rounded-2xl shadow-lg transition-all active:scale-95"
            >
              <div className="flex items-center space-x-3">
                <Send size={20} />
                <span>Let's Talk</span>
              </div>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
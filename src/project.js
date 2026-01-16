import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  BarChart, 
  Code2, 
  Terminal, 
  Leaf, 
  ShieldCheck, 
  Calendar,
  RefreshCw,
  Wallet,
  Palette,
  GraduationCap,
  ExternalLink,
  Github,
  Layers
} from 'lucide-react';

const projectsData = [
  {
    name: "10 Academy Clone",
    description: "A high-fidelity clone of the 10 Academy platform, focusing on pixel-perfect UI and educational content structure.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/10-Academy-Clone",
    liveDemo: "https://gemachistesfaye.github.io/10-Academy-Clone/",
    icon: <GraduationCap size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "HUEPDC Club Website",
    description: "A modern React-based website for Haramaya University Environmental Club. Features dynamic content and responsive design.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/HUEPDC-Website",
    liveDemo: "https://huepdc-website12.netlify.app/",
    icon: <Leaf size={20} />,
    category: "React",
    tags: ["React", "Tailwind"]
  },
  {
    name: "GlassLogin UI Experience",
    description: "A futuristic login interface leveraging glassmorphism principles. Built using advanced CSS backdrop-filters, custom animations and responsive React components.",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Frontend-Showcase/tree/main/CSS02",
    liveDemo: "https://gemachistesfaye.github.io/Frontend-Showcase/CSS02/",
    icon: <Code2 size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS"]
  },
  {
    name: "Ethiopian Airlines DB System",
    description: "A comprehensive MySQL relational database designed for domestic flight operations. Includes schema for passenger management, scheduling and student discount eligibility.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Database-Project",
    liveDemo: "https://raw.githubusercontent.com/gemachistesfaye/Database-Project/main/Database%20Diagram.png",
    icon: <Database size={20} />,
    category: "Database",
    tags: ["MySQL", "Relational DB", "Schema Design"]
  },
  {
    name: "E-Commerce Insights Dashboard",
    description: "Business intelligence dashboard built with Power BI. Includes trend analysis, revenue forecasting and customer behavior segmentation.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/FUTURE_DS_01",
    liveDemo: "https://raw.githubusercontent.com/gemachistesfaye/FUTURE_DS_01/main/Dashboard_Overview_Image.png",
    icon: <BarChart size={20} />,
    category: "Analytics",
    tags: ["Power BI", "Data Analytics", "BI"]
  },
  {
    name: "Age Calculator",
    description: "Interactive web app to calculate your exact age from your birthdate. Built with JavaScript and modern front-end practices.",
    img: "https://images.unsplash.com/photo-1603052876404-3a3d2eeae8c8?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Age-Calculator",
    liveDemo: "https://gemachistesfaye.github.io/Age-Calculator/",
    icon: <Calendar size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "Exchange Rate Calculator",
    description: "Live currency converter with bi-directional input and 10-minute rate caching via ExchangeRate API.",
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Frontend-Showcase/tree/main/Summer-Bootcamp-Projects/exchange-rate",
    liveDemo: "https://gemachistesfaye.github.io/Frontend-Showcase/Summer-Bootcamp-Projects/exchange-rate",
    icon: <RefreshCw size={20} />,
    category: "Finance",
    tags: ["HTML", "CSS", "JS",]
  },
  {
    name: "Expense Tracker",
    description: "Finance tool with Local Storage persistence. Track income, expenses and balances efficiently.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Frontend-Showcase/tree/main/Summer-Bootcamp-Projects/expense-tracker",
    liveDemo: "https://gemachistesfaye.github.io/Frontend-Showcase/Summer-Bootcamp-Projects/expense-tracker",
    icon: <Wallet size={20} />,
    category: "Finance",
    tags: ["Vanilla JS", "Local Storage"]
  },
  {
    name: "Memory Cards Pro",
    description: "Interactive flashcard web app with offline storage and deck management.",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Frontend-Showcase/tree/main/Summer-Bootcamp-Projects/memory-cards",
    liveDemo: "https://gemachistesfaye.github.io/Frontend-Showcase/Summer-Bootcamp-Projects/memory-cards/",
    icon: <Layers size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "CSS Practice - Agency",
    description: "Modern Creative Agency landing page featuring advanced CSS Grid, Flexbox and responsive layouts.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Frontend-Showcase/tree/main/Summer-Bootcamp-Projects/css-practice",
    liveDemo: "https://gemachistesfaye.github.io/Frontend-Showcase/Summer-Bootcamp-Projects/css-practice/",
    icon: <Palette size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "Smart PWD Generator",
    description: "Privacy-first, cryptographically secure password generator built with Web Crypto API.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/gemachistesfaye/Smart-PWD",
    liveDemo: "https://gemachistesfaye.github.io/Smart-PWD/",
    icon: <ShieldCheck size={20} />,
    category: "HTML/CSS/JS",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    name: "Smart Grade Evaluator",
    description: "Python-based Grade Evaluator app. My first coding project from 2017.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000",
    link: "https://github.com/urjiiko1/GradeEvaluator",
    liveDemo: "https://grade-evaluator.onrender.com/",
    icon: <Terminal size={20} />,
    category: "Python",
    tags: ["Python", "Flask"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] bg-slate-200 dark:bg-slate-800">
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000';
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] group-hover:bg-black/70 group-hover:backdrop-blur-sm transition-all duration-500"></div>

      <div className="absolute top-6 left-6 flex items-center gap-3">
        <span className="p-2 bg-white/20 rounded-xl backdrop-blur-md text-white">
          {project.icon}
        </span>
        <h3 className="text-xl font-bold text-white drop-shadow-md">{project.name}</h3>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-sm text-slate-200 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 border border-white/20 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-2.5 rounded-xl font-semibold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} /> View Demo
            </a>
          )}
          <a
            href={project.link === "#" ? undefined : project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white/30 hover:border-white hover:bg-white/10 py-2.5 rounded-xl font-semibold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

const categories = ['All', 'React', 'Database', 'Python', 'Analytics', 'Finance', 'HTML/CSS/JS'];


const filteredProjects = projectsData.filter(p => {
  if (filter === 'All') return true;
  return p.category === filter;
});


  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <header className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          My <span className="text-indigo-600">Projects</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          From complex data architectures to modern React front-ends. Explore my journey in software engineering.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/40 translate-y-[-2px]' 
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-500 italic">
            No projects found in this category.
          </div>
        )}
      </main>


    </div>
  );
}

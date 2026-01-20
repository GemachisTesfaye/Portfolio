import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  ArrowUpRight, 
  BarChart3,
  Palette,
  Settings,
  MousePointer2,
  Server
} from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative p-7 rounded-[2rem] transition-all duration-500 border 
        ${service.border} ${service.lightBg} ${service.darkBg} 
        overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />

      {}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={`p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-white/5 text-slate-900 dark:text-white 
          transform transition-all duration-500 ease-out
          ${isHovered ? 'scale-110 -rotate-6 shadow-xl' : ''}`}>
          {React.cloneElement(service.icon, { size: 28, strokeWidth: 2 })}
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          0{index + 1}
        </span>
      </div>

      {}
      <div className="flex-grow relative z-10">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
          {service.description}
        </p>

        {}
        <div className="space-y-2.5">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-100 dark:border-white/5 backdrop-blur-sm">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-sm`} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between relative z-10">
        <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
          Specialization
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 
          ${isHovered 
            ? `bg-gradient-to-r ${service.color} text-white rotate-45 shadow-lg` 
            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive websites from scratch using modern frontend technologies.",
      icon: <Code2 />,
      features: ["React.js & Next.js", "Performance Tuning"],
      color: "from-blue-600 to-indigo-500",
      lightBg: "bg-blue-50/30",
      darkBg: "dark:bg-blue-900/5",
      border: "border-blue-100 dark:border-blue-900/20"
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from raw datasets and transforming them into interactive reports.",
      icon: <BarChart3 />,
      features: ["Power BI Dashboards", "Data Cleaning"],
      color: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50/30",
      darkBg: "dark:bg-amber-900/5",
      border: "border-amber-100 dark:border-amber-900/20"
    },
    {
      title: "UI/UX Design",
      description: "Creating attractive, user-centric interfaces with focus on fluid transitions.",
      icon: <Palette />,
      features: ["Responsive Interfaces", "Prototypes"],
      color: "from-purple-600 to-pink-500",
      lightBg: "bg-purple-50/30",
      darkBg: "dark:bg-purple-900/5",
      border: "border-purple-100 dark:border-purple-900/20"
    },
    {
      title: "Database Design",
      description: "Structuring scalable and efficient data models for modern management systems.",
      icon: <Server />,
      features: ["MySQL & MongoDB", "Data Architecture"],
      color: "from-emerald-600 to-teal-500",
      lightBg: "bg-emerald-50/30",
      darkBg: "dark:bg-emerald-900/5",
      border: "border-emerald-100 dark:border-emerald-900/20"
    },
    {
      title: "Project Strategy",
      description: "Professional guidance on technical strategy and architectural decision-making.",
      icon: <Settings />,
      features: ["Tech Stack Guidance", "Code Reviews"],
      color: "from-cyan-500 to-blue-600",
      lightBg: "bg-cyan-50/30",
      darkBg: "dark:bg-cyan-900/5",
      border: "border-cyan-100 dark:border-cyan-900/20"
    },
    {
      title: "Interactions",
      description: "Enhancing user engagement through dynamic components and bespoke animations.",
      icon: <MousePointer2 />,
      features: ["Bespoke Animations", "Custom UI"],
      color: "from-rose-500 to-red-600",
      lightBg: "bg-rose-50/30",
      darkBg: "dark:bg-rose-900/5",
      border: "border-rose-100 dark:border-rose-900/20"
    }
  ];

  return (
    <div id="services" className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 px-6 sm:px-10 lg:px-16 transition-colors duration-300">
      
      {}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          <Sparkles size={12} /> Expert Solutions
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-none">
          Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500">Overview</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          High-performance technical offerings designed for modern digital needs.
        </p>
      </div>

      {}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React.js", "Next.js", "Tailwind", "SQL", "Analysis", "Design"
          ].map((tech) => (
            <div 
              key={tech} 
              className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 
                shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 
                hover:text-blue-500 transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
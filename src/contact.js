import React, { useState, useEffect, useRef } from "react";
import { 
  Mail, 
  Smartphone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const formUrl = "https://formspree.io/f/xqalrkrn";

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        event.target.reset();
      } else {
        const result = await response.json();
        setFormError(result.error || "Something went wrong. Please check your form.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setFormError("Failed to connect to the server. Please check your network.");
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative min-h-screen bg-white dark:bg-slate-950 py-24 px-6 overflow-hidden transition-colors duration-500"
    >
      {}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Touch.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Reach out and say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {}
          <div className="lg:col-span-4 space-y-6">
            <ContactInfoItem 
              icon={<Mail className="text-indigo-600 dark:text-indigo-400" />}
              label="Email"
              value="gemachistesfaye36@gmail.com"
              href="mailto:gemachistesfaye36@gmail.com"
            />
            <ContactInfoItem 
              icon={<Smartphone className="text-pink-600 dark:text-pink-400" />}
              label="Phone"
              value="+251 976 601 074"
              href="tel:+251976601074"
            />
            <ContactInfoItem 
              icon={<MapPin className="text-emerald-600 dark:text-emerald-400" />}
              label="Location"
              value="Adaama, Ethiopia"
            />

            <div className="pt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 ml-1">Follow Me</p>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/urjiiko1" icon={<Github />} />
                <SocialLink href="https://www.linkedin.com/in/gemachis-tesfaye-137196318" icon={<Linkedin />} />
                <SocialLink href="https://x.com/GemachisTe79854" icon={<Twitter />} />
                <SocialLink href="https://www.instagram.com/urjiiko1" icon={<Instagram />} />
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-xl backdrop-blur-sm relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Message Sent Successfully!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                    Thank you! I've received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all"
                  >
                    Send another message <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors text-slate-900 dark:text-white placeholder-transparent"
                        placeholder="Name"
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm">
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors text-slate-900 dark:text-white placeholder-transparent"
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-slate-500 dark:text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative pt-4">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="4"
                      className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors text-slate-900 dark:text-white placeholder-transparent resize-none"
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 top-0.5 text-slate-500 dark:text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-focus:top-0.5 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:text-sm">
                      How can I help you?
                    </label>
                  </div>

                  {formError && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="group flex items-center p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10">
    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">{label}</p>
      {href ? (
        <a href={href} className="text-slate-900 dark:text-white font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-slate-900 dark:text-white font-semibold">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default Contact;
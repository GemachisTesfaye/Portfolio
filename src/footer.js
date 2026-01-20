import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="footer" 
      className="relative border-t border-gray-180/60 dark:border-gray-800/60 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md py-4 transition-all duration-500"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex w-full justify-center items-center gap-3 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
          
          {/* Desktop & tablet: show full text */}
          <span className="hidden sm:inline text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
            &copy; {currentYear} Gemachis Tesfaye
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-800 font-light text-lg">|</span>
          <span className="hidden sm:flex items-center gap-2 group cursor-default">
            Made with 
            <Heart 
              size={18} 
              className="text-rose-500 fill-rose-500/20 group-hover:fill-rose-500 transition-all duration-300 animate-pulse" 
            /> 
            in Ethiopia
          </span>

          {/* Mobile: show only Made with ❤️ in Ethiopia */}
          <span className="sm:hidden flex items-center gap-1 text-gray-900 dark:text-gray-100 font-semibold">
            Made with 
            <Heart size={16} className="text-rose-500 fill-rose-500/20 animate-pulse" />
            in Ethiopia
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

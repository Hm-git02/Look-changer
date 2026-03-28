import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LandingHero({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-8"
    >
      {/* Optional decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-light tracking-tight text-foreground leading-[1.1]"
      >
        Find the haircut that <br className="hidden md:block" />
        <span className="italic text-accent">fits your face.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-foreground/70 max-w-2xl font-light"
      >
        Upload a clear photo, discover your face shape, and explore styles chosen specifically to suit your unique features.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pt-8 flex flex-col items-center space-y-4"
      >
        <button 
          onClick={onStart}
          className="group relative flex items-center justify-center space-x-3 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium tracking-wide transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Find My Best Hairstyles</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <span className="text-sm text-foreground/50 tracking-wide uppercase">Takes under a minute</span>
      </motion.div>
    </motion.div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "Reading image...",
  "Mapping facial geometry...",
  "Estimating face shape...",
  "Curating recommended styles..."
];

export default function ProcessingAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Total wait target: under 4 seconds roughly. 
    // Usually the API might respond faster or slower. This is local fallback for visual effect
    // We update text every ~800ms
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-12"
    >
      {/* Abstract face scan geometry simulation */}
      <div className="relative w-48 h-64 mx-auto rounded-full border border-border/40 overflow-hidden bg-surface flex items-center justify-center shadow-[0_0_80px_rgba(138,154,134,0.15)]">
        
        {/* Soft geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 130">
          <ellipse cx="50" cy="65" rx="35" ry="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 15 V115" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M15 65 H85" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          {/* Landmark dots */}
          <circle cx="50" cy="15" r="1.5" fill="currentColor" />
          <circle cx="50" cy="115" r="1.5" fill="currentColor" />
          <circle cx="15" cy="65" r="1.5" fill="currentColor" />
          <circle cx="85" cy="65" r="1.5" fill="currentColor" />
          <circle cx="30" cy="45" r="1" fill="currentColor" />
          <circle cx="70" cy="45" r="1" fill="currentColor" />
        </svg>

        {/* Scanning line animation */}
        <motion.div 
          className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-accent/30 to-accent/5"
          animate={{
            top: ["-50%", "150%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="text-center space-y-4 h-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-light tracking-wide text-foreground"
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
        
        <p className="text-xs text-foreground/40 uppercase tracking-widest mt-6">
          Your image is used only for this analysis
        </p>
      </div>
    </motion.div>
  );
}

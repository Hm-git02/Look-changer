import { motion } from "framer-motion";
import HairstyleCard from "./HairstyleCard";
import type { AnalysisResult } from "@/app/page";
import { RotateCcw, ImagePlus } from "lucide-react";

export default function ResultsDashboard({ 
  result, 
  onTryAnother, 
  onReset 
}: { 
  result: AnalysisResult;
  onTryAnother: () => void;
  onReset: () => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto w-full px-4 py-12 md:py-20 flex flex-col"
    >
      {/* Top Section: Analysis Summary */}
      <div className="bg-surface border border-border/50 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 shadow-sm">
        
        {/* Uploaded Image Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-background shadow-xl"
        >
          <img 
            src={result.image_preview_url} 
            alt="Analyzed face" 
            className="w-full h-full object-cover"
            // For the sake of UI we might add a subtle scan overlay if we want to be fancy
          />
        </motion.div>

        {/* Text Details */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-sm font-medium tracking-widest text-accent uppercase mb-3">
              Analysis Complete
            </h2>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Your Face Shape: <span className="font-normal capitalize">{result.predicted_shape}</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
              {result.shape_explanation}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <button
              onClick={onTryAnother}
              className="group flex items-center space-x-2 text-sm font-medium tracking-wide uppercase px-6 py-3 border border-border rounded-full hover:bg-background transition-colors focus:outline-none"
            >
              <ImagePlus className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>Try Another Photo</span>
            </button>
            <button
              onClick={onReset}
              className="group flex items-center space-x-2 text-sm font-medium tracking-wide uppercase px-6 py-3 text-foreground/60 hover:text-foreground transition-colors focus:outline-none"
            >
              <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform" />
              <span>Start Over</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-between"
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
            Curated Recommendations
          </h2>
          <span className="text-sm text-foreground/50 tracking-wide">
            {result.recommendations.length} STYLES
          </span>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {result.recommendations.map((style, idx) => (
            <HairstyleCard key={style.id} data={style} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

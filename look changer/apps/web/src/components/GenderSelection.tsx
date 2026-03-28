import { motion } from "framer-motion";

type Gender = "male" | "female";

export default function GenderSelection({ onSelect }: { onSelect: (g: Gender) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto w-full px-4"
    >
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
          Who are we styling today?
        </h2>
        <p className="text-foreground/60 text-lg">Select an option to calibrate our recommendations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <button
          onClick={() => onSelect("female")}
          className="group relative h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-surface border border-border/50 transition-all hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-accent/10 transition-colors z-10" />
          {/* Subtle noise texture or placeholder pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4">
            <span className="text-3xl md:text-4xl font-light tracking-widest text-foreground transition-transform group-hover:-translate-y-2">WOMENS</span>
            <span className="text-sm uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0 translate-y-2">Select</span>
          </div>
        </button>

        <button
          onClick={() => onSelect("male")}
          className="group relative h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-surface border border-border/50 transition-all hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-accent/10 transition-colors z-10" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4">
            <span className="text-3xl md:text-4xl font-light tracking-widest text-foreground transition-transform group-hover:-translate-y-2">MENS</span>
            <span className="text-sm uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0 translate-y-2">Select</span>
          </div>
        </button>
      </div>
    </motion.div>
  );
}

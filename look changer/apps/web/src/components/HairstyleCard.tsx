import { motion } from "framer-motion";

interface HairstyleData {
  id: string;
  style: string;
  image: string;
  why_it_works: string;
  length: string;
  maintenance: string;
  texture: string[];
}

export default function HairstyleCard({ data, index }: { data: HairstyleData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      className="group relative flex flex-col bg-surface border border-border/50 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors shadow-sm"
    >
      <div className="relative aspect-[3/4] w-full bg-background/50 overflow-hidden">
        {/* We use a standard img tag with object-cover. Next/Image is possible but img is simpler for dynamic URLs depending on implementation */}
        <img 
          src={data.image}
          alt={data.style}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium tracking-tight text-foreground">{data.style}</h3>
        </div>
        
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed flex-1">
          {data.why_it_works}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border rounded-md text-foreground/60 uppercase tracking-wider">
            {data.length}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border rounded-md text-foreground/60 uppercase tracking-wider">
            {data.maintenance} Maint.
          </span>
        </div>
      </div>
    </motion.div>
  );
}

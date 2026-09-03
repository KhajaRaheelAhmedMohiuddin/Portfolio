import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';
import TiltCard from './TiltCard';

const COMPANY_LOGOS: Record<string, { src: string; alt: string; className?: string }> = {
  "Meridial AI (Invisible Technologies)": {
    src: "/logos/meridial.png",
    alt: "Meridial AI, by Invisible Technologies logo"
  },
  "Soul AI by Deccan AI": {
    src: "/logos/soul-ai.png",
    alt: "Soul AI by Deccan AI logo"
  },
  "Tech Mahindra": {
    src: "/logos/tech-mahindra.png",
    alt: "Tech Mahindra logo",
    className: "bg-white"
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-baseline gap-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Experience</h2>
          <div className="h-px bg-white/10 flex-grow ml-6" />
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16">
          {RESUME_DATA.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
            >
              <div className="md:col-span-3 pt-1">
                <div className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
                  {job.date}
                </div>
              </div>
              
              <TiltCard className="md:col-span-9 relative">
                <div className="glass-panel p-8 md:p-10 rounded-3xl glass-panel-hover transition-all duration-500 overflow-hidden relative h-full">
                  <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-zinc-200 transition-colors">
                          {job.company}
                        </h3>
                        <div className="text-lg text-zinc-300 mb-6">
                          {job.role}
                        </div>
                      </div>
                      {COMPANY_LOGOS[job.company] && (
                        <div className="shrink-0 mb-4 sm:mb-0">
                          <img
                            src={COMPANY_LOGOS[job.company].src}
                            alt={COMPANY_LOGOS[job.company].alt}
                            className={`w-14 h-14 object-contain rounded-xl ${COMPANY_LOGOS[job.company].className || ''}`}
                            loading="eager"
                            fetchPriority="high"
                            onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
                          />
                        </div>
                      )}
                    </div>
                  
                  <ul className="flex flex-col gap-3 mb-6">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm md:text-base leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {job.projects && (
                    <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                      {job.projects.map((proj, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-zinc-300">
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';
import TiltCard from './TiltCard';
import { Receipt, Smartphone, Shield, Plane, LockKeyhole, FileText } from 'lucide-react';

const PROJECT_ICONS: Record<string, React.ElementType> = {
  "SmartBill": Receipt,
  "FreshFold": Smartphone,
  "Intrusion Detection System": Shield,
  "Airfare Prediction System": Plane,
  "StegoSecure": LockKeyhole
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-baseline gap-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Selected Works</h2>
          <div className="h-px bg-white/10 flex-grow ml-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => {
            const Icon = PROJECT_ICONS[project.title] || FileText;
            
            return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer h-full"
            >
              <TiltCard className="h-full">
                <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col glass-panel-hover transition-all duration-500 relative overflow-hidden">
                  {/* Background Icon */}
                  <Icon className="absolute top-8 right-8 w-16 h-16 text-white/[0.04] group-hover:text-white/[0.08] transition-all duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6 pb-4 border-b border-white/10">
                      {project.tech}
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}

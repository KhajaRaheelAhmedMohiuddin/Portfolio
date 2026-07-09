import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { RESUME_DATA } from '../data';
import { Brain, Monitor, CheckCircle, Zap, Code2, Database } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "AI / LLM": Brain,
  "Frontend": Monitor,
  "Testing & QA": CheckCircle,
  "Performance & State": Zap,
  "Languages & Mobile": Code2,
  "Tools & DB": Database
};

const SkillCard: React.FC<{ skillGroup: { category: string, items: string[] }, index: number }> = ({ skillGroup, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = CATEGORY_ICONS[skillGroup.category] || Database;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="glass-panel p-8 rounded-3xl flex flex-col h-full group relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
        <h3 className="text-xl font-serif tracking-wide text-zinc-200">
          {skillGroup.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2 relative z-10">
        {skillGroup.items.map((item, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm bg-white/[0.04] border border-white/5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-baseline gap-4"
        >
          <div className="h-px bg-white/10 flex-grow mr-6 hidden md:block" />
          <h2 className="font-serif text-4xl md:text-5xl text-right whitespace-nowrap">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.skills.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

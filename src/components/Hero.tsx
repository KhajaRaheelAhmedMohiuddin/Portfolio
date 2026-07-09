import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Github, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RESUME_DATA } from '../data';
import TerminalWindow from './TerminalWindow';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // On mobile the hero stacks vertically and extends past the fade distance,
  // so scroll-fade/parallax would hide content before it's ever seen.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 overflow-hidden">
      {/* Editorial Watermark */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] lg:text-[40rem] font-serif leading-none text-outline select-none pointer-events-none z-0 opacity-30 md:opacity-80"
      >
        KM.
      </motion.div>
      
      <motion.div
        style={isDesktop ? { y, opacity } : undefined}
        className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center"
      >
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight mb-6"
          >
            Khaja Raheel <br className="hidden md:block" />
            <span className="text-zinc-500 italic font-normal">Ahmed Mohiuddin</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light text-zinc-300 max-w-2xl"
          >
            {RESUME_DATA.role} | Building Scalable Systems & Training Intelligent Models
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <TerminalWindow />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-2 relative z-10 text-justify">
              {RESUME_DATA.summary}
            </p>

            <div className="h-px w-full bg-white/10 relative z-10" />

            <div className="flex flex-col gap-4 text-sm text-zinc-400 relative z-10">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Mail className="w-4 h-4" />
                {RESUME_DATA.contact.email}
              </a>
              <a href={`tel:${RESUME_DATA.contact.phoneHref}`} className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Phone className="w-4 h-4" />
                {RESUME_DATA.contact.phone}
              </a>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                {RESUME_DATA.contact.location}
              </div>
            </div>

            <a
              href="/KhajaRaheel_Resume_AIEngineer.pdf"
              download
              className="relative z-10 flex items-center justify-center gap-2 w-full bg-white text-zinc-900 text-sm font-semibold px-5 py-3 rounded-full hover:bg-zinc-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

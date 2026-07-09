import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Navigation from './components/Navigation';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { RESUME_DATA } from './data';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Keep the URL clean: strip any leftover #hash on load
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Smooth-scroll anchor links through Lenis instead of native jumps
    const handleAnchorClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        lenis.scrollTo(0);
      } else {
        lenis.scrollTo(href, { offset: -100 });
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen selection:bg-white/20 selection:text-white bg-[#050505] relative overflow-hidden">
      <CustomCursor />
      {/* Artistic Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite] mix-blend-screen" />
        <div className="hidden md:block absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-900/10 blur-[150px] animate-[pulse_15s_ease-in-out_infinite_2s] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[100px] animate-[pulse_12s_ease-in-out_infinite_5s] mix-blend-screen" />
        <div className="hidden md:block absolute top-[40%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-violet-900/10 blur-[120px] animate-[pulse_14s_ease-in-out_infinite_3s] mix-blend-screen" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-screen"></div>
      </div>
      
      {/* Architectural Layout Lines */}
      <div className="hidden lg:block w-px h-[100vh] bg-white/[0.03] fixed left-8 xl:left-24 top-0 bottom-0 pointer-events-none z-0" />
      <div className="hidden lg:block w-px h-[100vh] bg-white/[0.03] fixed right-8 xl:right-24 top-0 bottom-0 pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        <Navigation />
      
      <main className="flex flex-col">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>

      <footer className="py-12 border-t border-white/10 text-center relative z-10 glass-panel mt-12 mb-0 border-b-0 border-l-0 border-r-0 rounded-none bg-black/40">
        <div className="container mx-auto px-6 max-w-4xl text-zinc-500 text-sm flex flex-col items-center gap-4">
          <p>© {new Date().getFullYear()} Khaja Raheel Ahmed Mohiuddin. All rights reserved.</p>
          <div className="flex gap-6 mt-2 relative z-10">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-zinc-200 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href={`tel:${RESUME_DATA.contact.phoneHref}`} className="hover:text-zinc-200 transition-colors" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
    </MotionConfig>
  );
}

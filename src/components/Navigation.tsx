import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { RESUME_DATA } from '../data';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" }
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 transition-all duration-300 ${hasScrolled ? 'py-4' : ''}`}
    >
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-8 shadow-xl">
        <a href="#" className="font-serif font-bold text-lg tracking-widest text-white">
          KM.
        </a>
        <div className="w-px h-4 bg-white/20" />
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium tracking-wide text-zinc-400 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="text-xs font-semibold tracking-wide text-zinc-900 bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors uppercase ml-2 md:ml-4"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

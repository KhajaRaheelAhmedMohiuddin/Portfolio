import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="w-6 h-6 text-zinc-600" />
              <h2 className="font-serif text-3xl">Education</h2>
            </div>
            
            <div className="flex flex-col gap-8">
              {RESUME_DATA.education.map((edu, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-sm font-medium tracking-widest text-zinc-500 mb-2 uppercase">
                    {edu.date}
                  </div>
                  <h3 className="text-lg text-white mb-1">{edu.degree}</h3>
                  <div className="text-zinc-400 text-sm mb-1">{edu.institution}</div>
                  {edu.affiliation && (
                    <div className="text-zinc-500 text-xs mb-3 italic font-light">
                      Affiliated with {edu.affiliation}
                    </div>
                  )}
                  <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-zinc-300 w-fit">
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Award className="w-6 h-6 text-zinc-600" />
              <h2 className="font-serif text-3xl">Accolades</h2>
            </div>
            
            <ul className="flex flex-col gap-6 text-zinc-400 text-sm">
              <li className="flex gap-4">
                <span className="shrink-0 text-zinc-600 font-serif text-lg">01.</span>
                <p>Published <strong className="font-semibold text-zinc-300 pointer-events-none">IEEE Paper</strong>: 'Evolution of Data Science in Information Technology' in an International Journal for Modern Trends in Science and Technology. <a href="http://ijmtst.com/volume8/si08/IJMTST08S0809.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors ml-1 translate-y-[2px]"><ExternalLink className="w-4 h-4" /></a></p>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 text-zinc-600 font-serif text-lg">02.</span>
                <p>Certified in <strong className="font-semibold text-zinc-300">Python & Cybersecurity Essentials</strong> – Cisco Networking Academy. <a href="https://drive.google.com/file/d/1aansc4qNX29aF9lsI-g6XL4FN943FLuQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors ml-1 translate-y-[2px]"><ExternalLink className="w-4 h-4" /></a></p>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 text-zinc-600 font-serif text-lg">03.</span>
                <p>Virtual Experience Programs: <strong className="font-semibold text-zinc-300">Deloitte, Goldman Sachs, JP Morgan Chase & Co.</strong> (Forage). <a href="https://drive.google.com/file/d/1Np7RJoXeWUcr2lZ7QDVMtXezzhoFEi8M/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors ml-1 translate-y-[2px]"><ExternalLink className="w-4 h-4" /></a></p>
              </li>
              <li className="flex gap-4">
                <span className="shrink-0 text-zinc-600 font-serif text-lg">04.</span>
                <p>Udemy Certifications: Streamlit Bootcamp, No-Code ML using AWS SageMaker Canvas. <a href="https://drive.google.com/file/d/1vEwpcNQPtsDwu2SkKmMDAOsiRrJsOqd4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors ml-1 translate-y-[2px]"><ExternalLink className="w-4 h-4" /></a></p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { RESUME_DATA } from '../data';

type CommandLog = {
  command?: string;
  output: React.ReactNode;
  id: string;
};

const createInitLog = (): CommandLog => ({
  output: (
    <div className="text-zinc-500">
      Last login: {new Date().toLocaleDateString()} on ttys001
      <br/>
      Type 'help' to see available commands.
    </div>
  ),
  id: 'init'
});

export default function TerminalWindow() {
  const [input, setInput] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([createInitLog()]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let output: React.ReactNode;

    if (!cmd) return;

    if (cmd === 'help') {
      output = (
        <div className="text-zinc-300">
          Available utilities: <br/>
          - <span className="text-emerald-400">ask [question]</span>: Quick Q&A about me <br/>
          <div className="pl-4 text-zinc-500 text-xs mt-1 mb-2">
            Try asking about:<br/>
            hiring me · what I bring · how I work · my role <br/>
            python · react · kotlin · projects · AI / LLM <br/>
            education · certifications · contact · hobbies
          </div>
          - <span className="text-emerald-400">clear</span>: Clear terminal window
        </div>
      );
    } else if (cmd.startsWith('ask ')) {
      const q = cmd.slice(4).trim().replace(/['"]+/g, '');
      let answer = "I'm currently focused on RLHF, LLM evaluation, and shipping robust Python code. Try asking about hiring me, python, my AI experience, or hobbies!";

      if (q.includes('hire')) {
        answer = "I bring a meticulous approach to AI training. I don't just write code; I ensure models learn the exact logic, safety, and reasoning required for production.";
      } else if (q.includes('bring') || q.includes('table') || q.includes('offer')) {
        answer = "I offer a unique blend of deep Python expertise and hands-on experience in fine-tuning LLM behaviors, ensuring high-quality data pipelines and model reliability.";
      } else if (q.includes('how do you work') || q.includes('work style') || q.includes('workflow')) {
        answer = "I work iteratively and systematically. I thrive in environments where I can analyze complex edge cases, develop rigorous evaluation scripts, and continuously refine model outputs.";
      } else if (q.includes('project') || q.includes('grizzly') || q.includes('toucan') || q.includes('p13n')) {
        answer = "My key projects are Grizzly (LLM code intelligence), Toucan (RLHF system training), and P13N (AI personalization) — all Google-aligned work at Invisible Technologies. Earlier: an IoT intrusion detection system with 96.3% accuracy and an airfare prediction ML model. Scroll down to Selected Works for details.";
      } else if (q.includes('python') && (q.includes('good') || q.includes('level') || q.includes('rate'))) {
        answer = "I'm highly proficient. I specialize in writing clean, scalable, and idiomatic Python code, particularly in the context of data science, APIs, and AI workflows.";
      } else if (q.includes('python')) {
        answer = "Yes, Python is my daily driver. I use it for everything from data processing pipelines to complex evaluation logic for AI models.";
      } else if (q.includes('react') || q.includes('frontend') || q.includes('front-end') || q.includes('javascript') || q.includes('typescript')) {
        answer = "Yes — I spent over a year at Tech Mahindra building React frontends for the Singapore Land Authority's Digital Conveyancing Portal, with Jest testing, performance optimization, and SonarQube quality gates.";
      } else if (q.includes('kotlin')) {
        answer = "Yes, I work with Kotlin regularly — on Project Grizzly I validate LLM-generated Kotlin patches for correctness, testing, and software engineering best practices.";
      } else if (q.includes('llm') || q.includes('model')) {
        answer = "Absolutely. I spend my days identifying hallucination patterns, ensuring absolute instruction adherence, and improving the logical reasoning capabilities of advanced LLMs.";
      } else if (q.includes('ai ') || q.endsWith('ai') || q.includes('rlhf') || q.includes('experience')) {
        answer = "I've served as an AI Trainer and Reviewer, evaluating over 1000+ AI responses, focusing on RLHF pipelines and enhancing model reasoning and safety.";
      } else if (q.includes('fun')) {
        answer = "When I'm not shaping AI behavior, I'm probably dissecting new tech, optimizing my personal workflows, or grabbing a strong coffee while reading up on the latest research.";
      } else if (q.includes('hobb') || q.includes('free time')) {
        answer = "I enjoy keeping up with the rapid pace of open-source AI, tinkering with personal coding projects, and occasionally stepping away from the screen for some gaming or reading.";
      } else if (q.includes('what do you do') || q.includes('role') || q.includes('where do you work') || q.includes('current') || q.includes('company')) {
        answer = "I'm currently a Master Python Coding Specialist & AI Trainer at Meridial (Invisible Technologies), working on Google-aligned AI projects — 1500+ training tasks delivered and 1000+ model outputs reviewed.";
      } else if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('cgpa') || q.includes('study')) {
        answer = "B.Tech in Computer Science & Engineering from Balaji Institute of Technology and Science, Warangal (2019-2023), CGPA 7.71 — affiliated with JNTU Hyderabad.";
      } else if (q.includes('certif') || q.includes('ieee') || q.includes('publication') || q.includes('paper')) {
        answer = "I've published an IEEE paper on the Evolution of Data Science in IT, and I'm Cisco-certified in Python & Cybersecurity Essentials, with additional AWS SageMaker and Streamlit training.";
      } else if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('location') || q.includes('based') || q.includes('relocat') || q.includes('remote')) {
        answer = `You can reach me at ${RESUME_DATA.contact.email} or via LinkedIn (links below). I'm based in Warangal, Telangana, India, and open to remote opportunities.`;
      }

      output = <div className="text-blue-300">{answer}</div>;
    } else if (cmd === 'sudo rm -rf /' || cmd === 'rm -rf /' || cmd === 'drop table') {
      output = <div className="text-red-500 font-bold">PERMISSION DENIED. Nice try.</div>;
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 800);
    } else if (cmd === 'clear') {
      setLogs([createInitLog()]);
      setInput('');
      return;
    } else {
      output = <div className="text-red-400">command not found: {cmd}. Type 'help' for options.</div>;
    }

    setLogs(prev => [...prev, { command: cmd, output, id: Date.now().toString() }]);
    setInput('');
  };

  return (
    <motion.div 
      className={`glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-8 w-full max-w-xl interactive font-mono text-[13px] relative ${isGlitching ? 'bg-red-950/20' : ''}`}
      animate={isGlitching ? { x: [-10, 10, -10, 10, -5, 5, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-black/50 border-b border-white/10 px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-zinc-500 font-sans text-xs">
          <Terminal className="w-3 h-3" />
          bash - {RESUME_DATA.contact.email.split('@')[0]}
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>
      
      <div 
        ref={containerRef}
        className="h-[200px] p-4 overflow-y-auto no-scrollbar scroll-smooth flex flex-col gap-2"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        {logs.map((log) => (
          <div key={log.id}>
            {log.command && (
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-fuchsia-400">➜</span>
                <span className="text-cyan-400">~</span>
                {log.command}
              </div>
            )}
            <div className="mt-1">{log.output}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 text-zinc-300 mt-1 relative z-10 w-full shrink-0">
           <span className="text-fuchsia-400 shrink-0">➜</span>
           <span className="text-cyan-400 shrink-0">~</span>
           <input 
             ref={inputRef}
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className="bg-transparent border-none outline-none flex-1 text-zinc-200 tracking-wide focus:ring-0 min-w-0"
             spellCheck="false"
           />
        </form>
      </div>
      
      {isGlitching && (
        <div className="absolute inset-0 bg-red-500/10 pointer-events-none z-50 animate-pulse mix-blend-color-dodge" />
      )}
    </motion.div>
  );
}

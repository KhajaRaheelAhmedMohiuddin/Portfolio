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

const answerFor = (q: string): string => {
  const has = (...terms: string[]) => terms.some((t) => q.includes(t));
  const hasWord = (word: string) => new RegExp(`\\b${word}\\b`).test(q);

  if (has('hire', 'why you', 'why should')) {
    return "I break frontier models for a living and then explain precisely why they broke. That means rigorous, source-verified evaluation work — plus the engineering background to build the tooling around it.";
  }
  if (has('bring', 'table', 'offer', 'strength')) {
    return "A rare combination: adversarial evaluation rigor (red-teaming, source verification, benchmark design) paired with real software engineering in Python, React, and production systems.";
  }
  if (has('adversarial', 'red-team', 'red team', 'stump', 'benchmark', 'prompt engineering', 'prompt design')) {
    return "At Handshake AI I design adversarial 'model stumping' prompts that expose web-search and retrieval-reasoning failures in a frontier LLM — every accepted task must defeat the model on at least 4 of 8 automated evaluation runs, with each fact verified against 3+ independent primary sources.";
  }
  if (has('how do you work', 'work style', 'workflow', 'approach')) {
    return "I work iteratively and systematically. I thrive in environments where I can analyze complex edge cases, develop rigorous evaluation scripts, and continuously refine model outputs.";
  }
  if (has('project', 'grizzly', 'toucan', 'p13n', 'built', 'build')) {
    return "My flagship open-source project is RAG Eval Service — a production-style RAG microservice with hybrid retrieval and a built-in eval harness. Also ScoreX (Kotlin cricket scorer), SmartBill, and ML work on intrusion detection and airfare prediction. Professionally: Seal at Handshake AI, and Grizzly, Toucan, and P13N at Meridial AI. Type 'projects' for the list.";
  }
  if (q.includes('python') && has('good', 'level', 'rate', 'strong', 'proficient')) {
    return "I'm highly proficient. I specialize in writing clean, scalable, and idiomatic Python code, particularly in the context of data science, APIs, and AI workflows.";
  }
  if (q.includes('python')) {
    return "Yes, Python is my daily driver. I use it for everything from data processing pipelines to complex evaluation logic for AI models.";
  }
  if (has('react', 'frontend', 'front-end', 'javascript', 'typescript')) {
    return "Yes — I spent over a year at Tech Mahindra building React frontends for the Singapore Land Authority's Digital Conveyancing Portal, with Jest testing, performance optimization, and SonarQube quality gates.";
  }
  if (has('kotlin', 'android', 'mobile')) {
    return "Yes — I built ScoreX, an offline Android cricket scorer in Kotlin and Jetpack Compose with 63 automated tests. I also validate LLM-generated Kotlin patches on Project Grizzly.";
  }
  if (has('llm', 'model', 'hallucinat')) {
    return "Absolutely. I spend my days identifying hallucination patterns, ensuring absolute instruction adherence, and improving the logical reasoning capabilities of advanced LLMs.";
  }
  if (hasWord('ai') || has('rlhf', 'experience', 'machine learning')) {
    return "I'm currently a Prompt Engineer at Handshake AI doing adversarial LLM evaluation and red-teaming. Before that, as an AI Trainer and Reviewer at Meridial AI, I delivered 1500+ training tasks and audited 1000+ model outputs across RLHF pipelines.";
  }
  if (has('fun', 'hobb', 'free time', 'outside work')) {
    return "When I'm not shaping AI behavior, I'm probably dissecting new tech, tinkering with side projects, or stepping away from the screen for some cricket, gaming, or reading.";
  }
  if (has('what do you do', 'role', 'where do you work', 'current', 'company', 'job')) {
    return "I'm a Prompt Engineer at Handshake AI, working on adversarial LLM evaluation and red-teaming for frontier-model web-search benchmarks. Previously Master Python Coding Specialist & AI Trainer at Meridial AI (Invisible Technologies) on Google-aligned projects.";
  }
  if (has('education', 'degree', 'college', 'university', 'cgpa', 'study', 'graduat')) {
    return "B.Tech in Computer Science & Engineering from Balaji Institute of Technology and Science, Warangal (2019-2023), CGPA 7.71 — affiliated with JNTU Hyderabad.";
  }
  if (has('certif', 'ieee', 'publication', 'paper', 'award', 'achievement')) {
    return "I've published an IEEE paper on the Evolution of Data Science in IT, and I'm Cisco-certified in Python & Cybersecurity Essentials, with additional AWS SageMaker and Streamlit training.";
  }
  if (has('contact', 'reach', 'email', 'location', 'based', 'relocat', 'remote', 'hiring')) {
    return `You can reach me at ${RESUME_DATA.contact.email} or via LinkedIn. I'm based in Warangal, Telangana, India, and open to remote opportunities. Type 'contact' for all links.`;
  }
  return "I'm currently focused on RLHF, LLM evaluation, and shipping robust Python code. Try asking about hiring me, python, my projects, my AI experience, or hobbies — or type 'help'.";
};

export default function TerminalWindow() {
  const [input, setInput] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [logs, setLogs] = useState<CommandLog[]>([createInitLog()]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [logs]);

  // Let the terminal absorb scroll only while it has room; at its top/bottom
  // edge (or when it has no overflow) the wheel passes through to page scroll.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      if (scrollHeight <= clientHeight + 1) return;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
        e.stopPropagation();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: true });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < 0) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    const cmd = raw.toLowerCase();

    let output: React.ReactNode;

    if (!cmd) return;

    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    if (cmd === 'help') {
      output = (
        <div className="text-zinc-300">
          Available commands: <br/>
          - <span className="text-emerald-400">ask [question]</span>: Quick Q&A about me <br/>
          <div className="pl-4 text-zinc-500 text-xs mt-1 mb-2">
            Try asking about:<br/>
            hiring me · what I bring · how I work · my role <br/>
            red-teaming · prompt design · AI / LLM · projects <br/>
            python · react · kotlin · education · contact
          </div>
          - <span className="text-emerald-400">whoami</span>: Who I am <br/>
          - <span className="text-emerald-400">skills</span>: Technical skills <br/>
          - <span className="text-emerald-400">projects</span>: Selected works <br/>
          - <span className="text-emerald-400">resume</span>: Download my resume <br/>
          - <span className="text-emerald-400">contact</span>: How to reach me <br/>
          - <span className="text-emerald-400">clear</span>: Clear terminal window
          <div className="text-zinc-500 text-xs mt-2">Tip: press ↑ / ↓ to recall previous commands.</div>
        </div>
      );
    } else if (cmd === 'ask') {
      output = (
        <div className="text-amber-300">
          Usage: <span className="text-emerald-400">ask [question]</span> — e.g. "ask why should we hire you" or "ask about your projects".
        </div>
      );
    } else if (cmd.startsWith('ask ')) {
      const q = cmd.slice(4).trim().replace(/['"]+/g, '');
      output = <div className="text-blue-300">{answerFor(q)}</div>;
    } else if (cmd === 'whoami') {
      output = (
        <div className="text-zinc-300">
          <span className="text-white">Khaja Raheel Ahmed Mohiuddin</span> — {RESUME_DATA.role}
          <br/>
          <span className="text-zinc-500">{RESUME_DATA.experience[0].role} @ {RESUME_DATA.experience[0].company}</span>
          <br/>
          <span className="text-zinc-500">{RESUME_DATA.contact.location}</span>
        </div>
      );
    } else if (cmd === 'skills') {
      output = (
        <div className="text-zinc-300 flex flex-col gap-1">
          {RESUME_DATA.skills.map((group) => (
            <div key={group.category}>
              <span className="text-emerald-400">{group.category}:</span>{' '}
              <span className="text-zinc-400">{group.items.join(', ')}</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'projects' || cmd === 'ls') {
      output = (
        <div className="text-zinc-300 flex flex-col gap-1">
          {RESUME_DATA.projects.map((project) => (
            <div key={project.title}>
              <span className="text-emerald-400">{project.title}</span>{' '}
              <span className="text-zinc-500">— {project.tech}</span>
            </div>
          ))}
          <div className="text-zinc-500 text-xs mt-1">Scroll to Selected Works for details and GitHub links.</div>
        </div>
      );
    } else if (cmd === 'resume' || cmd === 'cv') {
      output = (
        <div className="text-zinc-300">
          <a
            href="/KhajaRaheel_Resume_PromptEngineer.pdf"
            download
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            Download my resume (PDF)
          </a>
        </div>
      );
    } else if (cmd === 'contact') {
      output = (
        <div className="text-zinc-300 flex flex-col gap-1">
          <div><span className="text-zinc-500">email</span>{'   '}<a href={`mailto:${RESUME_DATA.contact.email}`} className="text-emerald-400 hover:text-emerald-300">{RESUME_DATA.contact.email}</a></div>
          <div><span className="text-zinc-500">linkedin</span>{' '}<a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">/in/khajaraheelahmedmohiuddin</a></div>
          <div><span className="text-zinc-500">github</span>{'  '}<a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">@KhajaRaheelAhmedMohiuddin</a></div>
          <div><span className="text-zinc-500">based</span>{'   '}<span className="text-zinc-400">{RESUME_DATA.contact.location}</span></div>
        </div>
      );
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

    setLogs(prev => [...prev, { command: raw, output, id: Date.now().toString() }]);
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
        className="h-[200px] p-4 overflow-y-auto no-scrollbar scroll-smooth flex flex-col gap-2 overscroll-contain"
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
           {!isFocused && !input && (
             <span className="w-2 h-4 bg-zinc-400/70 animate-pulse shrink-0" aria-hidden="true" />
           )}
           <input
             ref={inputRef}
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={handleKeyDown}
             onFocus={() => setIsFocused(true)}
             onBlur={() => setIsFocused(false)}
             placeholder={isFocused ? '' : "type 'help' and press Enter"}
             aria-label="Terminal command input"
             className="bg-transparent border-none outline-none flex-1 text-zinc-200 tracking-wide focus:ring-0 min-w-0 caret-fuchsia-400 placeholder:text-zinc-600"
             spellCheck="false"
             autoComplete="off"
           />
        </form>
      </div>

      {isGlitching && (
        <div className="absolute inset-0 bg-red-500/10 pointer-events-none z-50 animate-pulse mix-blend-color-dodge" />
      )}
    </motion.div>
  );
}

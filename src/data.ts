export const RESUME_DATA = {
  name: "KHAJA RAHEEL AHMED MOHIUDDIN",
  role: "Software Engineer & AI Specialist",
  contact: {
    email: "khajarahil0909@gmail.com",
    phone: "+91 70136 91213",
    phoneHref: "+917013691213",
    linkedin: "https://www.linkedin.com/in/khajaraheelahmedmohiuddin/",
    github: "https://github.com/KhajaRaheelAhmedMohiuddin",
    location: "Warangal, Telangana, India"
  },
  summary: "Software Engineer and AI Specialist with expertise in Reinforcement Learning with Human Feedback (RLHF), LLM evaluation, and real-world code generation systems. Delivered 1500+ high-quality AI training and evaluation tasks across Google-aligned projects, ensuring code correctness, test coverage, and production readiness.",
  skills: [
    { category: "AI / LLM", items: ["RLHF", "Prompt Engineering", "LLM Evaluation", "Response Ranking", "AI Quality Review"] },
    { category: "Frontend", items: ["React JS", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Bootstrap"] },
    { category: "Testing & QA", items: ["Jest", "React Testing Library", "SonarQube", "Unit Testing"] },
    { category: "Performance & State", items: ["Redux", "Context API", "Code Splitting", "Lazy Loading", "Webpack"] },
    { category: "Languages & Mobile", items: ["Java", "Python", "Kotlin", "React Native", "Android"] },
    { category: "Tools & DB", items: ["Git", "GitHub", "GitLab", "CI/CD", "Agile", "SQL", "Power BI"] }
  ],
  experience: [
    {
      role: "Senior AI Specialist - Master Python Coding Specialist",
      company: "Meridial (Invisible Technologies)",
      date: "Oct 2025 - Present",
      highlights: [
        "Worked on Google-aligned advanced AI training systems, focusing on RLHF pipelines, LLM evaluation, and real-world code intelligence.",
        "Delivered 1500+ high-quality LLM training and evaluation tasks; promoted to Reviewer, auditing 1000+ model outputs for production-grade quality.",
        "Ensured code correctness, logical reasoning accuracy, edge case handling, and instruction adherence.",
        "Evaluated and improved LLM-generated outputs for accuracy, efficiency, and consistency."
      ],
      projects: [
        "Toucan (Google - RLHF System Training)",
        "Grizzly (Google - Real-World Code Intelligence)",
        "P13N Personalization (Google - AI Personalization System)"
      ]
    },
    {
      role: "AI Training Data Specialist (RLHF & LLM Evaluation)",
      company: "Soul AI by Deccan AI",
      date: "Mar 2025 - Sep 2025",
      highlights: [
        "Worked on 'Extension' RLHF-based project.",
        "Improved AI response accuracy, context understanding, and output alignment.",
        "Contributed to LLM training pipelines, enhancing instruction-following behavior, model reasoning, and consistency."
      ]
    },
    {
      role: "Associate Software Engineer - React",
      company: "Tech Mahindra",
      date: "Dec 2023 - Feb 2025",
      highlights: [
        "Contributed to the Singapore Land Authority's Digital Conveyancing Portal (SLA DCP) project, developing and optimizing frontend components.",
        "Implemented unit testing with Jest, ensuring robust test coverage and improving SonarQube scores.",
        "Actively participated in code reviews, debugging, and performance optimization, leading to a faster and more seamless application.",
        "Applied best practices in frontend performance optimization, improving page load times, responsiveness, and accessibility."
      ]
    }
  ],
  projects: [
    {
      title: "RAG Eval Service",
      tech: "Python, FastAPI, LangChain",
      description: "Production-style RAG microservice with hybrid retrieval (BM25 + TF-IDF fused via Reciprocal Rank Fusion), neural cross-encoder re-ranking, prompt versioning, PII guardrails, and a built-in evaluation harness measuring hit-rate and MRR.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/rag-eval-service"
    },
    {
      title: "SmartBill",
      tech: "React, Bootstrap",
      description: "Feature-rich web application for generating, customizing, and exporting invoices in PDF/Excel. Integrated QR Code Generation and Digital Signatures."
    },
    {
      title: "FreshFold",
      tech: "React Native",
      description: "Mobile application for laundry services with cart management, checkout, order tracking, and dynamic shipping fee calculations."
    },
    {
      title: "Intrusion Detection System",
      tech: "Python, TensorFlow (LSTM), Flask",
      description: "Protocol-Based Deep Intrusion Detection (PB-DID): a stacked-LSTM classifier labeling network flows as Normal, DoS, or DDoS, trained on UNSW-NB15 and Bot-IoT. 98.05% accuracy validated with feature-set ablation, served via a Flask dashboard, CLI, and JSON API.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/web-based-analysis-ids"
    },
    {
      title: "Airfare Prediction System",
      tech: "Machine Learning",
      description: "Designed an ML-based prediction model achieving 80-90% accuracy for cost-effective flight bookings."
    },
    {
      title: "StegoSecure",
      tech: "Python, Cryptography, Tkinter",
      description: "Desktop app that hides encrypted text inside PNG images via LSB steganography. Messages are Fernet-encrypted with scrypt-derived keys and embedded in a versioned, authenticated payload format that rejects wrong passwords or tampered images — wrapped in a guided two-step Tkinter UI.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/image-steganography"
    }
  ],
  education: [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institution: "Balaji Institute of Technology and Science, Warangal",
      affiliation: "Jawaharlal Nehru Technological University Hyderabad",
      date: "Aug 2019 - July 2023",
      score: "CGPA: 7.71"
    }
  ]
};

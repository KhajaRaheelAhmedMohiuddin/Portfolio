export const RESUME_DATA = {
  name: "KHAJA RAHEEL AHMED MOHIUDDIN",
  role: "Prompt Engineer & LLM Specialist",
  contact: {
    email: "khajarahil0909@gmail.com",
    phone: "+91 70136 91213",
    phoneHref: "+917013691213",
    linkedin: "https://www.linkedin.com/in/khajaraheelahmedmohiuddin/",
    github: "https://github.com/KhajaRaheelAhmedMohiuddin",
    location: "Warangal, Telangana, India"
  },
  summary: "Prompt Engineer specializing in adversarial LLM evaluation, red-teaming, and advanced prompt design, building source-verified benchmark tasks that expose frontier-model web-search and retrieval failure modes. Previously delivered 1500+ production-grade LLM training and evaluation tasks on Google-aligned projects, promoted to Reviewer, backed by a software engineering background in Python, React, and production systems.",
  skills: [
    { category: "Adversarial Evaluation & Red-Teaming", items: ["Adversarial Testing", "Model Stumping", "Benchmark & Eval-Dataset Creation", "RAG Failure Analysis", "Source Verification", "Multi-Source Fact-Checking", "Ground-Truth Annotation"] },
    { category: "AI / LLM Engineering", items: ["Prompt Engineering", "Adversarial Prompt Design", "Multi-Hop Prompt Construction", "RLHF", "LLM Evaluation", "RAG Pipelines", "Hybrid Retrieval (BM25 + RRF)", "Guardrails & HITL"] },
    { category: "ML & Data", items: ["Scikit-learn", "LightGBM", "XGBoost", "CatBoost", "TensorFlow (LSTM)", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation"] },
    { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Kotlin", "Java", "SQL"] },
    { category: "Backend & Frameworks", items: ["FastAPI", "LangChain", "Flask", "Streamlit", "Pydantic", "REST APIs"] },
    { category: "Frontend", items: ["React", "Redux", "Context API", "Tailwind CSS", "shadcn/ui", "Vite", "HTML", "CSS", "SCSS"] },
    { category: "Mobile", items: ["Jetpack Compose", "Room", "MVVM", "React Native", "Android"] },
    { category: "Testing & Quality", items: ["Pytest", "Jest", "React Testing Library", "Robolectric", "SonarQube", "Unit Testing"] },
    { category: "Tools & Practices", items: ["Git", "GitHub Actions", "CI/CD", "Docker", "GitLab", "Agile", "Power BI"] }
  ],
  experience: [
    {
      role: "Prompt Engineer - Adversarial LLM Evaluation & Red-Teaming",
      company: "Handshake AI",
      date: "Jul 2026 - Present",
      highlights: [
        "Designed research-grade adversarial evaluation prompts ('model stumping') probing web-search and retrieval-reasoning failures in a frontier LLM; every accepted task had to defeat the model on ≥4 of 8 automated evaluation runs.",
        "Authored multi-hop, single-answer question/answer pairs with step-by-step 'Golden Trajectory' solution paths, verifying each fact against 3+ independent primary sources for full reproducibility.",
        "Diagnosed the core failure mode, genuine information un-retrievability vs. reasoning difficulty and codified a reusable prompt-construction methodology that lifted first-pass acceptance and throughput.",
        "Ran controlled evaluations (memory-off, extended-reasoning, 3-run + server-side 8-run auto-eval) and wrote precise failure justifications separating retrieval failures from ambiguity or prompt error.",
        "Drove tasks through a multi-stage QA pipeline (auto-eval → two human review rounds → audit), resolving granular reviewer feedback on prompt ambiguity, source validity, and source-to-trajectory mapping."
      ],
      projects: [
        "Seal (Frontier-Model Web-Search Benchmark)"
      ]
    },
    {
      role: "Master Python Coding Specialist - AI Trainer",
      company: "Meridial AI (Invisible Technologies)",
      date: "Oct 2025 - Jun 2026",
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
      title: "ScoreX - Cricket Scorer",
      tech: "Kotlin, Jetpack Compose, Room",
      description: "Offline Android cricket-scoring app with ball-by-ball scoring, live batting, bowling, and partnership stats, full scorecards, analytics, match history, undo/redo, and Super Overs. MVVM with StateFlow and Room persistence, backed by 63 automated tests running in GitHub Actions CI.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/scorex-cricket-scorer"
    },
    {
      title: "SmartBill",
      tech: "React, TypeScript, Tailwind, shadcn/ui",
      description: "Browser-based invoice generator with a live-preview editor, multi-currency support, six themes, and three layouts. Exports pixel-accurate PDFs (jsPDF), Excel, and JSON, with QR code verification and draw-to-sign digital signatures — no backend required, heavy export libraries code-split on demand.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/SmartBill"
    },
    {
      title: "FreshFold",
      tech: "React Native",
      description: "Mobile application for laundry services with cart management, checkout, order tracking, and dynamic shipping fee calculations."
    },
    {
      title: "Intrusion Detection System",
      tech: "Python, TensorFlow (LSTM), Flask",
      description: "Protocol-Based Deep Intrusion Detection (PB-DID): a stacked-LSTM classifier labeling network flows as Normal, DoS, or DDoS, trained on UNSW-NB15 and Bot-IoT. 98.05% accuracy on 42,482 held-out flows, validated with feature-set ablation and served via a Flask dashboard, CLI, and JSON API.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/web-based-analysis-ids"
    },
    {
      title: "Airfare Prediction System",
      tech: "Python, Scikit-learn, LightGBM, Streamlit",
      description: "Stacked ensemble of five learners (LightGBM, XGBoost, CatBoost, Extra Trees) predicting Indian domestic airfares at 94.14% accuracy (R² 0.9165) across 10,683 itineraries under 10-fold cross-validation with leak-proof target encoding. Includes a booking advisor ranking the cheapest flights and dates with measured reliability, served via Streamlit.",
      link: "https://github.com/KhajaRaheelAhmedMohiuddin/airfare-prediction-system"
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

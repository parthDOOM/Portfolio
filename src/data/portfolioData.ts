import { Project, Skill, Achievement, CompetitiveProgramming, ContactInfo, Experience } from '../types';

export const personalInfo = {
  name: "Parthiv Jasoliya",
  title: "Software Engineer · Data & AI Systems",
  subtitle: "I build data pipelines, cloud-native backends and AI products — from transaction-monitoring engines to vector-search matching.",
  status: "Data Scientist @ IndusInd Bank · NIT Surat",
  bio: "I'm a Data Scientist at IndusInd Bank, where I build the data pipelines and transaction-monitoring systems behind internal audit. Before that I graduated from NIT Surat and interned at TruEstate, TCS Research & Innovation and Voxel Verse.",
  fullBio: "Most of my work sits where backend engineering meets machine learning: vector-search matching with Qdrant, LLM-assisted ingestion pipelines, AI agents for cloud security, and Stable Diffusion asset generation. I'm most at home in Python, TypeScript (Next.js, NestJS) and GCP, and competitive programming — 2× ICPC Regionalist, Meta Hacker Cup Round 3 — keeps my problem-solving sharp.",
  resumeUrl: "/assets/ParthivJasoliya-2026-SDE.pdf",
  profileImage: "/assets/self.jpeg"
};

export const heroHighlights = [
  { value: "2409", label: "LeetCode · Guardian" },
  { value: "5★", label: "CodeChef · 2059" },
  { value: "2×", label: "ICPC Regionalist" },
  { value: "#130 Round 3", label: "Meta Hacker Cup" },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "programming" },
  { name: "C++", category: "programming" },
  { name: "TypeScript", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "Verilog", category: "programming" },

  // Machine Learning & AI
  { name: "LLMs & Agentic Frameworks", category: "ml" },
  { name: "Vector Search (Qdrant)", category: "ml" },
  { name: "Diffusion Models & GANs", category: "ml" },
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "Data Pipelines", category: "ml" },

  // Web Development
  { name: "Next.js & React", category: "web" },
  { name: "NestJS & Node.js", category: "web" },
  { name: "FastAPI", category: "web" },
  { name: "Redux", category: "web" },
  { name: "Tailwind CSS", category: "web" },
  { name: "HTML / CSS / SCSS", category: "web" },

  // Cloud & Tools
  { name: "GCP (Cloud Run, BigQuery, Pub/Sub)", category: "tools" },
  { name: "AWS (Lambda, IAM, S3)", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "gridlock-intelligence",
    title: "Gridlock Intelligence",
    description: "Forecasts event-driven traffic congestion in Bangalore and plans where police patrols and barricades should go.",
    fullDescription: "Planned and unplanned events cause predictable congestion spikes that traffic police usually respond to after the fact. Gridlock Intelligence predicts where violations will concentrate, how severe they will be and when the peak hits, then recommends how many officers and barricades to send where. It scores event and parking impact, forecasts congestion with a phase curve calibrated on the Bangalore Traffic Pulse dataset, finds hotspots by clustering 85,918 peak-hour parking violations with HDBSCAN or PostGIS, and plans patrol routes with a PuLP MILP or OR-Tools VRP solver. Deployed on Google Cloud Run with Cloud SQL.",
    technologies: ["Python", "FastAPI", "PostgreSQL + PostGIS", "HDBSCAN", "OR-Tools", "React", "deck.gl", "GCP"],
    image: "/assets/gridlock.png",
    githubUrl: "https://github.com/parthDOOM/FlipkartGridlockR2",
    featured: true
  },
  {
    id: "strata",
    title: "Strata",
    description: "Quantitative finance dashboard — pairs trading, Monte Carlo risk and an options engine written in C++.",
    fullDescription: "Strata is a quantitative research dashboard. Its pairs-trading engine scans 50+ tickers for cointegrated pairs (p < 0.05), computes hedge ratios, half-lives and z-scores, and grid-searches entry/exit thresholds with backtests and Sharpe-ratio heatmaps. A Monte Carlo module runs 10,000+ Geometric Brownian Motion paths to estimate VaR and CVaR at 95% confidence, and the options module draws 3D implied-volatility surfaces with Black-Scholes Greeks computed in a C++ extension (pybind11) at sub-millisecond latency. It also tracks portfolios, technical indicators and market news.",
    technologies: ["Python", "FastAPI", "C++", "pybind11", "NumPy", "Pandas", "React", "TypeScript"],
    image: "/assets/strata.png",
    githubUrl: "https://github.com/parthDOOM/strata",
    featured: true
  },
  {
    id: "escapement",
    title: "Escapement",
    description: "Protocol-engine ASIC on IHP 130 nm where every timed I/O event fires on its exact clock tick — or is refused up front.",
    fullDescription: "Escapement is a programmable protocol engine chip designed for the Jane Street protocol emulator challenge and built through Tiny Tapeout on IHP's 130 nm SG13CMOS5L process. Firmware schedules pin changes at absolute clock ticks; each event is checked when it is queued, so it either fires on its exact tick or raises a visible fault instead of firing late. UART, SPI, I2C, CAN and JTAG are all implemented in firmware on four isolated hardware contexts. The 6×4-tile design closes timing at 25 MHz across all corners with 23,978 cells, and is verified with cocotb tests, SymbiYosys formal proofs and mutation testing (20/20 mutants killed), plus a custom assembler, instruction-set simulator and timing-certificate checker.",
    technologies: ["Verilog", "Python", "cocotb", "SymbiYosys", "Tiny Tapeout", "ASIC Design"],
    image: "/assets/escapement.png",
    githubUrl: "https://github.com/parthDOOM/escapement",
    featured: true
  },
  {
    id: "canvas-homes",
    title: "alldoors.in",
    description: "Bangalore real estate platform I worked on at TruEstate — listings, filters, RERA data and buyer matching on GCP.",
    fullDescription: "alldoors is a Next.js real estate platform for Bangalore that lets buyers browse, filter and compare property listings, with detailed insights such as RERA data and brochures plus enquiry and call-scheduling flows. During my internship at TruEstate I worked across its GCP backend (Cloud Run, Cloud SQL, BigQuery, Pub/Sub) and built a vector-embedding matching engine on Qdrant that scores every listing against a buyer's preferences to show a match percentage.",
    technologies: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS", "PostgreSQL", "GCP", "Qdrant", "Redux"],
    image: "/assets/canvashomes.png",
    liveUrl: "https://alldoors.in",
    featured: true
  },
  {
    id: "rng-analyzer",
    title: "RNG Flaw Detector",
    description: "Neural network that classifies random-number-generator output into 8 flaw types, served by FastAPI to a mobile app.",
    fullDescription: "A machine-learning system for checking the health of true random number generators. A FastAPI service extracts 131 statistical features from an uploaded binary sequence (entropy, chi-squared and Kolmogorov-Smirnov tests, autocorrelation, FFT and PSD coefficients and more) and classifies it with a TensorFlow/Keras model into one of eight classes: Healthy, Biased, Stuck_00, Stuck_FF, ReducedEntropy, Periodic, Correlated or LCG_Flawed. An Expo (React Native) app lets users pick a .bin file and see the predicted status, per-class confidence and recommendations.",
    technologies: ["Python", "TensorFlow", "FastAPI", "SciPy", "React Native", "Expo"],
    image: "/assets/model.jpg",
    githubUrl: "https://github.com/parthDOOM/RNG_Android_App",
    downloadUrl: "https://drive.google.com/file/d/1xYAXZVwO7GzXKOxOffqgO88uMqwlLi4t/view?usp=sharing",
    featured: false
  },
  {
    id: "graph-visualizer",
    title: "Graph Visualizer",
    description: "TypeScript web tool for data visualization with downloadable PNG export functionality.",
    fullDescription: "\"Lookatthisgraph\" is a web-based data visualization tool developed with TypeScript, JavaScript, Tailwind CSS, and Vite, designed to help users create and interact with various graphical representations like graphs and trees. It's especially useful during competitive programming contests for visualizing Graphs and Trees problem-solving strategies. Key features include customizable visualizations, real-time data updates, and the ability to download the generated visuals as PNG files.",
    technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Canvas API"],
    image: "/assets/graph.png",
    githubUrl: "https://github.com/parthDOOM/Lookatthisgraph",
    liveUrl: "https://lookatthisgraph.netlify.app/",
    featured: false
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car",
    description: "JavaScript simulation with custom neural network and genetic algorithm optimization.",
    fullDescription: "This self-driving car simulation, built with JavaScript, HTML, and CSS, features a custom three-level neural network coded entirely without external libraries. The network processes inputs and makes driving decisions, optimized using a genetic algorithm. Initially, a 25% mutation rate explores diverse configurations, which reduces to 10% as performance improves, refining the network for greater accuracy and stability. It also has Save and Discard options that allow tracking the most desirable runs and facilitate setting the mutation rate more efficiently.",
    technologies: ["JavaScript", "HTML", "CSS", "Neural Networks", "Genetic Algorithms"],
    image: "/assets/selfdrive.png",
    githubUrl: "https://github.com/parthDOOM/Self_Driving_Car.git",
    liveUrl: "https://selfdrv.netlify.app/",
    featured: false
  },
  {
    id: "dots-game",
    title: "Another Dots Game",
    description: "Simplified Agar.io-style game with strict collision detection and smooth controls.",
    fullDescription: "\"Another Dots Game\" is a simplified version of the popular \"Agar.io\" game, where you control a dot that must grow by eating smaller dots while avoiding being eaten by larger ones. The game features strict collision detection, meaning even the slightest touch from a bigger dot results in a loss. With smooth controls and an intuitive gameplay loop, the challenge lies in navigating through a grid filled with dangers as you strive to grow and survive.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Game Physics"],
    image: "/assets/dotsgame.png",
    githubUrl: "https://github.com/parthDOOM/anotherdotsgame",
    liveUrl: "https://anotherdotsgame.netlify.app/",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    title: "Data Scientist",
    company: "IndusInd Bank",
    location: "India",
    duration: "Jul 2026 – Present",
    description: [
      "Engineered scalable data pipelines to automate 30+ recurring internal audit reports and exception workflows, reducing manual data extraction time by over 20 hours per week.",
      "Architected a high-throughput transaction monitoring engine evaluating 1M+ daily banking records to flag money mule accounts, seamlessly integrating detection logic directly into the auditing backend.",
      "Programmed robust alerting and exception-handling services to monitor data anomalies across 500GB+ of daily financial logs, cutting incident response time by 40%."
    ],
    technologies: ["Python", "SQL", "Automation", "Data Pipelines"]
  },
  {
    title: "Software Engineering Intern",
    company: "TruEstate",
    location: "Bangalore, India",
    duration: "Jan 2026 – Jul 2026",
    description: [
      "Designed and deployed scalable cloud-native systems using GCP (Cloud Run, App Engine, Compute Engine, Cloud SQL, BigQuery, Cloud Scheduler, Pub/Sub, Cloud Tasks) for alldoors.in.",
      "Launched a high-performance property matching engine using vector embeddings and Qdrant, computing similarity scores across all listings to deliver intelligent match percentages for buyers.",
      "Architected an AI-powered email communication platform (custom-built email client replica) with prediction models and semantic analysis by integrating generative AI APIs, improving sales team efficiency."
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "GCP", "Qdrant", "PostgreSQL"]
  },
  {
    title: "Software Engineering Intern",
    company: "TCS R&I",
    location: "Hyderabad, India",
    duration: "May 2025 – Jul 2025",
    description: [
      "Designed a hybrid ingestion pipeline utilizing Python scripts for high-volume structured feeds (STIX/JSON) and a fine-tuned LLM to extract entities from unstructured vendor reports, processing 100,000+ events/day.",
      "Automated CIS benchmark checks across 50+ AWS resources using Python Lambda agents, identifying and mitigating 120+ security misconfigurations pre-deployment.",
      "Evaluated 10,000+ IAM access patterns using custom AI agents, leading to a 30% reduction in overly permissive policies."
    ],
    technologies: ["Python", "AWS", "LLMs", "Agentic Frameworks", "IAM"],
    certificateUrl: "/assets/2927832-Parthiv Jasoliya.pdf"
  },
  {
    title: "Software Engineering Intern",
    company: "Voxel Verse",
    location: "Hyderabad, India",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Architected a Stable Diffusion and PyTorch pipeline to generate 500+ 2D game assets per hour, seamlessly integrating colliders and rigid-body parameters into the game engine.",
      "Optimized the generation workflow by batching denoising steps and improving GPU utilization, reducing latency from 6.0s to 5.1s (15%) across a 1,000-asset benchmark while maintaining consistent visual fidelity.",
      "Enhanced environment pattern generation, increasing designer-approval rate from 72% to 79% through A/B testing"
    ],
    technologies: ["Python", "Diffusion Models", "GANs", "PyTorch", "Stable Diffusion"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Summer School 2024",
    description: "Selected from 100,000 applicants for Amazon Machine Learning Summer School 2024",
    date: "2024",
    category: "ml"
  },
  {
    title: "Meta Hacker Cup",
    description: "Global competitive programming contest. 2025: Round 3 (130th/500), Round 2 (156th/5,972 - Adv. to R3), Round 1 (705th/13,779 - Adv. to R2). 2024: Round 2 (2,583rd/5,000), Round 1 (581st/22,494 - Adv. to R2).",
    date: "2024 - 2025",
    category: "competition",
    certificates: [
      { label: "2025 Certificate", url: "/assets/MetaHackercup2025.pdf" },
      { label: "2024 Certificate", url: "/assets/MetaHackercup2024.pdf" }
    ]
  }
];

export const competitiveProgramming: CompetitiveProgramming[] = [
  {
    platform: "Codeforces",
    username: "Dark__Seith",
    rating: "Loading...",
    profileUrl: "https://codeforces.com/profile/Dark__Seith",
    icon: "/assets/codeforces-svgrepo-comm.svg"
  },
  {
    platform: "CodeChef",
    username: "parthivmj",
    rating: "Max: 2059 (5⭐)",
    profileUrl: "https://www.codechef.com/users/parthivmj",
    icon: "/assets/codechef-svgrepo-comm.svg"
  },
  {
    platform: "LeetCode",
    username: "parthDOOM",
    rating: "Max: 2409 (Guardian)",
    profileUrl: "https://leetcode.com/u/parthDOOM/",
    icon: "/assets/leetcode-svgrepo-comm.svg"
  }
];

export const contactInfo: ContactInfo = {
  email: "parthivmjasoliya31102@gmail.com",
  linkedin: "https://www.linkedin.com/in/parthiv-jasoliya-604946257/",
  github: "https://github.com/parthDOOM",
  codeforces: "https://codeforces.com/profile/Dark__Seith",
  codechef: "https://www.codechef.com/users/parthivmj",
  leetcode: "https://leetcode.com/u/parthDOOM/"
};
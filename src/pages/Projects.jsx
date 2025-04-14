import { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

// Main projects array with all project information
const projects = [
  {
    title: "AI Job Application Automation System",
    stack: ["FastAPI", "React (Tauri)", "PostgreSQL", "OpenAI", "Playwright"],
    description: [
      "Built an AI agent that automates job discovery, GPT resume tailoring, and job applications across global remote boards.",
      "Integrates PDF export, background schedulers, and an editable GPT prompt interface.",
      "Filters for roles with 3 years experience or less and prioritizes fields like Generative AI, MLOps, and Computational Biology."
    ],
    githubUrl: "https://github.com/brianbeadell/ai-job-agent",
    demoUrl: null
  },
  {
    title: "Quant Crypto Trading Bot",
    stack: ["Python", "PyQt6", "TensorFlow", "TA-Lib", "NLP"],
    description: [
      "Real-time trading system with custom dashboards, sentiment analysis via Reddit/Twitter, and ML model-driven buy/sell decisions.",
      "Uses TA indicators, deep learning, and NLP sentiment scoring for signal generation."
    ],
    githubUrl: "https://github.com/brianbeadell/crypto-trader",
    demoUrl: null
  },
  {
    title: "CryptoBot – ML-Powered Crypto Trading System",
    stack: ["Python", "TensorFlow", "LSTM", "CCXT", "Kraken API"],
    description: [
      "Developed an automated crypto trading bot using LSTM neural networks to predict price movements based on technical indicators.",
      "Executed trades across multiple crypto pairs (BTC/USD, ETH/USD, SOL/USD, etc.) via Kraken exchange integration (CCXT).",
      "Implemented advanced risk management systems including stop-loss, trailing stops, daily limits, and volatility-adjusted sizing.",
      "Integrated RSI, MACD, Bollinger Bands, and other indicators with ML-generated signals to trigger real-time trades.",
      "Secured API access with VPN checks and environment-based key storage; tracked performance with win/loss analytics and P&L logging."
    ],
    githubUrl: "https://github.com/brianbeadell/cryptobot",
    demoUrl: null
  },
  {
    title: "theFitness App – Full-Stack Fitness Tracker",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description: [
      "Secure fitness tracker with JWT auth, workout scheduling, and goal tracking.",
      "Features an exercise library with filtering, tagging, and intensity scaling, plus visual UI and responsive design."
    ],
    githubUrl: "https://github.com/brianbeadell/thefitness-app",
    demoUrl: "https://fitness-app-demo.vercel.app"
  },
  {
    title: "Geospatial Agricultural Analysis Tool",
    stack: ["Google Earth Engine", "JavaScript", "HTML/CSS"],
    description: [
      "Interactive mapping system for analyzing NDVI, biomass, temperature, and moisture from satellite imagery.",
      "Export tools, layer controls, polygon drawing, and data overlays tailored for ag/environmental science."
    ],
    githubUrl: "https://github.com/brianbeadell/geo-ag-analysis",
    demoUrl: null
  },
  {
    title: "WeatheReact – Weather & Soil Conditions App",
    stack: ["React", "Chart.js", "Open-Meteo API", "Google Maps"],
    description: [
      "Visual forecasting tool displaying 7-day weather and hourly soil metrics.",
      "Supports geo-autodetection, Google Places search, and soil depth-specific data for farmers/agronomists."
    ],
    githubUrl: "https://github.com/brianbeadell/weathereact",
    demoUrl: "https://weathereact-demo.vercel.app"
  },
  {
    title: "Farstar Agent – Multi-Modal AI Agent",
    stack: ["Python", "Whisper", "GPT-4", "Discord API"],
    description: [
      "Built a modular agent platform integrating voice input, multiple LLMs, DQN feedback learning, and Discord bot control.",
      "Supports OpenAI, Claude, Cohere, HuggingFace models with full configurability."
    ],
    githubUrl: "https://github.com/brianbeadell/farstar-agent",
    demoUrl: null
  },
  {
    title: "Apple Disease Identifier (CV Project)",
    stack: ["PyTorch", "EfficientNet", "Jupyter"],
    description: [
      "Fine-tuned a pre-trained model to classify apple leaf diseases with over 93% accuracy.",
      "Demonstrates practical application of transfer learning in agriculture."
    ],
    githubUrl: "https://github.com/brianbeadell/apple-disease-cv",
    demoUrl: null
  },
  {
    title: "Apple Disease Identifier – Web App Deployment",
    stack: ["Flask", "PyTorch", "EfficientNet", "HTML/CSS"],
    description: [
      "Developed a web-based image classification tool for detecting apple leaf diseases using a fine-tuned EfficientNet-B0 model.",
      "Enabled image upload via a Flask frontend, with instant prediction of Apple Scab, Black Rot, Cedar Rust, or Healthy status.",
      "Integrated backend ML logic using PyTorch with real-time inference via .pth model file.",
      "Used Torchvision + PIL for preprocessing and secure file handling via Werkzeug.",
      "Deployed as part of a professional portfolio site with resume, project highlights, and capstone project pages."
    ],
    githubUrl: "https://github.com/brianbeadell/apple-disease-web",
    demoUrl: "https://apple-disease-identifier.herokuapp.com"
  },
  {
    title: "Mushroom Classification System",
    stack: ["scikit-learn", "PCA", "RandomForest", "LogisticRegression"],
    description: [
      "Built a supervised learning system with perfect classification accuracy on full and PCA-reduced data.",
      "Demonstrated performance trade-offs and preprocessing optimizations."
    ],
    githubUrl: "https://github.com/brianbeadell/mushroom-classifier",
    demoUrl: null
  },
  {
    title: "SSA Recommendations Module",
    stack: ["Python", "Django", "Scientific Ag Formulas"],
    description: [
      "Auto-generates fertilizer recommendations from Soil Solution Analysis data.",
      "Supports both bulk/liquid formats, per-acre and per-1000 sqft output, integrated with lab import workflows."
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    title: "Automated Recommendations System (AutoRecs)",
    stack: ["Django", "Pandas", "Python"],
    description: [
      "Modular engine supporting Mehlich, Morgan, Digestible, and SSA test data.",
      "Real-time calculations, review workflows, and Django admin integration with full extensibility."
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    title: "Shopify Payment Integration",
    stack: ["Django", "Shopify API", "Webhooks"],
    description: [
      "Replaced legacy checkout with direct cart URL flow and webhook tracking.",
      "Redesigned UI for payment clarity, added secure token handling, and mapped Shopify orders to internal systems."
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    title: "DQN vs. Buy-and-Hold Financial Trading System",
    stack: ["Python", "Reinforcement Learning", "Yahoo Finance API"],
    description: [
      "Built a backtesting framework to compare a Deep Q-Network (DQN) trading agent against a traditional buy-and-hold strategy across stocks like AAPL, MSFT, GOOGL, AMZN, and META.",
      "Engineered RL logic to dynamically manage portfolio allocations based on market signals, tracking returns, Sharpe ratio, max drawdown, and trade frequency.",
      "Benchmarked performance against a passive strategy using real historical data and generated comprehensive visual and CSV-based reports.",
      "Delivered side-by-side plots and risk-adjusted performance comparisons to evaluate AI vs. conventional portfolio growth strategies."
    ],
    githubUrl: "https://github.com/brianbeadell/dqn-trading",
    demoUrl: null
  }
];

// Project categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'data', name: 'Data Engineering' },
  { id: 'web', name: 'Web Development' },
  { id: 'agriculture', name: 'Agriculture & GIS' },
  { id: 'finance', name: 'Finance & Trading' },
];

export default function Projects() {
  const projectsRef = useRef(null);

  // Animate projects on initial load
  useEffect(() => {
    const animateProjects = () => {
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add('animate-in');
        }, 100 * index);
      });
    };

    // Call animation after a short delay
    setTimeout(animateProjects, 300);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header section with parallax effect */}
      <div className="relative overflow-hidden bg-indigo-900 dark:bg-gray-800">
        <div className="absolute inset-0 opacity-30 bg-pattern-grid"></div>
        <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            <span className="inline-block transform transition-transform hover:scale-105 duration-300">
              <i className="fas fa-code-branch mr-4 text-indigo-300"></i>
              Projects Portfolio
            </span>
          </h1>
          <p className="text-xl text-center text-indigo-200 max-w-3xl mx-auto">
            A collection of AI, machine learning, data engineering, and full-stack development projects showcasing my technical capabilities and problem-solving approach.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-indigo-600 opacity-20 dark:opacity-10"></div>
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-purple-600 opacity-20 dark:opacity-10"></div>
      </div>

      {/* Projects grid */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" ref={projectsRef}>
        {/* Filter tabs (can be enhanced with actual filtering functionality) */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-5 py-2 rounded-full bg-white hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm transition-colors shadow-sm hover:shadow"
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card opacity-0 translate-y-4 transition-all duration-500">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-indigo-600 dark:bg-indigo-900 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-indigo-200 mb-8 max-w-3xl mx-auto">
            I'm currently available for remote roles in AI, ML Engineering, Data Science, and related fields.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:brianbeadell.udc@gmail.com" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-envelope mr-2"></i> Contact Me
            </a>
            <a 
              href="/Brian_Beadell_Resume.pdf" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-file-pdf mr-2"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom styling for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .bg-pattern-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}

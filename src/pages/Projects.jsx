const projects = [
  {
    title: "AI Job Application Automation System",
    stack: ["FastAPI", "React (Tauri)", "PostgreSQL", "OpenAI", "Playwright"],
    description: [
      "Built an AI agent that automates job discovery, GPT resume tailoring, and job applications across global remote boards.",
      "Integrates PDF export, background schedulers, and an editable GPT prompt interface.",
      "Filters for roles with 3 years experience or less and prioritizes fields like Generative AI, MLOps, and Computational Biology."
    ]
  },
  {
    title: "Quant Crypto Trading Bot",
    stack: ["Python", "PyQt6", "TensorFlow", "TA-Lib", "NLP"],
    description: [
      "Real-time trading system with custom dashboards, sentiment analysis via Reddit/Twitter, and ML model-driven buy/sell decisions.",
      "Uses TA indicators, deep learning, and NLP sentiment scoring for signal generation."
    ]
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
    ]
  },
  {
    title: "theFitness App – Full-Stack Fitness Tracker",
    stack: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    description: [
      "Secure fitness tracker with JWT auth, workout scheduling, and goal tracking.",
      "Features an exercise library with filtering, tagging, and intensity scaling, plus visual UI and responsive design."
    ]
  },
  {
    title: "Geospatial Agricultural Analysis Tool",
    stack: ["Google Earth Engine", "JavaScript", "HTML/CSS"],
    description: [
      "Interactive mapping system for analyzing NDVI, biomass, temperature, and moisture from satellite imagery.",
      "Export tools, layer controls, polygon drawing, and data overlays tailored for ag/environmental science."
    ]
  },
  {
    title: "WeatheReact – Weather & Soil Conditions App",
    stack: ["React", "Chart.js", "Open-Meteo API", "Google Maps"],
    description: [
      "Visual forecasting tool displaying 7-day weather and hourly soil metrics.",
      "Supports geo-autodetection, Google Places search, and soil depth-specific data for farmers/agronomists."
    ]
  },
  {
    title: "Farstar Agent – Multi-Modal AI Agent",
    stack: ["Python", "Whisper", "GPT-4", "Discord API", "Reinforcement Learning"],
    description: [
      "Built a modular agent platform integrating voice input, multiple LLMs, DQN feedback learning, and Discord bot control.",
      "Supports OpenAI, Claude, Cohere, HuggingFace models with full configurability."
    ]
  },
  {
    title: "Apple Disease Identifier (CV Project)",
    stack: ["PyTorch", "EfficientNet", "Jupyter"],
    description: [
      "Fine-tuned a pre-trained model to classify apple leaf diseases with over 93% accuracy.",
      "Demonstrates practical application of transfer learning in agriculture."
    ]
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
    ]
  },
  {
    title: "Mushroom Classification System",
    stack: ["scikit-learn", "PCA", "RandomForest", "LogisticRegression"],
    description: [
      "Built a supervised learning system with perfect classification accuracy on full and PCA-reduced data.",
      "Demonstrated performance trade-offs and preprocessing optimizations."
    ]
  },
  {
    title: "SSA Recommendations Module",
    stack: ["Python", "Django", "Scientific Ag Formulas"],
    description: [
      "Auto-generates fertilizer recommendations from Soil Solution Analysis data.",
      "Supports both bulk/liquid formats, per-acre and per-1000 sqft output, integrated with lab import workflows."
    ]
  },
  {
    title: "Automated Recommendations System (AutoRecs)",
    stack: ["Django", "Pandas", "Multi-Test Soil Analysis Engine"],
    description: [
      "Modular engine supporting Mehlich, Morgan, Digestible, and SSA test data.",
      "Real-time calculations, review workflows, and Django admin integration with full extensibility."
    ]
  },
  {
    title: "Shopify Payment Integration",
    stack: ["Django", "Shopify API", "Webhooks"],
    description: [
      "Replaced legacy checkout with direct cart URL flow and webhook tracking.",
      "Redesigned UI for payment clarity, added secure token handling, and mapped Shopify orders to internal systems."
    ]
  },
  {
    title: "DQN vs. Buy-and-Hold Financial Trading System",
    stack: ["Reinforcement Learning", "Python", "Yahoo Finance API"],
    description: [
      "Built a backtesting framework to compare a Deep Q-Network (DQN) trading agent against a traditional buy-and-hold strategy across stocks like AAPL, MSFT, GOOGL, AMZN, and META.",
      "Engineered RL logic to dynamically manage portfolio allocations based on market signals, tracking returns, Sharpe ratio, max drawdown, and trade frequency.",
      "Benchmarked performance against a passive strategy using real historical data and generated comprehensive visual and CSV-based reports.",
      "Delivered side-by-side plots and risk-adjusted performance comparisons to evaluate AI vs. conventional portfolio growth strategies."
    ]
  }
];

export default function Projects() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{proj.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.stack.map((tech, techIdx) => (
                <span key={techIdx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {proj.description.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

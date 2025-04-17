import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

// Main projects array with all project information
const projects = [
  {
    title: "Financial AI Agent System",
    stack: ["Python", "Phi Framework", "LLaMA 30B", "Groq API", "YFinance"],
    description: [
      "Developed an AI agent system leveraging the Phi framework to perform advanced financial analysis on stock market data.",
      "Implemented three specialized agents: Market Agent for real-time stock analysis, Congress Agent for tracking political trading, and Multi AI Agent for comprehensive insights.",
      "Utilized Groq API with LLaMA 30B for intelligent data processing and pattern recognition across market indicators and congressional trading behavior."
    ],
    githubUrl: "https://github.com/brianbeadell/financial-ai-agent",
    demoUrl: null,
    longDescription: "This system leverages AI agents built with the Phi framework to perform advanced financial analysis. It combines stock market data, technical indicators, and congressional trading behavior into a unified platform. The core models are powered by Groq API using the LLaMA 30B language model for intelligent data processing and summarization.",
    features: [
      "Market Agent for gathering and analyzing real-time data on top moving stocks",
      "Congress Agent for tracking and analyzing congressional trading activity",
      "Multi AI Agent that combines data from both agents for comprehensive analysis",
      "Pattern highlighting using AI heuristics to flag unusual or impactful trends",
      "Tabular reports with ranking, summaries, and signal strength indicators"
    ],
    learnings: "System Components:\n- Market Agent: Gathers and analyzes top moving stocks, pulls real-time data from YFinance including price history, analyst recommendations, and technical indicators (RSI, MACD, etc.), and highlights trends and anomalies in individual tickers and sectors\n- Congress Agent: Tracks congressional trading activity by public officials, uses DuckDuckGo for real-time searches on recent trades, cross-references trades with YFinance data to evaluate patterns and possible influence on stock movement, and flags politically motivated trades or high-volume timing events\n- Multi AI Agent: Combines both the Market Agent and Congress Agent into a single analysis pipeline, generates comprehensive, AI-driven summaries that capture overall market sentiment, technical and fundamental signals, and legislative trading activity relevance\n\nTech Stack & Key Features:\n- Phi Framework for modular agent orchestration and logic control\n- Groq API + LLaMA 30B for natural language processing and summarization\n- YFinance for market data, analyst insights, and price tracking\n- DuckDuckGo Search API for gathering public disclosures and news on congressional trades\n- Tabular Reports with ranking, summaries, and signal strength indicators\n- Pattern Highlighting using AI heuristics to flag unusual or impactful trends\n\nUse Cases:\n- Quantitative & qualitative stock market analysis\n- Insider trading detection via public records\n- Political economy research\n- Trading decision support"
  },
  {
    title: "Grizzle - Advanced AI Assistant",
    stack: ["Python", "Hugging Face", "GPT-4", "PyTorch", "Speech Recognition"],
    description: [
      "Developed an advanced AI assistant combining NLP, reinforcement learning, and multi-modal interfaces for personalized interactions.",
      "Implemented voice and text-based communication with reinforcement learning that adapts to user feedback.",
      "Created a comprehensive memory system that maintains context across sessions for more natural conversations."
    ],
    githubUrl: "https://github.com/brianbeadell/grizzle-ai-assistant",
    demoUrl: null,
    longDescription: "Grizzle is an advanced AI assistant system that combines natural language processing, reinforcement learning, and multi-modal interfaces to create an interactive, personalized digital agent. The system integrates voice and text-based communication, learns from user interactions, and adapts over time to become more helpful, emotionally intelligent, and context-aware.",
    features: [
      "Natural language understanding using Hugging Face Transformers",
      "Generative intelligence through OpenAI's GPT-4 with adaptive response style",
      "Voice interface supporting both voice input and output for spoken conversations",
      "Multi-modal interaction with plans for image and document input integration",
      "Memory system that maintains short-term context and long-term memory across sessions",
      "Reinforcement learning using Advantage Actor-Critic (A2C) algorithm to optimize responses",
      "Sentiment and emotion analysis to adjust responses based on user mood"
    ],
    learnings: "Core Capabilities:\n- Natural Language Understanding: Utilizes Hugging Face Transformers for robust language comprehension, semantic analysis, intent detection, and contextual embedding\n- Generative Intelligence: Integrates OpenAI's GPT-4 to generate human-like responses with adaptive style based on user profiles\n- Voice Interface: Supports both voice input and output using speech recognition and TTS for real-time interaction\n- Multi-Modal Interaction: Planned integration with image and document input for learning from uploaded files\n- Memory System: Maintains context across sessions using an embedding-based knowledge manager\n- Reinforcement Learning: Implements A2C algorithm to learn optimal response strategies based on feedback\n- Sentiment Analysis: Analyzes emotional tone and adjusts responses accordingly\n\nFunctional Modules:\n- Task & Reminder System for managing user-defined tasks and schedules\n- Document Learning for parsing uploaded PDFs or documents\n- Personality Configuration for adjusting response tone and style\n- Knowledge Base Control for user curation of the assistant's internal knowledge\n\nTech Stack:\n- transformers (Hugging Face)\n- openai GPT API\n- speech_recognition, pyttsx3, whisper, or ElevenLabs for voice I/O\n- pytorch or tensorflow for reinforcement learning\n- sqlite, pinecone, faiss, or similar for memory embedding"
  },
  {
    title: "DQN Reinforcement Learning Trading Agent",
    stack: ["PyTorch", "Pandas", "NumPy", "Matplotlib", "yfinance"],
    description: [
      "Developed a Deep Q-Network (DQN) reinforcement learning agent for algorithmic stock trading that outperforms traditional buy-and-hold strategies.",
      "Implemented backtest comparison with equal-weighted portfolios, tracking actions, rewards, and performance metrics.",
      "Created visualization tools for time-series and bar comparisons with comprehensive metric outputs (returns, drawdowns, Sharpe ratio)."
    ],
    githubUrl: "https://github.com/brianbeadell/dqn-trading-agent",
    demoUrl: null,
    longDescription: "This project evaluates a Deep Q-Network (DQN) reinforcement learning agent against a traditional buy-and-hold strategy for stock trading. The system simulates trading using a financial environment and benchmarks performance metrics between the strategies.",
    features: [
      "DQN agent implementation with pre-trained model loading capabilities",
      "Trading simulation in a custom financial environment",
      "Performance tracking including total return, drawdown, and Sharpe ratio calculations",
      "Equal-weighted buy-and-hold benchmark strategy using yfinance data",
      "Visualization tools for comparing strategy performance with time-series and bar charts"
    ],
    learnings: "Core Components:\n- backtest_dqn_agent(): Loads a pre-trained DQN model, simulates trading using a financial environment, tracks actions/rewards/portfolio value, and calculates performance metrics\n- get_buy_and_hold_performance(): Downloads stock data using yfinance, applies equal-weighted buy-and-hold strategy, and calculates the same performance metrics\n- plot_comparison(): Plots time-series and bar comparison of both strategies with options to save or display results\n- main(): Coordinates strategy execution, handles directory creation and file exports, and outputs CSVs and summary comparisons\n\nTechnical Implementation:\n- PyTorch for implementing and loading the neural network architecture\n- Custom reinforcement learning environment designed for financial data\n- Performance calculation logic for real-world trading metrics\n- Data pipeline for historical stock information processing\n- Visualization system for multi-faceted strategy comparisons"
  },
  {
    title: "AI Job Application Automation System",
    stack: ["FastAPI", "React (Tauri)", "PostgreSQL", "OpenAI", "Playwright"],
    description: [
      "Built an AI agent that automates job discovery, GPT resume tailoring, and job applications across global remote boards.",
      "Integrates PDF export, background schedulers, and an editable GPT prompt interface.",
      "Filters for roles with 3 years experience or less and prioritizes fields like Generative AI, MLOps, and Computational Biology."
    ],
    githubUrl: "https://github.com/brianbeadell/ai-job-agent",
    demoUrl: null,
    longDescription: "I developed this tool to streamline my job search process by creating an end-to-end automation system. The application uses GPT-4 to analyze job postings, customize resumes, and auto-fill application forms, significantly reducing application time from 30 minutes to about 2 minutes per application.",
    features: [
      "Intelligent job scraping from multiple platforms using Playwright",
      "Resume tailoring with GPT-4 based on job description analysis",
      "Automatic form filling and application submission",
      "PostgreSQL database for tracking applications and status",
      "Customizable GPT prompt templates for different job types"
    ],
    learnings: "This project taught me about the challenges of web automation with varying site structures, the importance of rate limiting when interacting with APIs, and methods for optimizing large language model prompts for consistent results."
  },
  {
    title: "Quant Crypto Trading Bot",
    stack: ["Python", "PyQt6", "TensorFlow", "TA-Lib", "NLP"],
    description: [
      "Real-time trading system with custom dashboards, sentiment analysis via Reddit/Twitter, and ML model-driven buy/sell decisions.",
      "Uses TA indicators, deep learning, and NLP sentiment scoring for signal generation."
    ],
    githubUrl: "https://github.com/brianbeadell/crypto-trader",
    demoUrl: null,
    longDescription: "This cryptocurrency trading bot combines technical analysis, machine learning, and sentiment analysis to make data-driven trading decisions. It uses a desktop dashboard built with PyQt6 to visualize market data, display trading signals, and execute trades across multiple cryptocurrency pairs.",
    features: [
      "Real-time price data visualization with interactive charts",
      "Sentiment analysis of social media (Reddit) and news sources",
      "Machine learning models for price prediction using LSTM networks",
      "Technical indicator-based signal generation (RSI, MACD, Bollinger Bands)",
      "Automated trade execution with risk management features"
    ],
    learnings: "Languages:\n- Python (primary language)\n\nFrameworks and Libraries:\n- UI/Dashboard: PyQt6 (Qt framework for Python), pyqtgraph (for plotting and visualization)\n- API and Data Access: ccxt (for cryptocurrency exchange APIs), requests (for HTTP API calls), Alpha Vantage API (for market data)\n- Data Processing: pandas (for data manipulation), numpy (for calculations), TA-Lib (technical indicators like RSI, MACD)\n- Machine Learning: TensorFlow/Keras (for deep learning), scikit-learn (for random forest models), joblib (for model serialization)\n- Natural Language Processing: NLTK, VADER (for sentiment analysis), TextBlob (text processing), BeautifulSoup (HTML parsing)\n\nArchitecture:\nThe system is built with a modular architecture using Python classes, with Qt components providing an interactive dashboard that displays market data, sentiment analysis, and trading signals."
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
    demoUrl: null,
    longDescription: "The CryptoBot is an automated cryptocurrency trading system that uses machine learning for price prediction and trade execution. It continuously monitors cryptocurrency markets, analyzes price data using LSTM neural networks, and automatically executes trades based on ML predictions with comprehensive risk management.",
    features: [
      "Automated trading across multiple cryptocurrency pairs (BTC/USD, ETH/USD, SOL/USD, etc.)",
      "LSTM neural networks for price movement prediction based on technical indicators",
      "Advanced risk management with stop-loss, trailing stops, and volatility-based position sizing",
      "Performance tracking with win/loss ratio, accuracy, drawdown, and P&L metrics",
      "API integration with Kraken exchange through CCXT, with security features and VPN verification"
    ],
    learnings: "Core Features:\n- Automated Trading: Continuously monitors markets, analyzes price data, and executes trades based on ML predictions\n- Machine Learning Model: Sequential neural network with LSTM layers to predict price movements from technical indicators\n- Multi-Pair Support: Trades BTC/USD, ETH/USD, SOL/USD, DOGE/USD, ADA/USD, DOT/USD, LINK/USD, MATIC/USD, and AVAX/USD\n- Risk Management: Stop-loss orders, maximum position sizing, daily trade limits, trailing stops, volatility-based position sizing\n- Security Features: VPN connection verification, secure API credential storage, secure trading environment\n\nTechnical Implementation:\n- TensorFlow/Keras for deep learning models with LSTM architecture\n- CCXT library for unified exchange API integration\n- pandas-TA for technical indicators and feature engineering\n- Custom loss function optimized for directional accuracy\n- Signal generation combining ML predictions with technical indicators\n\nArchitecture:\n- Main controller module for trade execution and monitoring\n- Strategy modules for signal generation and analysis\n- Risk management system with position sizing and stop management\n- Data processing pipeline for feature engineering\n- Performance tracking and analytics system"
  },
  {
    title: "theFitness App – Full-Stack Fitness Tracker",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description: [
      "Designed and built a full-stack fitness tracking application using MongoDB, Express, React, and Node.js.",
      "Implemented JWT-based authentication, profile management, and secure CRUD operations for exercises and workouts.",
      "Created a dynamic exercise library with filters by type, intensity, and duration; integrated visual color coding for clarity.",
      "Developed custom workout scheduling, progress tracking, and responsive mobile-first UI using React Bootstrap."
    ],
    githubUrl: "https://github.com/brianbeadell/thefitness-app",
    demoUrl: null,
    longDescription: "theFitness is a comprehensive fitness tracking application built using the MERN stack (MongoDB, Express, React, Node.js). The application enables users to create and manage their own exercise library, build custom workouts, track progress over time, and manage their fitness journey in a personalized, secure environment.",
    features: [
      "Secure user authentication system with JWT and profile management",
      "Dynamic exercise library with type-based filtering and color-coded categories",
      "Custom workout builder with scheduling and progress tracking",
      "Mobile-first responsive UI with React Bootstrap",
      "Complete data privacy with user-specific isolation in MongoDB"
    ],
    learnings: "Core Features:\n- User Authentication System: Secure login and registration, JWT authentication, profile management with personal goals and information\n- Exercise Library: Create, view, edit, and delete exercises, categorize by type (strength, cardio, flexibility, balance, endurance), set parameters (duration, intensity), filter with color-coded categories\n- Workout Management: Create custom workouts by combining exercises, add details like sets/reps/weight/duration/intensity, schedule workouts for specific dates, track progress, add notes\n\nTechnical Architecture:\n- Frontend (React): Components with React Router, React Bootstrap for responsive UI, state management using hooks, Axios for API requests, form handling\n- Backend (Node.js/Express): RESTful API architecture, Express.js for routing and middleware, JWT-based authentication and route protection, CRUD operations for workouts/exercises/profiles\n- Database (MongoDB): Stores user accounts, exercises, workouts, and progress data, relationships between collections, user-specific data isolation\n\nDesign Elements:\n- Color-coded exercise types and intensity levels for visual clarity\n- Card-based UI for exercises and workouts\n- Modal forms for creating and editing\n- Responsive design for mobile and desktop compatibility"
  },
  {
    title: "Geospatial Agricultural Analysis Tool",
    stack: ["Google Earth Engine", "JavaScript", "HTML/CSS"],
    description: [
      "Developed an interactive web application for visualizing and analyzing satellite imagery using Google Earth Engine.",
      "Implemented tools for NDVI, biomass estimation, temperature, precipitation, soil moisture, and elevation analysis.",
      "Enabled polygon drawing, area/distance measurements, date range selection, and export to GeoJSON, KML, or Shapefile.",
      "Designed visual overlays with color-coded maps and interactive legends to interpret crop health and climate patterns."
    ],
    githubUrl: "https://github.com/brianbeadell/geo-ag-analysis",
    demoUrl: null,
    longDescription: "This interactive web application leverages Google Earth Engine to enable farmers, environmental scientists, and land managers to make informed decisions based on Earth observation data. The platform provides a comprehensive suite of tools for analyzing various aspects of agricultural and environmental conditions through satellite imagery.",
    features: [
      "Interactive satellite imagery analysis with customizable date ranges",
      "NDVI, biomass estimation, temperature, precipitation, soil moisture, and elevation analysis tools",
      "Polygon drawing tools for area selection and analysis of specific fields",
      "Area and distance measurement capabilities for precision agriculture",
      "Data export functionality to GeoJSON, KML, or Shapefile formats"
    ],
    learnings: "Technical Implementation:\n- Google Earth Engine JavaScript API for satellite data access and analysis\n- Custom map overlays with interactive legends for data interpretation\n- Time-series analysis with Landsat, Sentinel, and MODIS imagery\n- Integration of multiple data sources including climate, soil, and vegetation indices\n- User interface design optimized for field usage by non-technical users\n\nKey Features:\n- Vegetation health tracking through NDVI visualization over time\n- Climate pattern analysis with historical temperature and precipitation data\n- Soil moisture monitoring for irrigation planning and drought assessment\n- Biomass estimation tools for yield prediction and crop monitoring\n- Elevation analysis for water flow and erosion risk assessment\n\nUser Applications:\n- Precision agriculture planning and monitoring\n- Environmental impact assessments\n- Climate change adaptation strategy development\n- Land use planning and management\n- Agricultural research and education"
  },
  {
    title: "WeatheReact – Weather & Soil Conditions App",
    stack: ["React", "Chart.js", "Open-Meteo API", "Google Maps"],
    description: [
      "Visual forecasting tool displaying 7-day weather and hourly soil metrics.",
      "Supports geo-autodetection, Google Places search, and soil depth-specific data for farmers/agronomists."
    ],
    githubUrl: "https://github.com/brianbeadell/weathereact",
    demoUrl: "https://weathereact-demo.vercel.app",
    longDescription: "WeatheReact is a React-based web application designed to provide detailed weather and soil information for agricultural purposes. Part of a larger agricultural platform, it delivers location-specific weather data and soil metrics that are crucial for farming decisions.",
    features: [
      "Location-based weather forecasting with automatic location detection and manual search",
      "Current weather display showing temperature, precipitation, wind speed, and soil conditions",
      "7-day forecast with daily weather summaries and interactive day selection",
      "Detailed hourly charts for temperature, precipitation, soil temperature, and moisture",
      "Agricultural focus with multiple soil depth measurements and farming-specific data"
    ],
    learnings: "Core Features:\n- Location-Based Weather Forecasting: Automatically detects user's location on initial load, allows manual location search with Google Places Autocomplete, displays current weather conditions with detailed metrics\n- Current Weather Display: Temperature (°F), precipitation chance (%), wind speed (mph), soil temperature (°F), soil moisture (%), weather condition icons based on weather codes\n- 7-Day Forecast: Daily weather summary for the next 7 days, min/max temperature ranges, precipitation amount, maximum wind speed, soil temperature and moisture ranges, interactive cards to select specific days\n- Detailed Hourly Charts: Temperature chart (line graph), precipitation probability chart (bar graph), soil temperature and moisture charts (line graphs), shows hourly data from 5AM to 4AM (24-hour period)\n- Agricultural Focus: Special emphasis on soil metrics useful for farming, multiple soil depth measurements, integration with a larger agricultural platform\n\nTechnical Implementation:\n- APIs Used: TimezoneDB API (for timezone information), Open-Meteo API (for weather and soil data), Google Maps/Places API (for location search)\n- Libraries: React 17.0.2, Chart.js and react-chartjs-2 (for data visualization), react-places-autocomplete (for location search), react-router-dom (for navigation)\n- Data Visualization: Line charts for temperature and soil metrics, bar charts for precipitation data, interactive elements for day selection\n\nIntegration:\n- Integrated into a larger agricultural platform with crop management, field management, reporting tools, and agronomic recommendations\n- Serves as a weather/soil conditions tool to help farmers make decisions based on current and forecasted conditions"
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
    demoUrl: "https://apple-disease-identifier.herokuapp.com",
    longDescription: "This project uses deep learning to identify diseases in apple leaf images, with a Flask web interface for real-time classification. The underlying model is an EfficientNet-b0 architecture that's been fine-tuned to classify apple leaves into four categories: Apple Scab, Black Rot, Cedar Apple Rust, or Healthy status.",
    features: [
      "Image upload and processing with instant disease classification",
      "Fine-tuned EfficientNet-B0 model with over 93% accuracy",
      "Responsive web interface built with Flask and modern CSS",
      "Real-time inference pipeline with preprocessing transformations",
      "Support for various image formats with detailed prediction results"
    ],
    learnings: "Model Development:\n- Data Exploration: Analyzed a dataset of apple leaf images organized in train, validation, and test sets using PyTorch's ImageFolder and provided visualizations of the dataset distribution\n- Model Architecture: Used an EfficientNet-b0 pre-trained model fine-tuned for apple disease detection with modified classification layer\n- Data Preprocessing: Implemented image resizing, normalization and augmentation pipeline for improved performance\n- Training Process: Used Adam optimizer and CrossEntropyLoss with proper validation monitoring\n- Performance Evaluation: Achieved over 93% accuracy on validation data\n\nWeb Application:\n- Flask Integration: Built web server with proper routing and file handling\n- Model Loading: Integrated PyTorch model into web application with optimized inference\n- Image Processing: Set up Torchvision transforms pipeline matching the training process\n- User Interface: Designed intuitive upload interface with clear result presentation\n- Deployment: Containerized application deployed to Heroku cloud platform"
  },
  {
    title: "Mushroom Classification System",
    stack: ["scikit-learn", "PCA", "RandomForest", "LogisticRegression"],
    description: [
      "Built a supervised learning system with perfect classification accuracy on full and PCA-reduced data.",
      "Demonstrated performance trade-offs and preprocessing optimizations."
    ],
    githubUrl: "https://github.com/brianbeadell/mushroom-classifier",
    demoUrl: null,
    longDescription: "This project is a mushroom classification system that predicts whether mushrooms are edible or poisonous based on their physical characteristics. It demonstrates the trade-offs between model performance, dimensionality reduction, and computational efficiency in machine learning classification tasks.",
    features: [
      "Perfect classification accuracy using RandomForest and LogisticRegression models",
      "Principal Component Analysis (PCA) for dimensionality reduction",
      "KNN imputation for handling missing values in the dataset",
      "Comprehensive evaluation metrics including accuracy, precision, and recall",
      "Performance comparison between full-feature and PCA-reduced models"
    ],
    learnings: "Data Preprocessing:\n- Handled missing values, particularly in the \"stalk-root\" feature, using KNN imputation\n- Encoded categorical variables using OneHotEncoder for features and LabelEncoder for the target variable\n\nModels Used:\n- RandomForestClassifier\n- LogisticRegression\n\nFeature Engineering:\n- Applied Principal Component Analysis (PCA) to reduce dimensionality\n- Reduced the feature space by ~65.5% while preserving 95% of the variance\n\nEvaluation Metrics:\n- Accuracy, precision, and recall measurements\n- Training time comparison between models\n\nKey Results:\n- Both RandomForest and LogisticRegression achieved perfect scores (1.0) on the full dataset\n- With PCA-reduced data, RandomForest maintained perfect scores while LogisticRegression showed slight degradation\n- LogisticRegression was faster with the PCA-reduced dataset, while RandomForest was actually slower"
  },
  {
    title: "SSA Recommendations Module",
    stack: ["Python", "Django", "Scientific Ag Formulas"],
    description: [
      "Auto-generates fertilizer recommendations from Soil Solution Analysis data.",
      "Supports both bulk/liquid formats, per-acre and per-1000 sqft output, integrated with lab import workflows."
    ],
    githubUrl: null,
    demoUrl: null,
    longDescription: "This module is a specialized system for automatically generating soil amendment recommendations based on Soil Solution Analysis (SSA) test results. It transforms soil test values into practical amendment quantities, making it easy for growers to understand exactly what they need to apply to their soil based on scientific soil test results.",
    features: [
      "Formula-based calculation of both solid/granular and liquid amendments",
      "Conversion between per-acre (commercial) and per-1000sqft (residential) recommendations",
      "Seamless integration with Django models and existing lab import workflow",
      "Human-readable formatted output and JSON export options",
      "Command-line utilities for batch processing and report generation"
    ],
    learnings: "Core Components:\n- ssa_recommendations.py: Contains the core calculation functions including calculate_bulk_applications(), calculate_liquid_applications(), convert_to_per_1000sqft(), extract_ssa_data(), and calculate_ssa_recommendations()\n- integration.py: Connects the recommendation system with Django through process_ssa_report_recommendations(), process_imported_reports(), and process_ssa_after_import()\n- management_command.py: Provides command-line utilities with format_recommendations() and generate_recommendations()\n- debug_helper.py: Utility for debugging that enables relative imports when running files directly\n\nFeatures & Implementation:\n- Integration with Django models: Reads soil test data from SoilSolutionAnalysis model and works with existing data structures\n- Formula-based recommendations: Provides precise calculations for amendment quantities and handles multiple amendment types\n- Output formats: Per-acre recommendations for commercial applications, per-1000sqft conversions for smaller applications\n- Debugging support: Helper module makes testing and development easier\n\nPrimary Use Cases:\n- Automating recommendations after importing lab test results\n- Generating recommendations on demand for specific soil tests\n- Batch processing multiple reports\n- Command-line report generation"
  },
  {
    title: "Automated Recommendations System (AutoRecs)",
    stack: ["Django", "Pandas", "Python"],
    description: [
      "Modular engine supporting Mehlich, Morgan, Digestible, and SSA test data.",
      "Real-time calculations, review workflows, and Django admin integration with full extensibility."
    ],
    githubUrl: null,
    demoUrl: null,
    longDescription: "AutoRecs is a comprehensive system for generating automated soil nutrient recommendations based on various soil analysis types. The system translates complex soil test data into actionable recommendations for growers, saving time and improving accuracy compared to manual calculations.",
    features: [
      "Support for multiple soil test methods (Mehlich, Morgan, Digestible, SSA)",
      "Complete recommendations that combine data from multiple test types",
      "Django integration with review workflow and detailed views",
      "Different output formats including weekly/monthly rates and units",
      "Robust error handling and extensible architecture"
    ],
    learnings: "Core Recommendation Generators:\n- complete_recommendation.py: Processes multiple fieldsets to generate comprehensive soil nutrient recommendations, combines data from water, mehlich, morgan, and digestible analyses\n- digestible_recommendations.py: Focuses specifically on digestible nutrient analyses with specialized recommendations\n- mehlich_recommendations.py: Specialized for the Mehlich extraction method with specific amendment calculations\n- morgan_recommendations.py: Specialized for the Morgan extraction method with adjusted formulas\n\nSupporting Structure:\n- Django Integration: apps.py, models.py, signals.py, urls.py, views.py for complete web framework integration\n- Testing Framework: tests/ directory containing comprehensive test coverage\n- Utilities: utils/ directory with helper functions and common code\n- Templates: HTML templates for displaying recommendations\n- Management Commands: Django management commands for CLI operations\n\nImplementation Details:\n- Calculation Logic: Each module uses calibrated formulas to convert soil test values to application rates\n- Data Handling: Uses Pandas DataFrames for structured data manipulation with consistent formatting\n- Integration Points: Django signals trigger recommendation generation when new soil tests are imported\n- Error Management: Robust exception handling with empty DataFrame returns to prevent crashes\n- Extensibility: Modular approach for adding new recommendation types with standardized outputs"
  },
  {
    title: "Shopify Payment Integration",
    stack: ["Django", "Shopify API", "Webhooks"],
    description: [
      "Replaced legacy checkout with direct cart URL flow and webhook tracking.",
      "Redesigned UI for payment clarity, added secure token handling, and mapped Shopify orders to internal systems."
    ],
    githubUrl: null,
    demoUrl: null,
    longDescription: "This project involved integrating a Django-based agricultural analysis system with Shopify's e-commerce platform to provide a seamless payment experience for bulk report orders. The implementation replaced a legacy payment system with a more reliable direct cart URL approach and webhook-based order tracking.",
    features: [
      "Direct cart URL generation for streamlined checkout process",
      "Secure webhook handling for order status synchronization",
      "Comprehensive settings configuration for Shopify API credentials",
      "Redesigned payment UI with improved user experience",
      "Robust error handling and logging throughout the integration"
    ],
    learnings: "Implementation Details:\n- Created and improved the checkout method: Implemented the `create_shopify_checkout` method in `paymentviews_bulk.py` that generates a direct cart URL\n- Simplified the URL structure to `https://shop.apical-ag.com/cart/{variant_id}:1` for reliability\n\nConfiguration:\n- Created `shopify_settings.py` with environment variables for API credentials\n- Configured shop URL, API version, and access scope settings\n- Implemented helper methods for authentication and API connectivity\n\nWebhook System:\n- Created `shopify_webhook.py` to process incoming order notifications\n- Implemented verification of webhook signatures for security\n- Set up handlers to match Shopify orders with internal bulk report orders\n\nUI Improvements:\n- Completely redesigned `shopify_bulk_payment.html` with a cleaner layout\n- Improved the user experience with better organization of payment options\n- Added a \"Report Summary\" button for better navigation\n- Made the UI more responsive and user-friendly\n\nChallenges Overcome:\n- Shifted from using the Checkout API (which required merchant approval) to a simpler cart URL approach\n- Fixed import issues with proper module paths\n- Corrected function naming from `can_pay_with_unit_credits` to `can_bulk_pay_with_unit_credits`\n- Improved error handling and logging throughout the integration"
  },
];

const Projects = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [robotPosition, setRobotPosition] = useState({ x: 20, y: 100 });
  const [robotDirection, setRobotDirection] = useState(1); // 1 for right, -1 for left
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'All Projects') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => {
        // Match projects to categories based on their stack and title
        const projectText = [
          project.title, 
          ...project.stack, 
          ...(project.description || []),
          project.longDescription || ''
        ].join(' ').toLowerCase();
        
        switch(activeCategory) {
          case 'AI & ML':
            return projectText.includes('ai') || 
                   projectText.includes('ml') || 
                   projectText.includes('machine learning') || 
                   projectText.includes('neural') || 
                   projectText.includes('tensorflow') || 
                   projectText.includes('pytorch') ||
                   projectText.includes('gpt') ||
                   projectText.includes('openai');
          case 'Data Science':
            return projectText.includes('data') || 
                   projectText.includes('analytics') || 
                   projectText.includes('pandas') || 
                   projectText.includes('scikit') ||
                   projectText.includes('statistics');
          case 'Web Dev':
            return projectText.includes('react') || 
                   projectText.includes('web') || 
                   projectText.includes('html') || 
                   projectText.includes('css') ||
                   projectText.includes('javascript') ||
                   projectText.includes('node') ||
                   projectText.includes('express');
          case 'Agriculture':
            return projectText.includes('agriculture') || 
                   projectText.includes('soil') || 
                   projectText.includes('farm') || 
                   projectText.includes('crop') ||
                   projectText.includes('plant') ||
                   projectText.includes('disease detection');
          case 'Finance':
            return projectText.includes('finance') || 
                   projectText.includes('trading') || 
                   projectText.includes('crypto') ||
                   projectText.includes('bot');
          default:
            return true;
        }
      });
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  // Robot animation
  useEffect(() => {
    const moveRobot = () => {
      setRobotPosition(prev => {
        // Calculate new position
        let newX = prev.x + (2 * robotDirection);
        let newY = prev.y;
        
        // Change direction if robot reaches edge of screen
        if (newX > window.innerWidth - 60) {
          setRobotDirection(-1);
          newX = window.innerWidth - 60;
        } else if (newX < 20) {
          setRobotDirection(1);
          newX = 20;
        }
        
        // Occasionally make the robot jump
        if (Math.random() < 0.02) {
          newY = prev.y - 5;
          setTimeout(() => {
            setRobotPosition(current => ({ ...current, y: current.y + 5 }));
          }, 300);
        }
        
        return { x: newX, y: newY };
      });
    };
    
    const robotInterval = setInterval(moveRobot, 50);
    return () => clearInterval(robotInterval);
  }, [robotDirection]);

  // Original animations for page elements
  useEffect(() => {
    const animateElements = () => {
      // Animate header
      if (headerRef.current) {
        headerRef.current.classList.add('animate-in');
      }
      
      // Animate project cards with staggered delay
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add('animate-in');
        }, 100 * index);
      });

      // Animate contact section
      if (contactRef.current) {
        setTimeout(() => {
          contactRef.current.classList.add('animate-in');
        }, 100 * projectElements.length + 200);
      }
    };

    // Call animation after a short delay
    setTimeout(animateElements, 300);
  }, [filteredProjects]);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* AI-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/30 dark:from-indigo-900/40 dark:via-purple-900/30 dark:to-blue-900/40"></div>
        
        {/* Floating orbs/particles */}
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-blue-300/30 dark:bg-blue-400/20 blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-1/3 w-40 h-40 rounded-full bg-purple-300/30 dark:bg-purple-400/20 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/5 w-36 h-36 rounded-full bg-indigo-300/30 dark:bg-indigo-400/20 blur-xl animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-cyan-300/30 dark:bg-cyan-400/20 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-1/3 right-1/5 w-28 h-28 rounded-full bg-pink-300/30 dark:bg-pink-400/20 blur-xl animate-float-slow"></div>
        
        {/* Binary code particles */}
        <div className="absolute inset-0 opacity-20 dark:opacity-25 overflow-hidden">
          <div className="binary-particle text-indigo-600/60 dark:text-indigo-400/60 text-xl font-mono absolute top-[10%] left-[5%] animate-binary-fall-slow">01001</div>
          <div className="binary-particle text-purple-600/60 dark:text-purple-400/60 text-xl font-mono absolute top-[8%] left-[25%] animate-binary-fall-medium">10110</div>
          <div className="binary-particle text-blue-600/60 dark:text-blue-400/60 text-xl font-mono absolute top-[5%] left-[45%] animate-binary-fall-fast">00101</div>
          <div className="binary-particle text-indigo-600/60 dark:text-indigo-400/60 text-xl font-mono absolute top-[3%] left-[65%] animate-binary-fall-slow">11010</div>
          <div className="binary-particle text-purple-600/60 dark:text-purple-400/60 text-xl font-mono absolute top-[7%] left-[85%] animate-binary-fall-medium">01101</div>
          <div className="binary-particle text-blue-600/60 dark:text-blue-400/60 text-xl font-mono absolute top-[12%] left-[15%] animate-binary-fall-fast">10010</div>
          <div className="binary-particle text-indigo-600/60 dark:text-indigo-400/60 text-xl font-mono absolute top-[9%] left-[35%] animate-binary-fall-slow">00110</div>
          <div className="binary-particle text-purple-600/60 dark:text-purple-400/60 text-xl font-mono absolute top-[6%] left-[55%] animate-binary-fall-medium">11001</div>
          <div className="binary-particle text-blue-600/60 dark:text-blue-400/60 text-xl font-mono absolute top-[4%] left-[75%] animate-binary-fall-fast">10101</div>
          <div className="binary-particle text-indigo-600/60 dark:text-indigo-400/60 text-xl font-mono absolute top-[2%] left-[95%] animate-binary-fall-slow">01010</div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>
      </div>

      {/* Little robot character */}
      <div 
        className="fixed z-50 select-none pointer-events-none transition-transform"
        style={{ 
          left: `${robotPosition.x}px`, 
          top: `${robotPosition.y}px`,
          transform: `scaleX(${robotDirection})` 
        }}
      >
        <div className="relative flex flex-col items-center">
          {/* Robot head */}
          <div className="w-12 h-10 bg-gray-800 dark:bg-indigo-600 rounded-t-lg relative flex items-center justify-center">
            {/* Eyes */}
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" style={{ left: '25%', top: '40%' }}></div>
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" style={{ right: '25%', top: '40%' }}></div>
            {/* Antenna */}
            <div className="absolute -top-3 w-1 h-3 bg-gray-700 dark:bg-indigo-700">
              <div className="w-2 h-2 rounded-full bg-red-500 absolute -top-1 left-50% transform -translate-x-1/2 animate-pulse-slow"></div>
            </div>
          </div>
          {/* Robot body */}
          <div className="w-10 h-8 bg-gray-700 dark:bg-indigo-700 relative flex justify-center">
            {/* Control panel */}
            <div className="absolute top-1 w-6 h-3 bg-gray-600 dark:bg-indigo-800 rounded-sm flex items-center justify-around px-1">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          {/* Robot legs */}
          <div className="flex justify-center w-full">
            <div className={`w-2 h-5 bg-gray-900 dark:bg-indigo-800 mx-1 ${robotDirection > 0 ? 'animate-leg-left' : 'animate-leg-right'}`}></div>
            <div className={`w-2 h-5 bg-gray-900 dark:bg-indigo-800 mx-1 ${robotDirection > 0 ? 'animate-leg-right' : 'animate-leg-left'}`}></div>
          </div>
        </div>
      </div>

      {/* Header section with parallax effect and contact info */}
      <div ref={headerRef} className="relative overflow-hidden bg-indigo-900 dark:bg-gray-800 opacity-0 transform translate-y-4 transition-all duration-1000">
        <div className="absolute inset-0 opacity-30 bg-pattern-grid"></div>
        <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            <span className="inline-block transform transition-transform hover:scale-105 duration-300">
              <i className="fas fa-code-branch mr-4 text-indigo-300"></i>
              Projects Portfolio
            </span>
          </h1>
          <p className="text-xl text-center text-indigo-200 max-w-3xl mx-auto mb-8">
            A collection of AI, machine learning, data engineering, and full-stack development projects showcasing my technical capabilities and problem-solving approach.
          </p>
          
          {/* Contact information - Top */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-2">
            <a 
              href="mailto:brianbeadell.udc@gmail.com" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i> brianbeadell.udc@gmail.com
            </a>
            <a 
              href="https://github.com/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a 
              href="/profile/Beadell_Resume_2024.pdf" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              <i className="fas fa-file-pdf mr-2"></i> Resume
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-indigo-600 opacity-20 dark:opacity-10 animate-pulse-slow"></div>
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-purple-600 opacity-20 dark:opacity-10 animate-pulse-slow"></div>
      </div>

      {/* Project category filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {['All Projects', 'AI & ML', 'Data Science', 'Web Dev', 'Agriculture', 'Finance'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                  : 'bg-white hover:bg-indigo-50 text-gray-700 hover:shadow'
              } border border-gray-200 font-medium text-sm transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div ref={projectsRef} className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card opacity-0 translate-y-4 transition-all duration-500">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl text-gray-500">No projects found in this category</h3>
            <p className="mt-2 text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>
      
      {/* Contact section - Bottom */}
      <div ref={contactRef} className="bg-indigo-600 dark:bg-indigo-900 py-12 mt-12 opacity-0 translate-y-4 transition-all duration-500">
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
              href="https://github.com/brianbeadell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a 
              href="/profile/Beadell_Resume_2024.pdf" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className="fas fa-file-pdf mr-2"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom styling for animations */}
      <style>
        {`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .bg-pattern-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes legLeft {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }

        @keyframes legRight {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
        }

        .animate-leg-left {
          animation: legLeft 0.5s infinite;
          transform-origin: top;
        }

        .animate-leg-right {
          animation: legRight 0.5s infinite;
          transform-origin: top;
        }
        `}
      </style>
    </div>
  );
};

export default Projects;
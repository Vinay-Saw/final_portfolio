export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  challenges: string;
  solution: string;
  results: string;
}

export const projects: Project[] = [
  {
    id: "sales-prediction",
    title: "Sales Prediction Model",
    description: "Built a machine learning model to predict retail sales using time series analysis and feature engineering, achieving 94% accuracy.",
    longDescription: "A comprehensive machine learning solution for retail sales forecasting that combines multiple data sources and advanced feature engineering techniques. The model processes historical sales data, seasonal patterns, promotional activities, and external factors to generate accurate predictions.",
    image: "🛍️",
    technologies: ["Python", "Scikit-learn", "Pandas", "Plotly"],
    github: "#",
    demo: "#",
    category: "Machine Learning",
    challenges: "Dealing with seasonal variations, promotional impacts, and data quality issues across multiple retail locations.",
    solution: "Implemented ensemble methods combining ARIMA, Random Forest, and XGBoost models with automated feature selection and cross-validation.",
    results: "Achieved 94% accuracy in sales predictions, reducing inventory costs by 15% and improving demand planning efficiency."
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analysis",
    description: "Performed clustering analysis on customer data to identify distinct segments for targeted marketing strategies.",
    longDescription: "Advanced customer analytics project that leverages unsupervised learning to identify meaningful customer segments based on purchasing behavior, demographics, and engagement patterns.",
    image: "👥",
    technologies: ["R", "K-Means", "ggplot2", "Shiny"],
    github: "#",
    demo: "#",
    category: "Analytics",
    challenges: "High-dimensional customer data with mixed data types and missing values, requiring robust preprocessing and dimensionality reduction.",
    solution: "Applied PCA for dimensionality reduction, followed by K-means clustering with optimal cluster selection using elbow method and silhouette analysis.",
    results: "Identified 5 distinct customer segments, leading to 23% increase in marketing campaign effectiveness and improved customer retention."
  },
  {
    id: "covid-dashboard",
    title: "COVID-19 Dashboard",
    description: "Interactive dashboard visualizing COVID-19 trends and statistics with real-time data updates and predictive insights.",
    longDescription: "Real-time analytics dashboard providing comprehensive COVID-19 data visualization and trend analysis with predictive modeling capabilities for public health insights.",
    image: "📊",
    technologies: ["Python", "Streamlit", "Plotly", "APIs"],
    github: "#",
    demo: "#",
    category: "Visualization",
    challenges: "Handling real-time data updates, ensuring data accuracy across multiple sources, and creating intuitive visualizations for complex epidemiological data.",
    solution: "Built automated data pipeline with API integration, implemented caching mechanisms, and created interactive visualizations with drill-down capabilities.",
    results: "Deployed dashboard used by local health authorities, providing real-time insights that supported public health decision-making during the pandemic."
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Tool",
    description: "Natural language processing model to analyze sentiment in social media posts and customer reviews with 89% accuracy.",
    longDescription: "Comprehensive NLP solution for sentiment analysis that processes text data from multiple sources to provide insights into customer opinions and market sentiment.",
    image: "💭",
    technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
    github: "#",
    demo: "#",
    category: "NLP",
    challenges: "Handling sarcasm, context-dependent sentiment, and domain-specific language variations across different platforms and industries.",
    solution: "Developed hybrid approach combining lexicon-based methods with deep learning models, including BERT fine-tuning for domain adaptation.",
    results: "Achieved 89% accuracy in sentiment classification, enabling real-time brand monitoring and customer feedback analysis for business clients."
  },
  {
    id: "stock-predictor",
    title: "Stock Price Predictor",
    description: "LSTM neural network for predicting stock prices based on historical data and technical indicators.",
    longDescription: "Advanced deep learning model for financial forecasting that combines historical price data with technical indicators and market sentiment to predict short-term stock price movements.",
    image: "📈",
    technologies: ["Python", "Keras", "NumPy", "Yahoo Finance API"],
    github: "#",
    demo: "#",
    category: "Deep Learning",
    challenges: "Market volatility, non-stationary time series data, and the inherent unpredictability of financial markets requiring robust model architecture.",
    solution: "Implemented LSTM networks with attention mechanisms, incorporating multiple timeframes and external market indicators with proper risk management features.",
    results: "Developed model with consistent performance across multiple market conditions, providing valuable insights for algorithmic trading strategies."
  },
  {
    id: "ab-testing",
    title: "A/B Testing Framework",
    description: "Statistical framework for conducting and analyzing A/B tests with automated reporting and significance testing.",
    longDescription: "Comprehensive A/B testing platform that automates the entire experimentation process from design to analysis, ensuring statistical rigor and actionable insights.",
    image: "🧪",
    technologies: ["Python", "Scipy", "Matplotlib", "Jupyter"],
    github: "#",
    demo: "#",
    category: "Statistics",
    challenges: "Ensuring statistical power, handling multiple testing problems, and providing interpretable results for non-technical stakeholders.",
    solution: "Built framework with power analysis, sequential testing capabilities, and automated report generation with clear visualization of results.",
    results: "Enabled data-driven decision making across multiple product teams, improving conversion rates by an average of 12% across tested features."
  }
];

export const getFeaturedProjects = (limit: number = 6): Project[] => {
  return projects.slice(0, limit);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
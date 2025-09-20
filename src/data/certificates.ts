export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  image: string;
  description: string;
  courseOverview: string;
  skillsAndTools: string[];
  validationLink: string;
  courseActivity: {
    duration: string;
    modules: number;
    assignments: number;
    projects: number;
  };
  keyLearnings: string[];
  category: string;
}

export const certificates: Certificate[] = [
  {
    id: "aws-ml-specialty",
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "🏆",
    image: "🤖",
    description: "Advanced certification validating expertise in building, training, tuning, and deploying machine learning models using AWS services.",
    courseOverview: "This specialty certification validates advanced skills and knowledge required to perform the job of a machine learning engineer or data scientist. It covers the full ML development lifecycle including data engineering, exploratory data analysis, modeling, machine learning implementation and operations, and machine learning solution evaluation.",
    skillsAndTools: [
      "Amazon SageMaker",
      "AWS Lambda", 
      "Amazon S3",
      "Amazon EC2",
      "Amazon Kinesis",
      "AWS Glue",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ],
    validationLink: "https://aws.amazon.com/verification",
    courseActivity: {
      duration: "6 months preparation",
      modules: 12,
      assignments: 25,
      projects: 8
    },
    keyLearnings: [
      "ML model development lifecycle on AWS",
      "Data engineering for ML workloads",
      "Feature engineering and selection",
      "Model training and hyperparameter tuning",
      "Model deployment and monitoring",
      "ML security and governance"
    ],
    category: "Cloud Computing"
  },
  {
    id: "tensorflow-developer",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    badge: "🧠",
    image: "🔥",
    description: "Professional certification demonstrating proficiency in using TensorFlow for machine learning solutions and neural network development.",
    courseOverview: "The TensorFlow Developer Certificate program validates your knowledge of integrating machine learning into tools and applications. The certificate program requires an understanding of building TensorFlow models using Computer Vision, Convolutional Neural Networks, Natural Language Processing, and real-world image data and strategies.",
    skillsAndTools: [
      "TensorFlow",
      "Keras",
      "Python",
      "NumPy",
      "Matplotlib",
      "Computer Vision",
      "CNN",
      "RNN",
      "LSTM",
      "Natural Language Processing",
      "Image Classification",
      "Time Series Analysis"
    ],
    validationLink: "https://www.credential.net/",
    courseActivity: {
      duration: "4 months intensive",
      modules: 8,
      assignments: 20,
      projects: 6
    },
    keyLearnings: [
      "Building and training neural networks",
      "Image recognition and computer vision",
      "Natural language processing techniques", 
      "Time series forecasting",
      "Model optimization and deployment",
      "TensorFlow ecosystem mastery"
    ],
    category: "Machine Learning"
  },
  {
    id: "ibm-data-science",
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2022", 
    badge: "📊",
    image: "📈",
    description: "Comprehensive professional certificate covering the full data science methodology, tools, and techniques used by data scientists.",
    courseOverview: "This Professional Certificate from IBM is designed to prepare you for a career as a data scientist. You'll develop in-demand skills used by professional data scientists including databases, data visualization, statistical analysis, predictive modeling, machine learning algorithms, and data mining.",
    skillsAndTools: [
      "Python",
      "R Programming",
      "SQL",
      "Jupyter Notebooks",
      "GitHub",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SciPy",
      "Beautiful Soup",
      "Folium",
      "IBM Watson Studio",
      "IBM Db2"
    ],
    validationLink: "https://www.coursera.org/verify/",
    courseActivity: {
      duration: "8 months part-time",
      modules: 10,
      assignments: 45,
      projects: 12
    },
    keyLearnings: [
      "Data science methodology and lifecycle",
      "Data analysis and visualization techniques",
      "Machine learning algorithms implementation",
      "Statistical analysis and hypothesis testing",
      "Database management and SQL queries",
      "Capstone project with real-world data"
    ],
    category: "Data Science"
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2022",
    badge: "🐍",
    image: "💻",
    description: "Specialized course focusing on Python programming fundamentals and advanced techniques specifically for data science applications.",
    courseOverview: "This course introduces the basics of Python 3, including conditional execution and iteration as control structures, and strings and lists as data structures. You'll program an on-screen Turtle to draw pretty pictures. You'll also learn to draw reference diagrams as a way to reason about program executions.",
    skillsAndTools: [
      "Python 3",
      "Jupyter Notebooks", 
      "pandas",
      "NumPy",
      "Matplotlib",
      "Data Structures",
      "Control Flow",
      "Functions",
      "Object-Oriented Programming",
      "File I/O",
      "Exception Handling",
      "Web Scraping"
    ],
    validationLink: "https://coursera.org/verify/",
    courseActivity: {
      duration: "3 months",
      modules: 6,
      assignments: 15,
      projects: 4
    },
    keyLearnings: [
      "Python fundamentals for data analysis",
      "Data manipulation with pandas", 
      "Numerical computing with NumPy",
      "Data visualization with Matplotlib",
      "Working with APIs and web data",
      "Best practices in Python programming"
    ],
    category: "Programming"
  }
];

export const getFeaturedCertificates = (limit: number = 4): Certificate[] => {
  return certificates.slice(0, limit);
};

export const getCertificateById = (id: string): Certificate | undefined => {
  return certificates.find(cert => cert.id === id);
};
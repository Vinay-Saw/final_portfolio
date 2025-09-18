import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Prediction Model",
      description: "Built a machine learning model to predict retail sales using time series analysis and feature engineering, achieving 94% accuracy.",
      image: "🛍️",
      technologies: ["Python", "Scikit-learn", "Pandas", "Plotly"],
      github: "#",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Performed clustering analysis on customer data to identify distinct segments for targeted marketing strategies.",
      image: "👥",
      technologies: ["R", "K-Means", "ggplot2", "Shiny"],
      github: "#",
      demo: "#",
      category: "Analytics"
    },
    {
      title: "COVID-19 Dashboard",
      description: "Interactive dashboard visualizing COVID-19 trends and statistics with real-time data updates and predictive insights.",
      image: "📊",
      technologies: ["Python", "Streamlit", "Plotly", "APIs"],
      github: "#",
      demo: "#",
      category: "Visualization"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Natural language processing model to analyze sentiment in social media posts and customer reviews with 89% accuracy.",
      image: "💭",
      technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
      github: "#",
      demo: "#",
      category: "NLP"
    },
    {
      title: "Stock Price Predictor",
      description: "LSTM neural network for predicting stock prices based on historical data and technical indicators.",
      image: "📈",
      technologies: ["Python", "Keras", "NumPy", "Yahoo Finance API"],
      github: "#",
      demo: "#",
      category: "Deep Learning"
    },
    {
      title: "A/B Testing Framework",
      description: "Statistical framework for conducting and analyzing A/B tests with automated reporting and significance testing.",
      image: "🧪",
      technologies: ["Python", "Scipy", "Matplotlib", "Jupyter"],
      github: "#",
      demo: "#",
      category: "Statistics"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data science and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover-glow border-border/50 group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-4xl">{project.image}</div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
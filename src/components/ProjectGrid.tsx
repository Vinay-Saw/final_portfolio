import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Predicted customer churn using Random Forest and XGBoost with 92% accuracy.",
    tags: ["Machine Learning", "Python", "Scikit-Learn"],
    category: "Data Science",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Image Classification App",
    description: "Deep learning model to classify images into 100 categories using ResNet50.",
    tags: ["Deep Learning", "PyTorch", "React"],
    category: "Deep Learning",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Sales Forecasting Dashboard",
    description: "Interactive dashboard for visualizing and forecasting sales trends.",
    tags: ["Data Visualization", "Streamlit", "Pandas"],
    category: "Data Science",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Tailwind", "Web Design"],
    category: "Web Dev",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "NLP Sentiment Analysis",
    description: "Sentiment analysis on Twitter data using BERT and Hugging Face transformers.",
    tags: ["NLP", "Python", "Transformers"],
    category: "Deep Learning",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "E-commerce Recommendation",
    description: "Collaborative filtering recommendation engine for an e-commerce platform.",
    tags: ["Machine Learning", "Python", "SQL"],
    category: "Data Science",
    image: "/placeholder.svg",
    github: "#",
    demo: "#"
  }
];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  github: string;
  demo: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group flex flex-col h-full">
    <div className="aspect-video w-full bg-muted relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <Button size="icon" variant="secondary" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
        </Button>
        <Button size="icon" variant="secondary" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-5 h-5" /></a>
        </Button>
      </div>
    </div>
    <CardHeader className="p-4 pb-2">
      <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
      <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
    </CardHeader>
    <CardContent className="p-4 pt-2 mt-auto">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <Badge key={tag} variant="outline" className="text-xs font-normal text-muted-foreground bg-secondary/20 border-secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProjectGrid = () => {
  const categories = ["All", "Data Science", "Deep Learning", "Web Dev"];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 animate-fade-in">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          A collection of my work in data science, machine learning, and software development.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="mb-8 bg-transparent border-b border-border w-full justify-start h-auto p-0 rounded-none space-x-6 overflow-x-auto flex-nowrap">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 transition-all hover:text-foreground/80"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All" className="mt-0 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {categories.filter(c => c !== "All").map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(p => p.category === cat).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectGrid;

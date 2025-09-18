import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/projects" className="mr-4">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{project.image}</div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mb-12">
                <Button 
                  variant="outline" 
                  className="flex-1 sm:flex-none"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  className="flex-1 sm:flex-none gradient-primary text-primary-foreground"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.solution}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.results}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { certificates } from "@/data/certificates";
import Navigation from "@/components/Navigation";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link to="/#education">
              <Button variant="ghost" className="mb-6 hover:bg-muted/50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Education
              </Button>
            </Link>
            
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                All Certifications
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional certifications and specialized training programs that validate expertise in data science, machine learning, and related technologies.
              </p>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Link key={cert.id} to={`/certificates/${cert.id}`}>
                <Card 
                  className="hover-glow border-border/50 group cursor-pointer overflow-hidden h-full transition-transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{cert.image}</div>
                      <Badge variant="secondary" className="text-xs">
                        {cert.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skillsAndTools.slice(0, 4).map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-muted-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skillsAndTools.length > 4 && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                          +{cert.skillsAndTools.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary text-primary-foreground"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(cert.validationLink, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Validate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
import { useParams, Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Clock, BookOpen, Trophy, Target } from "lucide-react";
import { getCertificateById } from "@/data/certificates";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const CertificateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const certificate = id ? getCertificateById(id) : null;

  useEffect(() => {
    if (!certificate) {
      navigate('/certificates');
    }
  }, [certificate, navigate]);

  if (!certificate) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <Link to="/certificates">
              <Button variant="ghost" className="mb-6 hover:bg-muted/50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Certificates
              </Button>
            </Link>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-6xl">{certificate.image}</div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-3">
                  {certificate.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {certificate.title}
                </h1>
                <p className="text-xl text-primary mb-2">{certificate.issuer}</p>
                <p className="text-muted-foreground mb-6">{certificate.date}</p>
                
                <Button 
                  className="gradient-primary text-primary-foreground"
                  onClick={() => window.open(certificate.validationLink, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Validate Certificate
                </Button>
              </div>
            </div>
          </div>

          {/* Certificate Overview */}
          <Card className="mb-8 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Course Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{certificate.courseOverview}</p>
            </CardContent>
          </Card>

          {/* Course Activity Stats */}
          <Card className="mb-8 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Course Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-lg">{certificate.courseActivity.duration}</div>
                  <div className="text-xs text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-lg">{certificate.courseActivity.modules}</div>
                  <div className="text-xs text-muted-foreground">Modules</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-lg">{certificate.courseActivity.assignments}</div>
                  <div className="text-xs text-muted-foreground">Assignments</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-lg">{certificate.courseActivity.projects}</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Tools */}
          <Card className="mb-8 border-border/50">
            <CardHeader>
              <CardTitle>Skills & Tools Covered</CardTitle>
              <CardDescription>Technologies and techniques mastered through this certification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsAndTools.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-sm border-primary/30 text-muted-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Learnings */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Key Learning Outcomes</CardTitle>
              <CardDescription>Core competencies and knowledge gained</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certificate.keyLearnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CertificateDetail;
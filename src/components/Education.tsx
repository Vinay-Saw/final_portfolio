import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedCertificates } from "@/data/certificates";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Stanford University",
      period: "2023 - 2025",
      description: "Specialized in machine learning, statistical modeling, and big data analytics. Current GPA: 3.8/4.0",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Statistical Learning Theory",
        "Big Data Analytics",
        "Natural Language Processing"
      ],
      status: "current"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2019 - 2023",
      description: "Graduated Magna Cum Laude with concentration in Data Science and AI. Thesis on predictive modeling for healthcare outcomes.",
      courses: [
        "Data Structures & Algorithms",
        "Database Systems", 
        "Statistics for Data Science",
        "Linear Algebra",
        "Calculus & Probability"
      ],
      status: "completed"
    }
  ];

  const certifications = getFeaturedCertificates();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data science and continuous learning
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree} 
                className={`hover-glow border-border/50 ${edu.status === 'current' ? 'ring-2 ring-primary/30' : ''}`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl mb-2">
                        {edu.degree}
                        {edu.status === 'current' && (
                          <Badge className="ml-3 gradient-primary text-primary-foreground">
                            Currently Enrolled
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {edu.school}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm self-start md:self-center">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge 
                          key={course} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-muted-foreground"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Link key={cert.id} to={`/certificates/${cert.id}`}>
                <Card 
                  className="hover-glow border-border/50 text-center group cursor-pointer transition-transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="text-3xl mb-4">{cert.badge}</div>
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/certificates">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Certificates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
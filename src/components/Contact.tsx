import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on data-driven solutions or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-glow border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                I'd love to hear about your project or opportunity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="border-border/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john.doe@example.com" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project Collaboration" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  className="border-border/50 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full gradient-primary text-primary-foreground hover-glow">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-glow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Let's start a conversation about data science
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">alex.chen@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow border-border/50">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-semibold">Follow My Journey</h3>
                  
                  <div className="flex justify-center gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                  
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
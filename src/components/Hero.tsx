import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleViewWorkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-primary p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">DS</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-data-purple bg-clip-text text-transparent">
          Vinay Saw
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Data Science Student & Analytics Enthusiast
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transforming raw data into actionable insights through machine learning, 
          statistical analysis, and data visualization. Currently pursuing my Bachelor's 
          in Data Science with a passion for solving real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="gradient-primary hover-glow text-primary-foreground px-8 py-6 text-lg">
            <a href="#projects" onClick={handleViewWorkClick}>View My Work</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/vinay-saw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vinaysaw/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:vinaysaw2003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
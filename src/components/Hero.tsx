import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/Vinay-Kumar-Saw-pic.jpg";
import { personalConfig, getFullName, getGithubUrl, getLinkedinUrl, getMailtoLink, getResumeDownloadUrl } from "@/config/personal";

const Hero = () => {
  const handleViewWorkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden py-20 pt-24">
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fade-in flex flex-col items-center">
        <div className="mb-4">
          <div className="w-40 h-40 mx-auto mb-4 rounded-full gradient-primary p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <img 
                src={profileImage} 
                alt="Vinay Saw"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-data-purple bg-clip-text text-transparent leading-tight pb-4">
          {getFullName()}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {personalConfig.title}
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalConfig.description.long}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="gradient-primary hover-glow text-primary-foreground px-8 py-6 text-lg">
            <a href="#projects" onClick={handleViewWorkClick}>View My Work</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg" asChild>
            <a href={getResumeDownloadUrl()} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href={getGithubUrl()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
            <SiGithub className="w-6 h-6" />
          </a>
          <a href={getLinkedinUrl()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a href={getMailtoLink()} className="text-muted-foreground hover:text-primary transition-colors hover-glow">
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

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { personalConfig } from "@/config/personal";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-16 bg-background">
      <span className="text-xl md:text-2xl font-medium text-slate-600 mb-4 animate-fade-in">
        Hi, I'm {personalConfig.fullName}
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight animate-slide-up">
        Data Scientist
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
        {personalConfig.description.short}
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <a
          href={personalConfig.social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110"
        >
          <SiGithub size={24} />
        </a>
        <a
          href={personalConfig.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110"
        >
          <SiLinkedin size={24} />
        </a>
        <a
          href={`mailto:${personalConfig.email}`}
          className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110"
        >
          <Mail size={24} />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <Button
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md text-lg font-medium min-w-[160px] shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a href="#contact">Hire Me</a>
        </Button>
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 rounded-md text-lg font-medium min-w-[160px]"
          asChild
        >
          <a href={personalConfig.resume.downloadUrl} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;

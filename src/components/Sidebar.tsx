import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col p-6 gap-6 overflow-y-auto bg-card md:bg-transparent">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center gap-4">
        <Avatar className="w-32 h-32 border-4 border-primary/20">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vinay Saw</h1>
          <p className="text-primary font-medium">Data Scientist</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"><Twitter className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"><Mail className="w-5 h-5" /></a>
      </div>

      {/* Bio */}
      <div className="text-center text-sm text-muted-foreground leading-relaxed">
        <p>
          Passionate about turning data into actionable insights.
          Experienced in Machine Learning, Deep Learning, and Big Data technologies.
        </p>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Download Resume</Button>
        <Button className="w-full" variant="outline">Contact Me</Button>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Tech Stack */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-2">
           {["Python", "PyTorch", "TensorFlow", "SQL", "React", "Docker", "AWS", "Git"].map((tech) => (
             <Badge key={tech} variant="secondary" className="hover:bg-primary/20 cursor-default">
               {tech}
             </Badge>
           ))}
        </div>
      </div>

      <div className="mt-auto text-xs text-center text-muted-foreground pt-6">
        © 2026 Vinay Saw
      </div>
    </div>
  );
};

export default Sidebar;

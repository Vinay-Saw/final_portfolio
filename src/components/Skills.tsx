import { useEffect, useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import {
  SiPython,
  SiR,
  SiMysql,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPlotly,
  SiGit,
} from "react-icons/si";
import { Brain, BarChart, LineChart, type LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import type { IconType } from "react-icons";

// Data structures for Desktop Network
const inputs: Array<{ id: string; label: string; icon: IconType; connectsTo: string[] }> = [
  { id: "python", label: "Python", icon: SiPython, connectsTo: ["ml", "viz", "stats"] },
  { id: "r", label: "R", icon: SiR, connectsTo: ["stats", "viz"] },
  { id: "mysql", label: "SQL", icon: SiMysql, connectsTo: ["viz"] },
  { id: "javascript", label: "JavaScript", icon: SiJavascript, connectsTo: ["viz"] },
  { id: "git", label: "Git", icon: SiGit, connectsTo: ["ml"] },
];

const processors: Array<{ id: string; label: string; icon: LucideIcon; description: string }> = [
  { id: "ml", label: "Machine Learning", icon: Brain, description: "AI & Deep Learning" },
  { id: "viz", label: "Data Visualization", icon: BarChart, description: "Visual Analytics" },
  { id: "stats", label: "Statistical Analysis", icon: LineChart, description: "Data Insights" },
];

const outputs: Array<{ id: string; label: string; icon: IconType | null; connectedFrom: string[] }> = [
  { id: "tf", label: "TensorFlow", icon: SiTensorflow, connectedFrom: ["ml"] },
  { id: "pytorch", label: "PyTorch", icon: SiPytorch, connectedFrom: ["ml"] },
  { id: "sklearn", label: "Scikit-learn", icon: SiScikitlearn, connectedFrom: ["ml"] },
  { id: "pandas", label: "Pandas", icon: SiPandas, connectedFrom: ["stats"] },
  { id: "numpy", label: "NumPy", icon: SiNumpy, connectedFrom: ["stats"] },
  { id: "tableau", label: "Tableau", icon: SiTableau, connectedFrom: ["viz"] },
  { id: "powerbi", label: "PowerBI", icon: null, connectedFrom: ["viz"] },
  { id: "plotly", label: "Plotly", icon: SiPlotly, connectedFrom: ["viz"] },
];

// Skills data for mobile layout
const technicalSkills = [
  { name: "Python", percentage: 95 },
  { name: "R", percentage: 85 },
  { name: "SQL", percentage: 90 },
  { name: "JavaScript", percentage: 80 },
  { name: "Git", percentage: 85 },
];

const toolsData = [
  "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
  "Tableau", "PowerBI", "Plotly", "Matplotlib", "Seaborn",
];

const Skills = () => {
  const isMobile = useIsMobile();
  const updateXarrow = useXarrow();
  const [mounted, setMounted] = useState(false);

  // Generate connections from data structures
  const connections = inputs.flatMap((input) =>
    input.connectsTo.map((procId) => ({ from: input.id, to: procId }))
  ).concat(
    outputs.flatMap((output) =>
      output.connectedFrom.map((procId) => ({ from: procId, to: output.id }))
    )
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // The Sync Loop - continuously update arrows for floating nodes
  useEffect(() => {
    if (!isMobile && mounted) {
      let animationFrameId: number;
      const updateArrows = () => {
        updateXarrow();
        animationFrameId = requestAnimationFrame(updateArrows);
      };
      animationFrameId = requestAnimationFrame(updateArrows);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isMobile, mounted, updateXarrow]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            {isMobile ? "Technical Skills" : "Neural Skills Network"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isMobile
              ? "Core competencies and tools"
              : "Connected knowledge pathways for data science mastery"}
          </p>
        </div>

        {isMobile ? (
          // VIEW A: MOBILE LAYOUT - Standard clean layout
          <div className="space-y-12">
            {/* Technical Skills: Progress Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>

            {/* Processors: Standard Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
              {processors.map((processor) => {
                const Icon = processor.icon;
                return (
                  <Card key={processor.id} className="bg-white/5 border-white/10">
                    <CardContent className="flex items-center gap-4 p-6">
                      <Icon className="w-10 h-10 text-neon-cyan flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white">{processor.label}</h4>
                        <p className="text-sm text-muted-foreground">{processor.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Tools: Simple 2-column Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Tools & Frameworks</h3>
              <div className="grid grid-cols-2 gap-3">
                {toolsData.map((tool) => (
                  <div
                    key={tool}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center text-sm text-white font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // VIEW B: DESKTOP LAYOUT - Neural Network
          <Xwrapper>
            <div className="relative flex justify-between items-center gap-12 py-20">
              {/* Column 1: Inputs - Circular Nodes with Zig-Zag Float */}
              <div className="flex flex-col gap-10 items-center">
                {inputs.map((input, index) => {
                  const Icon = input.icon;
                  const randomDelay = `${Math.random() * 5}s`;
                  return (
                    <div key={input.id} className="flex flex-col items-center gap-2">
                      <div
                        id={input.id}
                        className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-20 relative transition-all duration-300 hover:shadow-[0_0_20px_#00F0FF] animate-float-complex"
                        style={{ animationDelay: randomDelay }}
                      >
                        <Icon className="text-neon-cyan text-2xl" />
                      </div>
                      <span className="text-xs text-muted-foreground">{input.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Column 2: Processors - Large Glass Cards */}
              <div className="flex flex-col gap-8 items-center">
                {processors.map((processor) => {
                  const Icon = processor.icon;
                  return (
                    <div
                      key={processor.id}
                      id={processor.id}
                      className="w-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_#00F0FF] z-10"
                    >
                      <Icon className="w-12 h-12 text-neon-cyan" />
                      <h4 className="text-lg font-bold text-white text-center">
                        {processor.label}
                      </h4>
                      <p className="text-sm text-muted-foreground text-center">
                        {processor.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Column 3: Outputs - Circular Nodes with Zig-Zag Float */}
              <div className="grid grid-cols-2 gap-6">
                {outputs.map((output, index) => {
                  const Icon = output.icon;
                  const randomDelay = `${Math.random() * 5}s`;
                  return (
                    <div key={output.id} className="flex flex-col items-center gap-2">
                      <div
                        id={output.id}
                        className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center z-20 relative transition-all duration-300 hover:shadow-[0_0_20px_#00F0FF] animate-float-complex"
                        style={{ animationDelay: randomDelay }}
                      >
                        {Icon ? (
                          <Icon className="text-neon-cyan text-xl" />
                        ) : (
                          <span className="text-xs text-neon-cyan font-bold">
                            {output.label.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground text-center max-w-[64px]">
                        {output.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Xarrows: Neon Cyan Wires */}
            {mounted &&
              connections.map((conn, idx) => (
                <Xarrow
                  key={`${conn.from}-${conn.to}-${idx}`}
                  start={conn.from}
                  end={conn.to}
                  color="#00F0FF"
                  strokeWidth={1.5}
                  curveness={0.5}
                  showHead={false}
                />
              ))}
          </Xwrapper>
        )}
      </div>
    </section>
  );
};

export default Skills;
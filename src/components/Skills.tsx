import { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import {
  SiPython,
  SiR,
  SiMysql,
  SiJavascript,
  SiJulia,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPlotly,
} from "react-icons/si";
import { Brain, BarChart3, TrendingUp } from "lucide-react";

const Skills = () => {
  // Prevents hydration mismatches with react-xarrows which relies on client-side DOM measurements
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Neon cyan color for arrow connections
  const ARROW_COLOR = "#00F0FF";

  // Helper function to create valid HTML IDs from names
  const createId = (prefix: string, name: string) => {
    const sanitized = name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    return sanitized
      ? `${prefix}-${sanitized}`
      : `${prefix}-item-${Math.random().toString(36).substring(2, 11)}`;
  };

  // Input nodes (Left Column) - Programming Languages & Technologies
  const inputs = [
    { name: "Python", icon: SiPython, id: "input-python" },
    { name: "R", icon: SiR, id: "input-r" },
    { name: "SQL", icon: SiMysql, id: "input-sql" },
    { name: "JavaScript", icon: SiJavascript, id: "input-javascript" },
    { name: "Julia", icon: SiJulia, id: "input-julia" },
  ];

  // Processor nodes (Center Column) - Core Competencies
  const processors = [
    {
      id: "proc-ml",
      name: "Machine Learning",
      icon: Brain,
      description: "AI & Deep Learning",
    },
    {
      id: "proc-viz",
      name: "Data Visualization",
      icon: BarChart3,
      description: "Visual Analytics",
    },
    {
      id: "proc-stats",
      name: "Statistical Analysis",
      icon: TrendingUp,
      description: "Data Insights",
    },
  ];

  // Output nodes (Right Column) - Tools & Frameworks
  const outputs = [
    { name: "TensorFlow", icon: SiTensorflow, id: "output-tensorflow" },
    { name: "PyTorch", icon: SiPytorch, id: "output-pytorch" },
    { name: "Scikit-learn", icon: SiScikitlearn, id: "output-scikitlearn" },
    { name: "Pandas", icon: SiPandas, id: "output-pandas" },
    { name: "NumPy", icon: SiNumpy, id: "output-numpy" },
    { name: "Tableau", icon: SiTableau, id: "output-tableau" },
    { name: "PowerBI", icon: null, id: "output-powerbi" },
    { name: "Matplotlib", icon: null, id: "output-matplotlib" },
    { name: "Seaborn", icon: null, id: "output-seaborn" },
    { name: "Plotly", icon: SiPlotly, id: "output-plotly" },
  ];

  // Connection mappings - Many-to-Many relationships
  const connections = [
    // Python connects to all processors
    { from: "input-python", to: "proc-ml" },
    { from: "input-python", to: "proc-viz" },
    { from: "input-python", to: "proc-stats" },
    // R connects to stats and viz
    { from: "input-r", to: "proc-stats" },
    { from: "input-r", to: "proc-viz" },
    // SQL connects to viz
    { from: "input-sql", to: "proc-viz" },
    // JavaScript connects to viz
    { from: "input-javascript", to: "proc-viz" },
    // Julia connects to stats
    { from: "input-julia", to: "proc-stats" },
    // ML connects to ML frameworks
    { from: "proc-ml", to: "output-tensorflow" },
    { from: "proc-ml", to: "output-pytorch" },
    { from: "proc-ml", to: "output-scikitlearn" },
    // Viz connects to viz tools
    { from: "proc-viz", to: "output-tableau" },
    { from: "proc-viz", to: "output-powerbi" },
    { from: "proc-viz", to: "output-matplotlib" },
    { from: "proc-viz", to: "output-seaborn" },
    { from: "proc-viz", to: "output-plotly" },
    // Stats connects to data tools
    { from: "proc-stats", to: "output-pandas" },
    { from: "proc-stats", to: "output-numpy" },
  ];

  // Random animation delay generator for floating effect
  const getRandomDelay = () => {
    return `${Math.random() * 5}s`;
  };

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            Neural Skills Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connected knowledge pathways for data science mastery
          </p>
        </div>

        <Xwrapper>
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 py-20">
            {/* Left Column: Inputs - Programming Languages */}
            <div className="flex flex-col gap-8">
              {inputs.map((input, index) => {
                const Icon = input.icon;
                const offsetClass =
                  index % 2 === 0 ? "md:translate-x-4" : "md:-translate-x-4";
                return (
                  <div
                    key={input.id}
                    id={input.id}
                    className={`w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:bg-white/10 cursor-default animate-float ${offsetClass}`}
                    style={{ animationDelay: getRandomDelay() }}
                  >
                    <Icon className="text-neon-cyan" />
                  </div>
                );
              })}
            </div>

            {/* Center Column: Processors - Core Competencies */}
            <div className="flex flex-col gap-6">
              {processors.map((processor) => {
                const Icon = processor.icon;
                return (
                  <div
                    key={processor.id}
                    id={processor.id}
                    className="w-64 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:bg-white/10 cursor-default"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-10 h-10 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {processor.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {processor.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Outputs - Tools & Frameworks */}
            <div className="grid grid-cols-2 gap-4">
              {outputs.map((output, index) => {
                const Icon = output.icon;
                const offsetClass =
                  index % 2 === 0 ? "md:translate-x-2" : "md:-translate-x-2";
                return (
                  <div
                    key={output.id}
                    id={output.id}
                    className={`w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:bg-white/10 cursor-default animate-float ${offsetClass}`}
                    style={{ animationDelay: getRandomDelay() }}
                    title={output.name}
                  >
                    {Icon ? (
                      <Icon className="text-neon-cyan" />
                    ) : (
                      <span className="text-xs text-neon-cyan font-bold">
                        {output.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Xarrows: Draw the connections - Hidden on mobile */}
          {mounted &&
            !isMobile &&
            connections.map((conn, idx) => (
              <Xarrow
                key={`${conn.from}-${conn.to}-${idx}`}
                start={conn.from}
                end={conn.to}
                color={ARROW_COLOR}
                strokeWidth={2}
                curveness={0.5}
                showHead={false}
              />
            ))}
        </Xwrapper>
      </div>
    </section>
  );
};

export default Skills;
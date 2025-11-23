import { useRef, useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";

const Skills = () => {
  // Prevents hydration mismatches with react-xarrows which relies on client-side DOM measurements
  const [mounted, setMounted] = useState(false);

  // Neon cyan color for arrow connections
  const ARROW_COLOR = "#00F0FF";

  // Helper function to create valid HTML IDs from names
  const createId = (prefix: string, name: string) => {
    const sanitized = name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    // Ensure we have a valid ID even if sanitization removes all characters
    return sanitized ? `${prefix}-${sanitized}` : `${prefix}-item-${Math.random().toString(36).substring(2, 11)}`;
  };

  // Technical skills for Column 1 (Inputs)
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "R", level: 85 },
    { name: "SQL", level: 88 },
    { name: "JavaScript", level: 82 },
    { name: "Julia", level: 75 },
  ];

  // Processors for Column 2
  const processors = [
    { id: "ml", name: "Machine Learning", icon: "🤖" },
    { id: "viz", name: "Data Visualization", icon: "📊" },
    { id: "stats", name: "Statistical Analysis", icon: "📈" },
  ];

  // Tools for Column 3 (Outputs)
  const tools = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Tableau",
    "PowerBI",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Jupyter",
    "Git",
  ];

  // Connection mappings (which skills connect to which processors)
  const connections = [
    { from: createId("node", "Python"), to: "ml" },
    { from: createId("node", "Python"), to: "viz" },
    { from: createId("node", "R"), to: "stats" },
    { from: createId("node", "R"), to: "viz" },
    { from: createId("node", "SQL"), to: "viz" },
    { from: createId("node", "JavaScript"), to: "viz" },
    { from: createId("node", "Julia"), to: "stats" },
    { from: "ml", to: createId("tool", "TensorFlow") },
    { from: "ml", to: createId("tool", "PyTorch") },
    { from: "ml", to: createId("tool", "Scikit-learn") },
    { from: "viz", to: createId("tool", "Tableau") },
    { from: "viz", to: createId("tool", "PowerBI") },
    { from: "viz", to: createId("tool", "Matplotlib") },
    { from: "viz", to: createId("tool", "Seaborn") },
    { from: "viz", to: createId("tool", "Plotly") },
    { from: "stats", to: createId("tool", "Pandas") },
    { from: "stats", to: createId("tool", "NumPy") },
  ];

  useEffect(() => {
    setMounted(true);
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Column 1: Technical Skills (Inputs) */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                INPUTS
              </h3>
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                    {/* Connection node at the end of progress bar */}
                    <div
                      id={createId("node", skill.name)}
                      className="absolute top-1/2 -right-1.5 w-3 h-3 bg-neon-cyan rounded-full border-2 border-[#02020A] transform -translate-y-1/2 shadow-glow"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Processors (Central Processing) */}
            <div className="flex flex-col justify-center gap-6">
              <h3 className="text-2xl font-bold mb-2 text-center flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                PROCESSORS
              </h3>
              {processors.map((processor) => (
                <div
                  key={processor.id}
                  id={processor.id}
                  className="premium-glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-glow cursor-default"
                >
                  <div className="text-4xl mb-3">{processor.icon}</div>
                  <h4 className="text-lg font-bold text-neon-cyan">
                    {processor.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Column 3: Tools (Outputs) */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-center md:text-right flex items-center justify-end gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
                OUTPUTS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    id={createId("tool", tool)}
                    className="premium-glass rounded-lg px-3 py-2 text-center text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:border-neon-cyan cursor-default"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Xarrows: Draw the connections */}
          {mounted &&
            connections.map((conn, idx) => (
              <Xarrow
                key={`${conn.from}-${conn.to}-${idx}`}
                start={conn.from}
                end={conn.to}
                color={ARROW_COLOR}
                strokeWidth={2}
                path="smooth"
                dashness={{ animation: 1 }}
                headSize={4}
                showHead={true}
                animateDrawing={0.5}
              />
            ))}
        </Xwrapper>
      </div>
    </section>
  );
};

export default Skills;
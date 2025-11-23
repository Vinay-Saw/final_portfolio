import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, color: "data-blue" },
    { name: "R", level: 85, color: "data-green" },
    { name: "SQL", level: 88, color: "data-purple" },
    { name: "Machine Learning", level: 82, color: "data-orange" },
    { name: "Data Visualization", level: 87, color: "data-blue" },
    { name: "Statistical Analysis", level: 85, color: "data-green" },
  ];

  const tools = [
    "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
    "Matplotlib", "Seaborn", "Plotly", "Jupyter",
    "Git", "Docker", "AWS", "Tableau"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full gradient-primary"></div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-muted"
                    />
                    <div 
                      className="absolute top-0 left-0 h-3 gradient-primary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full gradient-secondary"></div>
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div 
                    key={tool}
                    className="px-4 py-3 bg-muted/50 rounded-lg text-center hover:bg-muted/70 transition-colors cursor-default border border-border/30"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specializations */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Supervised & unsupervised learning, deep learning, and model optimization
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-12 h-12 mx-auto mb-4 gradient-secondary rounded-full flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
              <p className="text-muted-foreground">
                Interactive dashboards, statistical charts, and compelling data stories
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-12 h-12 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Statistical Analysis</h3>
              <p className="text-muted-foreground">
                Hypothesis testing, regression analysis, and predictive modeling
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Globe, Code, TrendingUp } from "lucide-react";

const skills = [
  { icon: Globe, label: "University Website Development", desc: "Building and managing academic web platforms" },
  { icon: Code, label: "Programming Fundamentals", desc: "Solid foundation in core programming concepts" },
  { icon: TrendingUp, label: "Basic Economics Knowledge", desc: "Understanding of economic principles and analysis" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding section-alt">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 title-gradient title-accent-bar">What I Do</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((s) => (
          <div
            key={s.label}
            className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mx-auto mb-5">
              <s.icon className="text-accent-foreground" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

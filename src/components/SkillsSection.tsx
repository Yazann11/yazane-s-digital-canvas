import { Globe, Code, TrendingUp } from "lucide-react";
import { backgrounds } from "@/lib/backgrounds";

const skills = [
  { icon: Globe, label: "University Website Development", desc: "Building and managing academic web platforms" },
  { icon: Code, label: "Programming Fundamentals", desc: "Solid foundation in core programming concepts" },
  { icon: TrendingUp, label: "Basic Economics Knowledge", desc: "Understanding of economic principles and analysis" },
];

const SkillsSection = () => (
  <section id="skills" className="relative section-padding section-alt overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-12"
      style={{ backgroundImage: `url(${backgrounds.skills})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Skills</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
          What <span className="text-primary">I Do</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {skills.map((s) => (
          <div
            key={s.label}
            className="group bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={18} />
            </div>
            <h3 className="font-heading font-semibold text-sm text-foreground mb-2">{s.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
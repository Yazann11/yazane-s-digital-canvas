import { ExternalLink } from "lucide-react";
import { backgrounds } from "@/lib/backgrounds";

const ProjectsSection = () => (
  <section id="projects" className="relative section-padding section-alt overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-12"
      style={{ backgroundImage: `url(${backgrounds.projects})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Projects</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
          My <span className="text-primary">Work</span>
        </h2>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">University Website Project</h3>
          <ExternalLink className="text-muted-foreground" size={14} />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          Developed a university website to manage and present academic information.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["HTML", "CSS", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
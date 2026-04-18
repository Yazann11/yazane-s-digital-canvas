import { ExternalLink } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding section-alt">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Projects</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 title-gradient title-accent-bar">My Work</h2>
      </div>

      <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-xl font-semibold text-foreground">University Website Project</h3>
          <ExternalLink className="text-muted-foreground" size={18} />
        </div>
        <p className="text-muted-foreground mb-5 leading-relaxed">
          Developed a university website to manage and present academic information.
        </p>
        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
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

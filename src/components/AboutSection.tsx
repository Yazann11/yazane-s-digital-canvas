import { User, ArrowRight } from "lucide-react";
import { backgrounds } from "@/lib/backgrounds";

const AboutSection = () => (
  <section id="about" className="relative section-padding overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 dark:opacity-15"
      style={{ backgroundImage: `url(${backgrounds.about})` }}
      aria-hidden="true"
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        <div className="md:col-span-2 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <User size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.15em]">About</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Who <span className="text-primary">I Am</span>
          </h2>
        </div>
        <div className="md:col-span-3 animate-fade-in-up-delay-1">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            I am a software engineering student studying at a German university. I have experience building
            university-level web projects and a background in economics. I enjoy solving problems and creating
            useful digital solutions.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View my work <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
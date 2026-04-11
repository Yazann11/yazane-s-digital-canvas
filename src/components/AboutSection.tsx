import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 text-primary mb-4 animate-fade-in-up">
        <User size={20} />
        <span className="text-sm font-semibold uppercase tracking-wider">About Me</span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up-delay-1">
        Who I Am
      </h2>
      <p className="text-muted-foreground leading-relaxed text-lg animate-fade-in-up-delay-2">
        I am a software engineering student studying at a German university. I have experience building
        university-level web projects and a background in economics. I enjoy solving problems and creating
        useful digital solutions.
      </p>
    </div>
  </section>
);

export default AboutSection;

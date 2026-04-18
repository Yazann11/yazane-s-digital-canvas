import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Education</span>
      <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-12 title-gradient title-accent-bar">My Background</h2>

      <div className="bg-card rounded-xl p-8 shadow-sm border border-border inline-flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
          <GraduationCap className="text-accent-foreground" size={24} />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-foreground text-lg">Software Engineering Student</h3>
          <p className="text-muted-foreground mt-1">German University · Details to be updated</p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

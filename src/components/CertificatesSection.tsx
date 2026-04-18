import { Award } from "lucide-react";

const CertificatesSection = () => (
  <section id="certificates" className="section-padding">
    <div className="container max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Certificates</span>
      <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-12 title-gradient title-accent-bar">Achievements</h2>

      <div className="bg-card rounded-xl p-8 shadow-sm border border-border inline-flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
          <Award className="text-accent-foreground" size={24} />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-foreground text-lg">Economics Certificate</h3>
          <p className="text-muted-foreground mt-1">Details to be added later</p>
        </div>
      </div>
    </div>
  </section>
);

export default CertificatesSection;

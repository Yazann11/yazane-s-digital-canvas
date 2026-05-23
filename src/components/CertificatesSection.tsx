import { Award } from "lucide-react";
import { backgrounds } from "@/lib/backgrounds";

const CertificatesSection = () => (
  <section id="certificates" className="relative section-padding overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 dark:opacity-15"
      style={{ backgroundImage: `url(${backgrounds.certificates})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Certificates</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            <span className="text-primary">Achievements</span>
          </h2>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="text-primary" size={18} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm text-foreground">Economics Certificate</h3>
              <p className="text-xs text-muted-foreground mt-1">Details to be added later</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificatesSection;
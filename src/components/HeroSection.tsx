import { ArrowDown } from "lucide-react";
import avatar from "@/assets/profile-photo.jpg";
import { backgrounds } from "@/lib/backgrounds";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden"
  >
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
      style={{ backgroundImage: `url(${backgrounds.hero})` }}
      aria-hidden="true"
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" aria-hidden="true" />

    {/* Subtle forest-green accent glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/3 blur-[120px] pointer-events-none" aria-hidden="true" />

    <div className="container py-16 animate-fade-in-up relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-14 max-w-5xl mx-auto">
        <div className="relative shrink-0">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 blur-md opacity-70" aria-hidden="true" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true" />
          <img
            src={avatar}
            alt="Black panther with green eyes"
            width={280}
            height={280}
            className="h-64 w-64 md:h-72 md:w-72 rounded-xl object-cover ring-2 ring-primary/20 shadow-lg shadow-primary/10 relative"
          />
        </div>
        <div className="flex-1 min-w-0 text-center md:text-left">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-2">Hello, I'm</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-2">
            Yazane <span className="text-primary">Fares</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Junior Web Developer
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-md leading-relaxed mb-6">
            Software engineering student focused on building modern and efficient web applications.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
          >
            Get in Touch
            <ArrowDown size={12} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
import { ArrowDown } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-16"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="container py-16 animate-fade-in-up text-center max-w-3xl">
      <img
        src={avatar}
        alt="Yazane Fares avatar"
        width={160}
        height={160}
        className="mx-auto mb-6 h-40 w-40 rounded-full object-cover ring-4 ring-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
      />
      <p className="text-primary font-medium mb-3">Hello, I'm</p>
      <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight mb-4 title-gradient">
        Yazane Fares
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
        Junior Web Developer
      </p>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
        I am a passionate software engineering student focused on building modern and efficient web applications.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Get in Touch
        <ArrowDown size={16} />
      </a>
    </div>
  </section>
);

export default HeroSection;

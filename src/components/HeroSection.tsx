import profileImg from "@/assets/profile-placeholder.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center pt-16"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="container flex flex-col md:flex-row items-center gap-12 py-16">
      <div className="flex-1 text-center md:text-left animate-fade-in-up">
        <p className="text-primary font-medium mb-2">Hello, I'm</p>
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight mb-4 title-gradient">
          Yazane Fares
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
          Junior Web Developer
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
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

      <div className="flex-shrink-0 animate-fade-in-up-delay-2">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <img
            src={profileImg}
            alt="Yazane Fares"
            width={512}
            height={512}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

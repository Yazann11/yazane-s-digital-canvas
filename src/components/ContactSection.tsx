import { Mail, Github, Linkedin } from "lucide-react";
import { backgrounds } from "@/lib/backgrounds";

const contacts = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com" },
];

const ContactSection = () => (
  <section id="contact" className="relative section-padding section-alt overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-12"
      style={{ backgroundImage: `url(${backgrounds.contact})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Contact</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
          Get in <span className="text-primary">Touch</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-lg p-5 border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <c.icon className="text-primary" size={16} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-foreground">{c.label}</h3>
              <p className="text-[11px] text-muted-foreground truncate">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
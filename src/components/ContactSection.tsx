import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding section-alt">
    <div className="container max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
      <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-12 title-gradient title-accent-bar">Get in Touch</h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <c.icon className="text-accent-foreground" size={20} />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-sm">{c.label}</h3>
            <p className="text-xs text-muted-foreground">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

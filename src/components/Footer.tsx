import { backgrounds } from "@/lib/backgrounds";

const Footer = () => (
  <footer className="relative py-10 border-t border-border overflow-hidden">
    {/* Dark forest photo background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-10"
      style={{ backgroundImage: `url(${backgrounds.footer})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80" aria-hidden="true" />

    <div className="container max-w-5xl relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-heading text-sm font-bold tracking-tight">
          YF
        </a>
        <p className="text-[11px] text-muted-foreground">
          &copy; {new Date().getFullYear()} Yazane Fares. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
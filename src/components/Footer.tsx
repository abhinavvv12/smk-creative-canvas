import { Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "Brand Identity", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Creative Design", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-espresso-light border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold text-gold">
                SMK
              </span>
              <span className="text-lg font-body text-foreground/80 ml-2 tracking-widest uppercase">
                Creatives
              </span>
            </a>
            <p className="text-foreground/60 max-w-md leading-relaxed mb-8">
              A distinguished creative marketing agency dedicated to crafting 
              exceptional brand experiences that captivate and inspire.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border/50 text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors duration-300"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} SMK Creatives. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/50">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

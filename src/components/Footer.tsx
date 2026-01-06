import { Instagram, Linkedin, Twitter } from "lucide-react";
import smkLogo from "@/assets/smk-logo.png";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Brand Identity", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Social Media", href: "#services" },
    { label: "Web Design", href: "#services" },
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
            <a href="#home" className="inline-flex items-center gap-4 mb-6 group">
              <div 
                className="w-14 h-14 rounded-full"
                style={{
                  background: `url(${smkLogo}) center/contain no-repeat`,
                  maskImage: 'radial-gradient(circle, black 35%, transparent 65%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 65%)',
                }}
              />
              <div>
                <span className="text-2xl font-display font-semibold text-gold group-hover:text-gold-light transition-colors">
                  SMK
                </span>
                <span className="text-lg font-body text-foreground/80 ml-2 tracking-widest uppercase">
                  Creatives
                </span>
              </div>
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
                  className="w-10 h-10 flex items-center justify-center border border-border/50 rounded-lg text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors duration-300"
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

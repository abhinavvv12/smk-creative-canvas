import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Palette, Globe, TrendingUp, Camera, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    price: "£385",
    icon: Zap,
    highlight: false,
    features: [
      "Promotional Posters (2)",
      "Weekly Content Ideas",
      "Mini Campaign (discount/promo/event idea)",
      "Platform audit and refresh (1)",
      "Marketing Analytics summary",
      "One week deliverables",
    ],
  },
  {
    name: "Growth",
    price: "£750",
    icon: Star,
    highlight: true,
    features: [
      "Promotional Posters (4)",
      "Social media posts (graphics+captions)",
      "30-Day Content Calendar",
      "Mini Campaign (2)",
      "Full Website refresh",
      "Full Marketing Analytics report",
      "One week deliverables",
    ],
  },
  {
    name: "Premium",
    price: "£1200",
    icon: Crown,
    highlight: false,
    features: [
      "Promotional Posters (6)",
      "10 social posts + 5 reel scripts",
      "30-Day content calendar",
      "Mini Campaign (4)",
      "Complete audit and refresh of all platforms",
      "Performance Tracking Dashboard",
      "Priority Delivery",
    ],
  },
];

const otherServices = [
  { name: "Logo customisation", price: "£30", icon: Palette },
  { name: "Poster Design", price: "£55", icon: Camera },
  { name: "Social Post", price: "£25", icon: TrendingUp },
  { name: "Full website build", price: "£350 - £500", icon: Globe },
  { name: "Monthly social management", price: "£300 - £600", icon: BarChart3 },
  { name: "Google Profile Optimisation", price: "£60", icon: TrendingUp },
];

export const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, hsl(var(--gold)) 0%, transparent 50%)`
          }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4">
            Choose Your <span className="italic text-gold">Package</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Flexible solutions tailored to elevate your brand at every stage of growth
          </p>
        </motion.div>

        {/* Package Cards - Creative Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative group ${pkg.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-espresso text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div 
                  className={`h-full p-8 rounded-2xl border transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-xl group-hover:shadow-gold/10
                    ${pkg.highlight 
                      ? 'bg-gradient-to-br from-espresso-light via-espresso to-espresso-dark border-gold/30' 
                      : 'bg-espresso-dark border-border/30'
                    }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                    ${pkg.highlight ? 'bg-gold/20' : 'bg-gold/10'}`}>
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>

                  {/* Package Name */}
                  <h3 className="font-display text-2xl text-cream mb-2">{pkg.name}</h3>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-display text-gold">{pkg.price}</span>
                    <span className="text-foreground/50 ml-2">one-time</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-foreground/70">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={pkg.highlight ? "gold" : "gold-outline"} 
                    className="w-full"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Services - Horizontal Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
              Additional <span className="italic text-gold">Services</span>
            </h3>
            <p className="text-foreground/50 text-sm">À la carte options for your specific needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {otherServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 bg-espresso-light/50 rounded-xl border border-border/20 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-cream font-medium text-sm">{service.name}</h4>
                    <p className="text-gold text-sm font-semibold">{service.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-foreground/40 italic text-sm mt-8">
            *Contact us for custom quotes and enterprise solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

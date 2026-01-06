import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, TrendingUp, Globe, Megaphone, Instagram, BarChart3 } from "lucide-react";
import digitalMarketingVisual from "@/assets/digital-marketing-visual.jpg";
import socialMediaVisual from "@/assets/social-media-visual.jpg";
import websiteDesignVisual from "@/assets/website-design-visual.jpg";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Creating distinctive visual identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth, engagement, and measurable results for your brand.",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description: "Building authentic connections and growing your presence across all major platforms.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Crafting stunning, responsive websites that convert visitors into loyal customers.",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Developing compelling content that tells your story and engages your target audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven strategies to optimize performance and maximize your marketing ROI.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4">
              Our <span className="italic text-gold">Services</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Comprehensive solutions to elevate your brand presence and drive meaningful results
            </p>
          </motion.div>

          {/* Visual Showcase - Asymmetric Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-12 gap-4 md:gap-6">
              {/* Large Image - Digital Marketing */}
              <div className="md:col-span-7 relative group overflow-hidden rounded-2xl">
                <img 
                  src={digitalMarketingVisual} 
                  alt="Digital Marketing Services" 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-gold text-xs tracking-widest uppercase mb-2 block">Featured</span>
                  <h3 className="text-2xl font-display text-cream">Digital Marketing Excellence</h3>
                </div>
              </div>

              {/* Right Column - Two smaller images */}
              <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
                <div className="relative group overflow-hidden rounded-2xl flex-1">
                  <img 
                    src={socialMediaVisual} 
                    alt="Social Media Growth" 
                    className="w-full h-36 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-display text-cream">Social Media Growth</h3>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl flex-1">
                  <img 
                    src={websiteDesignVisual} 
                    alt="Website Design & Branding" 
                    className="w-full h-36 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-display text-cream">Website & Branding</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-espresso-light/50 border border-border/20 rounded-xl hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                    <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-lg mb-6 group-hover:bg-gold/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-display text-cream mb-3">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

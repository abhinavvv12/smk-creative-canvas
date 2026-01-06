import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, TrendingUp, Globe, Megaphone, Instagram, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import creativeDigitalMarketing from "@/assets/creative-digital-marketing.jpg";
import creativeSocialMedia from "@/assets/creative-social-media.jpg";
import creativeWebDesign from "@/assets/creative-web-design.jpg";
import creativeContent from "@/assets/creative-content.jpg";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that resonate",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description: "Building authentic connections",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Stunning responsive websites",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Compelling stories that engage",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Data-driven optimization",
    color: "from-violet-500/20 to-indigo-500/20",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                  What We Do
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight">
                  Creative <span className="italic text-gold">Solutions</span>
                  <br />
                  <span className="text-foreground/60">That Drive Results</span>
                </h2>
              </div>
              <div className="lg:text-right">
                <p className="text-foreground/60 max-w-md lg:ml-auto mb-6">
                  We craft premium marketing experiences that elevate brands and captivate audiences through innovative design and strategic thinking.
                </p>
                <Button 
                  variant="gold-outline" 
                  className="group"
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Packages
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Creative Bento Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Large Feature Card - Digital Marketing */}
              <div className="col-span-12 md:col-span-8 relative group overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
                <img 
                  src={creativeDigitalMarketing} 
                  alt="Digital Marketing Services" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-xs tracking-widest uppercase mb-4">
                      Featured Service
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display text-cream mb-3">
                      Digital Marketing <span className="italic">Excellence</span>
                    </h3>
                    <p className="text-cream/70 max-w-md text-lg">
                      Data-driven strategies that amplify your brand presence and drive measurable growth across all digital channels.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Stacked Cards - Right Column */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
                {/* Social Media Card */}
                <div className="relative group overflow-hidden rounded-3xl h-[240px] flex-1">
                  <img 
                    src={creativeSocialMedia} 
                    alt="Social Media Growth" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Instagram className="w-5 h-5 text-gold" />
                      <span className="text-gold text-xs tracking-widest uppercase">Social</span>
                    </div>
                    <h3 className="text-xl font-display text-cream">Social Media Growth</h3>
                  </div>
                </div>

                {/* Web Design Card */}
                <div className="relative group overflow-hidden rounded-3xl h-[240px] flex-1">
                  <img 
                    src={creativeWebDesign} 
                    alt="Website Design & Branding" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-gold" />
                      <span className="text-gold text-xs tracking-widest uppercase">Web</span>
                    </div>
                    <h3 className="text-xl font-display text-cream">Website & Branding</h3>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Content Strategy */}
              <div className="col-span-12 md:col-span-5 relative group overflow-hidden rounded-3xl h-[280px]">
                <img 
                  src={creativeContent} 
                  alt="Content Strategy" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Megaphone className="w-5 h-5 text-gold" />
                    <span className="text-gold text-xs tracking-widest uppercase">Content</span>
                  </div>
                  <h3 className="text-2xl font-display text-cream mb-2">Content Strategy</h3>
                  <p className="text-cream/60 text-sm">Compelling narratives that resonate with your audience</p>
                </div>
              </div>

              {/* Services Quick Grid */}
              <div className="col-span-12 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="group"
                    >
                      <div className={`h-full p-5 rounded-2xl bg-gradient-to-br ${service.color} border border-border/20 hover:border-gold/40 transition-all duration-500 hover:shadow-lg hover:shadow-gold/10 backdrop-blur-sm`}>
                        <div className="w-10 h-10 flex items-center justify-center bg-espresso/50 rounded-xl mb-3 group-hover:bg-gold/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-gold" />
                        </div>
                        <h4 className="font-display text-cream text-sm mb-1">{service.title}</h4>
                        <p className="text-foreground/50 text-xs">{service.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Marquee-style scrolling text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="overflow-hidden py-8 border-t border-b border-border/20"
          >
            <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  {["Brand Strategy", "Visual Design", "Social Growth", "Web Development", "Content Creation", "Analytics"].map((item, idx) => (
                    <span key={idx} className="flex items-center gap-4">
                      <span className="text-2xl md:text-3xl font-display text-foreground/20">{item}</span>
                      <span className="text-gold">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Target, Megaphone, Camera, PenTool, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Comprehensive brand development that captures your essence and distinguishes you in the marketplace.",
  },
  {
    icon: Target,
    title: "Strategic Marketing",
    description:
      "Data-driven strategies that align with your vision and deliver measurable results.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    description:
      "Engaging digital experiences that connect with your audience across all platforms.",
  },
  {
    icon: Camera,
    title: "Visual Production",
    description:
      "Premium photography and videography that tells your story with artistic excellence.",
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description:
      "Bespoke design solutions that combine aesthetics with functionality for lasting impact.",
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description:
      "Expert guidance to scale your brand presence and maximize market potential.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-espresso">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
              Premium <span className="italic text-gold">Solutions</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We offer a comprehensive suite of creative services designed to 
              elevate your brand and drive exceptional results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-espresso-light border border-border/50 hover:border-gold/30 transition-all duration-500 hover:bg-espresso-medium">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 border border-gold/30 group-hover:bg-gold/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

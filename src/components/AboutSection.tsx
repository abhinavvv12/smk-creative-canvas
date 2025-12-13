import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-espresso-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight mb-6">
                Where Vision
                <br />
                <span className="italic text-gold">Meets Mastery</span>
              </h2>
              <div className="w-20 h-px bg-gold mb-8" />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-foreground/80 text-lg leading-relaxed">
                SMK Creatives is a distinguished creative marketing agency that 
                transforms brands into compelling narratives. With a dedication to 
                excellence and an eye for detail, we craft experiences that resonate 
                deeply with discerning audiences.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Our team of strategists, designers, and storytellers work in harmony 
                to deliver campaigns that not only capture attention but also drive 
                meaningful results. We believe in the power of thoughtful creativity 
                to elevate brands beyond the ordinary.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Every project we undertake is treated as a unique opportunity to 
                create something extraordinary. From concept to execution, we ensure 
                every detail reflects the premium quality your brand deserves.
              </p>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "12", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "45+", label: "Industry Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

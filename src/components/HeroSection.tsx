import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import smkLogo from "@/assets/smk-logo-blended.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-light to-espresso" />
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - Organically embedded */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4 relative"
          >
            {/* Outer diffused glow layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(180,150,100,0.08) 0%, rgba(180,150,100,0.03) 40%, transparent 70%)'
                }}
              />
            </div>
            
            {/* Inner soft glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(200,180,140,0.06) 0%, transparent 60%)'
                }}
              />
            </div>
            
            {/* Logo with seamless blending */}
            <img 
              src={smkLogo} 
              alt="SMK Creatives Logo" 
              className="w-40 h-40 md:w-56 md:h-56 mx-auto object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(180, 150, 100, 0.08)) drop-shadow(0 0 80px rgba(180, 150, 100, 0.04))',
                opacity: 0.95,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold text-lg mb-6 font-bold">
              Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-8"
          >
            Crafting{" "}
            <span className="italic text-gold">Exceptional</span>
            <br />
            Brand Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            We blend artistry with strategy to create premium marketing solutions 
            that elevate brands and captivate audiences. Where creativity meets excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <Button 
              variant="gold" 
              size="xl" 
              className="group"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

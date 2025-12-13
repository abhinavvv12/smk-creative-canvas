import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SMK Creatives transformed our brand with unparalleled elegance. Their attention to detail and creative vision exceeded all expectations.",
    author: "Alexandra Chen",
    role: "CEO, Lumière Beauty",
  },
  {
    quote:
      "Working with SMK was a revelation. They understood our vision instantly and delivered a campaign that truly captured our essence.",
    author: "Marcus Rothwell",
    role: "Founder, Heritage Estates",
  },
  {
    quote:
      "The level of sophistication and strategic thinking they brought to our rebrand was remarkable. A truly premium experience.",
    author: "Victoria Ashford",
    role: "Director, Ashford Gallery",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-espresso-light">
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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium">
              Client <span className="italic text-gold">Experiences</span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="h-full p-8 bg-espresso border border-border/30">
                  <Quote className="w-8 h-8 text-gold/30 mb-6" />
                  <blockquote className="text-foreground/80 leading-relaxed mb-8 text-lg italic font-light">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border/30 pt-6">
                    <div className="font-display text-gold">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-foreground/50 mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

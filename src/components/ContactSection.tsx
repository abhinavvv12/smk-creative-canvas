import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-espresso">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
                Let's Create
                <br />
                <span className="italic text-gold">Together</span>
              </h2>
              <p className="text-foreground/60 mb-12 leading-relaxed">
                Ready to elevate your brand? We'd love to hear from you. 
                Reach out to discuss your vision and discover how we can 
                bring it to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 uppercase tracking-wide">
                      Location
                    </div>
                    <div className="text-foreground/80">
                      123 Creative Avenue, Design District
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 uppercase tracking-wide">
                      Phone
                    </div>
                    <div className="text-foreground/80">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 uppercase tracking-wide">
                      Email
                    </div>
                    <div className="text-foreground/80">hello@smkcreatives.com</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <Input
                      type="text"
                      required
                      className="bg-espresso-light border-border/50 focus:border-gold text-foreground placeholder:text-foreground/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      className="bg-espresso-light border-border/50 focus:border-gold text-foreground placeholder:text-foreground/30"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground/60 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <Input
                    type="text"
                    required
                    className="bg-espresso-light border-border/50 focus:border-gold text-foreground placeholder:text-foreground/30"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground/60 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={5}
                    className="bg-espresso-light border-border/50 focus:border-gold text-foreground placeholder:text-foreground/30 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

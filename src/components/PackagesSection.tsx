import { motion } from "framer-motion";

const packages = [
  {
    name: "Package One",
    price: "£385",
    features: [
      "Promotional Posters (2)",
      "Weekly Content Ideas",
      "Mini Campaign (discount/promo/event idea)",
      "Platform audit and refresh (1) (instagram/website/tiktok)",
      "Marketing Analytics summary",
      "One week deliverables",
    ],
  },
  {
    name: "Package Two",
    price: "£750",
    features: [
      "Promotional Posters (4)",
      "Social media posts (graphics+captions)",
      "30-Day Content Calendar",
      "Mini Campaign (2) (discount/promo/event idea)",
      "Full Website refresh",
      "Full Marketing Analytics report",
      "One week deliverables",
    ],
    popular: true,
  },
  {
    name: "Package Three",
    price: "£1200",
    features: [
      "Promotional Posters (6)",
      "10 social posts + 5 reel scripts",
      "30-Day content calendar",
      "Mini Campaign (4) (discount/promo/event idea)",
      "Complete audit and refresh of all social platforms (instagram+website+tiktok)",
      "Performance Tracking Dashboard + analytics report",
      "Priority Delivery",
    ],
  },
];

const otherServices = [
  { name: "Logo customisation", price: "£30" },
  { name: "Poster", price: "£55" },
  { name: "Social Post", price: "£25" },
  { name: "Full website build", price: "£350 - £500" },
  { name: "Monthly social management", price: "£300 - £600" },
  { name: "Google Profile Optimisation", price: "£60" },
  { name: "Event Campaign setup", price: "£120" },
];

const ElevateWatermark = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div className="flex flex-col gap-2">
      {Array.from({ length: 12 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-between">
          {Array.from({ length: 3 }).map((_, colIndex) => (
            <span
              key={colIndex}
              className="font-display text-2xl md:text-4xl font-bold tracking-wider text-gold/30"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ELEVATE
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Our Packages
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Package Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-espresso-dark rounded-lg overflow-hidden"
            >
              <ElevateWatermark />
              
              <div className="relative z-10 p-8 md:p-12">
                {/* Top divider */}
                <div className="w-48 h-0.5 bg-gold/50 mx-auto mb-8" />
                
                {/* Package Title */}
                <h3 className="font-display text-2xl md:text-3xl italic text-cream text-center mb-2">
                  {pkg.name}
                </h3>
                
                {/* Price */}
                <p className="text-xl md:text-2xl text-cream/90 text-center mb-8 font-light">
                  {pkg.price}
                </p>
                
                {/* Features List */}
                <ol className="space-y-3 max-w-md mx-auto">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-cream/80 text-base md:text-lg"
                    >
                      <span className="text-cream">{featureIndex + 1}.</span>{" "}
                      {feature}
                    </li>
                  ))}
                </ol>
                
                {/* Bottom divider */}
                <div className="w-48 h-0.5 bg-gold/50 mx-auto mt-8" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-espresso rounded-lg p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl italic text-cream text-center mb-2">
              Other
            </h3>
            <h3 className="font-display text-3xl md:text-4xl text-cream text-center mb-10">
              Services
            </h3>
            
            <ol className="space-y-4 max-w-lg mx-auto">
              {otherServices.map((service, index) => (
                <li
                  key={index}
                  className="text-cream/90 text-base md:text-lg"
                >
                  <span className="text-cream">{index + 1}.</span>{" "}
                  {service.name} – <span className="text-gold">{service.price}</span>
                </li>
              ))}
            </ol>
            
            <p className="text-cream/60 italic text-right mt-8 text-sm">
              *contact us for more information
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

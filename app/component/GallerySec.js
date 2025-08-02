import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 0.3,
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export const  GallerySection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 md:px-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          variants={textVariants}
          className="text-3xl md:text-4xl font-light text-center mb-12 uppercase tracking-wide"
        >
          Our Salon Gallery
        </motion.h2>

        {/* Full-width Image */}
        <motion.div 
          variants={imageVariants}
          className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/images/salon-interior.jpg" // Replace with your image
            alt="Salon Interior"
            fill
            className="object-cover"
          />
          {/* Text Overlay */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
          >
            <motion.div 
              variants={textVariants}
              className="text-center p-6"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                Luxurious Interior
              </h3>
              <p className="text-white opacity-90 max-w-md">
                Experience our elegant and comfortable salon environment designed for your relaxation
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Two Half-width Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Half-width Image */}
          <motion.div 
            variants={imageVariants}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hair-service.jpg" // Replace with your image
              alt="Hair Service"
              fill
              className="object-cover"
            />
            {/* Text Overlay */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6"
            >
              <motion.div 
                variants={textVariants}
              >
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Expert Hair Services
                </h3>
                <p className="text-white opacity-90 text-sm">
                  Precision cuts and stunning color transformations
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-lavender-600 text-white px-4 py-2 text-xs uppercase tracking-wider rounded"
                >
                  View Services
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Second Half-width Image */}
          <motion.div 
            variants={imageVariants}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/spa-treatment.jpg" // Replace with your image
              alt="Spa Treatment"
              fill
              className="object-cover"
            />
            {/* Text Overlay */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6"
            >
              <motion.div 
                variants={textVariants}
              >
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Relaxing Spa Treatments
                </h3>
                <p className="text-white opacity-90 text-sm">
                  Rejuvenate with our luxurious facial and massage therapies
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-lavender-600 text-white px-4 py-2 text-xs uppercase tracking-wider rounded"
                >
                  Book Now
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


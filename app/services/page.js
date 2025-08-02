"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1, 
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const ServiceCategoryCard = ({ title, services, image, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Image Section - Full Width */}
      <div className="relative h-72 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-light text-white">
          {title}
        </h3>
      </div>
      
      {/* Text Content Section */}
      <div className="p-6 flex flex-col h-full">
        {/* Preview Services */}
        <ul className="space-y-3 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <li key={i} className="flex items-start">
              <span className="text-lavender-600 mr-3 mt-1 text-xs">○</span>
              <span className="text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
        
        {/* Expanded Services */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-sm font-medium text-gray-500 mb-3">FULL SERVICE MENU</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.slice(3).map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-lavender-600 mr-3 mt-1 text-xs">○</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
        {/* Action Buttons */}
        <div className="mt-auto flex justify-between items-center">
          <button className="text-lavender-600 hover:text-lavender-800 text-sm font-medium flex items-center transition-colors">
            Book Now
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {services.length > 3 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-lavender-600 hover:text-lavender-800 text-sm font-medium flex items-center transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <FiChevronUp className="ml-1" />
                </>
              ) : (
                <>
                  View All {services.length} Services
                  <FiChevronDown className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const serviceCategories = [
    // ... (same service categories array as before)
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px]">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 z-20"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 uppercase tracking-wider">
              Our Services
            </h1>
            <div className="w-24 h-0.5 bg-lavender-400 mx-auto mb-8"></div>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Where artistry meets luxury in every treatment
            </p>
          </motion.div>
        </div>
        <Image
          src="/images/services/services-hero.jpg"
          alt="Salon Services"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </section>

      {/* Introduction */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 px-4 md:px-8 max-w-6xl mx-auto text-center"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-light text-gray-900 mb-8 uppercase tracking-wide"
        >
          Curated Beauty Experiences
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg"
        >
          Our comprehensive menu of services is designed to pamper, transform, and elevate your natural beauty. 
          Each treatment is an experience crafted with precision and care.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <ServiceCategoryCard 
              key={index}
              title={category.title}
              services={category.services}
              image={category.image}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      {/* Pricing CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-24 bg-lavender-50"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
          >
            Tailored Beauty Packages
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let us create a personalized beauty journey just for you. Our experts will design the perfect combination of services.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-lavender-600 text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-lavender-700 transition-all duration-300 shadow-md"
            >
              Request Consultation
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-lavender-600 text-lavender-600 px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-white transition-all duration-300 shadow-md"
            >
              View Full Menu
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Signature Services */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-light text-center mb-16 uppercase tracking-wide">
            Signature Experiences
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/services/signature-1.jpg"
                  alt="Luxury Hair Ritual"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-light mb-3">Lavender Hair Ritual</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Our 120-minute transformative hair treatment combining keratin therapy with lavender-infused oils.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/services/signature-2.jpg"
                  alt="Diamond Facial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-light mb-3">Diamond Luminescence Facial</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A 90-minute premium facial using diamond-tipped microdermabrasion and gold-infused serums.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/services/signature-3.jpg"
                  alt="Royal Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-light mb-3">Royal Spa Journey</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A 3-hour immersive experience including full-body treatment, massage, and personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
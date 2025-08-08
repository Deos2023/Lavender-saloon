"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Animation Variants (same as services page)
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

// Service Card Component (same as services page)
const ServiceCategoryCard = ({ title, services, image, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg rounded-xl overflow-hidden p-4 md:p-8 transition-all duration-300 ${!isImageLeft ? 'md:flex-row-reverse' : ''}`}
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full md:w-1/2 h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-light text-gray-900 mb-4 uppercase tracking-wide">{title}</h3>

        <ul className="space-y-2 mb-4">
          {services.slice(0, 3).map((service, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-purple-600 mr-2 mt-1 text-xs">○</span>
              {service}
            </li>
          ))}
        </ul>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <h4 className="text-sm font-medium text-gray-500 mb-2">FULL SERVICE MENU</h4>
            <ul className="grid grid-cols-1 gap-2">
              {services.slice(3).map((service, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 mt-1 text-xs">○</span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="flex justify-between items-center">
          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center transition-colors">
            Book Now
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {services.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <FiChevronUp className="ml-1" />
                </>
              ) : (
                <>
                  View All {services.length} Services <FiChevronDown className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Beauty Services Data
const beautyCategories = [
  {
    title: "Basic Services",
    services: [
      "Basic Facial",
      "Eye Brow Threading",
      "Upper Lip / Chin Threading",
      "D-Tan",
      "Face Clean Up (Basic)",
      "Face Clean Up (Advanced)",
      "Blackhead Removal Clean Up",
      "Eye Care Brightening Treatment"
    ],  
    image: "/basic.jpg"
  },
  {
    title: "Skin Rituals - Regular",
    services: [
      "Insta Glow Facial",
      "Insta Fair Facial",
      "Radiance Facial",
      "Whitening Facial",
      "Brightening Facial",
      "Fruit Facial",
      "Purifying Facial"
    ],
    image: "/face.png"
  },
  {
    title: "Skin Rituals - Advanced",
    services: [
      "Anti-Acne Treatment",
      "Anti-Pigmentation Treatment",
      "Anti-Aging Facial Treatment",
      "Aqua Facial",
      "Silver Facial",
      "Pearl Facial",
      "Gold Facial"
    ],
    image: "/skin2.jpg"
  },
  {
    title: "Skin Rituals - Premium",
    services: [
      "Detox Facial",
      "Gold Radiance Facial",
      "Diamond Glow Facial",
      "Wine Facial",
      "Vitamin-C Facial",
      "Retinol Facial",
      "Basic Hydra Facial"
    ],
    image: "/skin3.jpg"
  },
  {
    title: "Skin Rituals - Luxury",
    services: [
      "Jewel Facial",
      "Preservita Fruit Extract Facial",
      "Dermo-Spa Facial",
      "Ultimo Shine Facial",
      "Pro-Hydra Facial"
    ],
    image: "/skin4.jpg"
  },
  {
    title: "Waxing & Polishing",
    services: [
      "Chest Waxing (Male)",
      "Full Face Brazilian Waxing",
      "Full Face Waxing (Advanced)",
      "Full Leg Waxing",
      "Full Body Waxing",
      "Half Leg Polishing",
      "Full Arms Polishing",
      "Full Back Polishing",
      "Full Leg Polishing",
      "Full Body Polishing"
    ],
    image: "/skin.jpg"
  },
  {
    title: "Pedicure & Manicure",
    services: [
      "Essential Pedicure",
      "Skin Booster Pedicure",
      "Express Pedicure",
      "Luxury Whitening Pedicure",
      "Foot Spa Pedicure",
      "Essential Manicure",
      "Skin Booster Manicure",
      "Express Manicure",
      "Luxury Whitening Pedicure",
      "Hand Spa Manicure"
    ],
    image: "/pedicure.jpg"
  },
  {
    title: "Nail Arts & Piercing",
    services: [
      "Gel Overlap Single Hand",
      "Gel Overlap Both Hands",
      "Glitter/Nail",
      "Nail Polish Both Hands",
      "Nail Arts/Nail",
      "Nail Extension Single Hand",
      "Nail Extension Both Hands",
      "French Manicure",
      "Bridal Design Both Hands",
      "Refilling Both Hands",
      "Chrome Polish Both Hands",
      "Nose Piercing",
      "Both Ear Piercing",
      "Single Ear Piercing"
    ],
    image: "/nail.jpg"
  },
  {
    title: "Makeup & Bridal",
    services: [
      "Hair Do",
      "Party Makeup (Basic)",
      "Party Makeup (Pro)",
      "Pre Bridal Makeup (Indoor)",
      "Pre Bridal Makeup (Outdoor)",
      "Engagement Makeup",
      "Party Makeup for Him",
      "Groom Makeup",
      "Premium Groom Makeup",
      "Luxury Groom Makeup",
      "Kid Makeup",
      "Premium Bridal Makeup",
      "Luxury Bridal Makeup",
      "Platinum Bridal Makeup"
    ],
    image: "/bridal.jpg"
  },
  {
    title: "Mehendi & Extensions",
    services: [
      "Bridal Mehendi",
      "Bridal Mehendi (Full Hands)",
      "Bridal Mehendi (Full Hands & Feet)",
      "Party Mehendi (Single Hand)",
      "Party Mehendi (Both Hands)",
      "Arabic Mehendi Design",
      "Traditional Mehendi Design",
      "Hair Extensions (Basic)",
      "Hair Extensions (Premium)",
      "Hair Extensions (Luxury)"
    ],
    image: "/mehendi.jpg"
  }
];

export default function BeautyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/skin3.jpg" // Different hero image for beauty page
            alt="Lavender Park Beauty Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4"
            >
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 uppercase tracking-wider">
                Beauty Services
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Indulge in our luxurious beauty treatments and rituals
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
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
          Luxurious Beauty Treatments
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg"
        >
          Our beauty services are designed to pamper, rejuvenate, and enhance your natural glow. 
          From facials to bridal makeup, we offer a complete range of treatments using premium 
          products and expert techniques.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {beautyCategories.map((category, index) => (
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

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-24 bg-purple-50"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
          >
            Custom Beauty Packages
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let us create a personalized beauty regimen tailored to your skin type and preferences.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-purple-600 text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Get Personalized Plan
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-white transition-all duration-300 shadow-md"
            >
              View Bridal Packages
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
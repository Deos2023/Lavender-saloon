"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const TeamMember = ({ name, role, image, delay }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-lavender-600 uppercase text-sm tracking-wider">{role}</p>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Master Stylist",
      image: "/images/team1.jpg"
    },
    {
      name: "Rahul Kapoor",
      role: "Color Specialist",
      image: "/images/team2.jpg"
    },
    {
      name: "Ananya Patel",
      role: "Skin Care Expert",
      image: "/images/team3.jpg"
    },
    {
      name: "Vikram Singh",
      role: "Nail Artist",
      image: "/images/team4.jpg"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/5cut.jpeg"
            alt="Lavender Park Salon Team"
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
                Our Story
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Discover the passion, dedication, and artistry behind Lavender Park Salon
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
  className="relative bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4 md:px-10"
>
  {/* Optional Overlay */}
  <div className="absolute inset-0  z-0"></div>

  {/* Content */}
  <div className="max-w-3xl mx-auto text-center md:text-left relative z-10">
    <motion.h2 
      variants={itemVariants}
      className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
    >
      Our Humble Beginnings
    </motion.h2>

    <motion.p 
      variants={itemVariants}
      className="text-gray-600 leading-relaxed mb-4"
    >
      Lavender Park Salon was founded in 2018 with a simple vision: to create a sanctuary where beauty meets wellness, and every guest feels valued and pampered. What started as a small boutique salon in Dankuni has blossomed into a beloved beauty destination serving clients from across the region.
         
    </motion.p>

    <motion.p 
      variants={itemVariants}
      className="text-gray-600 leading-relaxed mb-8"
    >
      Our founder, Priya Sharma, envisioned a space...
    </motion.p>

    {/* Button */}
    <motion.button 
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider"
    >
      Meet Our Team
    </motion.button>
  </div>
</motion.section>


      {/* Mission & Values */}
      <motion.section 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
  className="relative text-white bg-cover bg-center md:bg-fixed py-20 shadow-lg"
  style={{
    backgroundImage: "url('/img/4.jpeg')",
    // fontFamily: 'var(--font-lexendZetta)'
  }}
>
  <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Optional dark overlay */}

  <div className="relative z-10 max-w-6xl mx-auto px-4">
    <motion.h2 
      variants={itemVariants}
      className="text-5xl font-light text-center mb-12 uppercase tracking-wide"
    >
      Our Core Values
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div 
        variants={itemVariants}
        className="bg-white/90 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-3">Excellence in Service</h3>
        <p className="text-gray-700">
          We commit to delivering exceptional quality in every service, using premium products and staying current with industry advancements.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-white/90 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-3">Client-Centered Care</h3>
        <p className="text-gray-700">
          Your comfort, preferences, and satisfaction guide every decision we make. We listen carefully to understand your unique needs.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-white/90 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-3">Sustainable Beauty</h3>
        <p className="text-gray-700">
          We prioritize eco-friendly practices and products that are gentle on both our clients and the environment.
        </p>
      </motion.div>
    </div>
  </div>
</motion.section>


      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" relative bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl text-purple-700 font-bold  text-center mb-4 uppercase tracking-wide"
          >
            Meet Our Artists
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            Our talented team of beauty professionals brings passion, expertise, and creativity to every service.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Salon Experience */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]  relative  bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat "
      >
        {/* Left Image */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full h-full min-h-[400px]"
        >
          <Image
            src="/aboutimg.png"
            alt="Salon Interior"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col justify-center px-8 md:px-20 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-black">
            THE LAVENDER PARK EXPERIENCE
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Step into our thoughtfully designed space where every detail is curated for your comfort and relaxation. From our soothing lavender-infused towels to our ergonomic styling chairs, we've created an environment that pampers all your senses.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-lavender-600 mr-2">✓</span>
              <span className="text-gray-600">Complimentary beverages and snacks</span>
            </li>
            <li className="flex items-start">
              <span className="text-lavender-600 mr-2">✓</span>
              <span className="text-gray-600">Private consultation areas</span>
            </li>
            <li className="flex items-start">
              <span className="text-lavender-600 mr-2">✓</span>
              <span className="text-gray-600">Premium product selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-lavender-600 mr-2">✓</span>
              <span className="text-gray-600">Relaxation lounge</span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Community Involvement */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative bg-white py-16 px-4 md:px-10  bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat "
      >
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
          >
            Giving Back
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-4"
          >
            At Lavender Park Salon, we believe in using our platform to make a positive impact. Each year, we dedicate time and resources to support local initiatives that align with our values of empowerment and wellness.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-8"
          >
            From providing complimentary services to women transitioning out of shelters to hosting fundraising events for local charities, community involvement is at the heart of who we are. We're proud to be more than just a salon—we're a partner in our community's growth and wellbeing.
          </motion.p>

          {/* Button */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider"
          >
            Learn About Our Initiatives
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
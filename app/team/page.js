"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[500px] w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`} />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 transform translate-y-0 group-hover:-translate-y-2">
          <h3 className="text-2xl font-light mb-1">{member.name}</h3>
          <p className="text-lavender-300 uppercase text-sm tracking-wider mb-4">{member.role}</p>
          <p className="text-white/80 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">{member.bio}</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex space-x-4"
          >
            {member.socials.map((social, i) => (
              <a 
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lavender-300 transition-colors"
              >
                {social.icon === 'instagram' && <FiInstagram size={20} />}
                {social.icon === 'twitter' && <FiTwitter size={20} />}
                {social.icon === 'facebook' && <FiFacebook size={20} />}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 bg-white text-lavender-600 px-3 py-1 text-xs uppercase tracking-wider font-medium">
        {member.specialty}
      </div>
    </motion.div>
  );
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      specialty: "Signature Cuts",
      image: "/images/team/priya.jpg",
      bio: "With over 15 years in the industry, Priya brings visionary artistry to every cut. Trained in London and Paris, she specializes in precision cutting and personalized style consultations.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Rahul Kapoor",
      role: "Master Colorist",
      specialty: "Balayage Expert",
      image: "/images/team/rahul.jpg",
      bio: "Rahul's color work has been featured in multiple beauty publications. His specialty is creating dimensional, sun-kissed looks that grow out beautifully.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' },
        { icon: 'facebook', url: 'https://facebook.com' }
      ]
    },
    {
      name: "Ananya Patel",
      role: "Skin Care Specialist",
      specialty: "Facials",
      image: "/images/team/ananya.jpg",
      bio: "Ananya holds advanced certifications in medical aesthetics and holistic skin care. Her treatments combine cutting-edge technology with organic ingredients for radiant results.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' }
      ]
    },
    {
      name: "Vikram Singh",
      role: "Nail Artist",
      specialty: "Gel Extensions",
      image: "/images/team/vikram.jpg",
      bio: "Vikram's intricate nail art has earned him a loyal following. From minimalist designs to bold statements, each set is a wearable masterpiece.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' },
        { icon: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Neha Gupta",
      role: "Bridal Specialist",
      specialty: "Makeup",
      image: "/images/team/neha.jpg",
      bio: "Neha creates timeless bridal looks that enhance natural beauty. Her airbrush technique ensures flawless coverage that lasts all day and photographs beautifully.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' },
        { icon: 'facebook', url: 'https://facebook.com' }
      ]
    },
    {
      name: "Arjun Mehta",
      role: "Men's Grooming",
      specialty: "Beard Styling",
      image: "/images/team/arjun.jpg",
      bio: "Arjun brings barbering expertise with a modern twist. His precision beard sculpting and straight razor shaves are salon favorites.",
      socials: [
        { icon: 'instagram', url: 'https://instagram.com' }
      ]
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 z-20"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 uppercase tracking-wider">
              Our Artists
            </h1>
            <div className="w-24 h-1 bg-lavender-400 mx-auto mb-8"></div>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Meet the talented professionals behind Lavender Park's exceptional service
            </p>
          </motion.div>
        </div>
        <Image
          src="/images/team/team-hero.jpg"
          alt="Salon Team"
          fill
          className="object-cover"
          priority
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
          Crafting Beauty with Passion
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg"
        >
          At Lavender Park Salon, our team comprises award-winning artists who combine technical mastery with creative vision. Each specialist undergoes rigorous training in their craft, ensuring you receive nothing short of excellence.
        </motion.p>
      </motion.section>

      {/* Team Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-lavender-50"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide">
            Ready to Experience Our Artistry?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a consultation with one of our specialists to discuss your personalized beauty plan.
          </p>
          <button className="bg-lavender-600 text-white px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-lavender-700 transition duration-300">
            Book an Appointment
          </button>
        </div>
      </motion.section>
    </main>
  );
}
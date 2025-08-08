'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat text-gray-800 border-t border-lavender/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and About */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Lavender Park Salon" 
                width={160} 
                height={45}
                className="filter brightness-90"
              />
            </div>
            <p className="text-sm text-center md:text-left mb-4">
              Where artistry meets luxury in every treatment. Your premier destination for beauty and grooming.
            </p>
            {/* <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <Link 
                  key={social}
                  href={`https://www.${social}.com`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lavender-600 transition-colors"
                >
                  <Image 
                    src={`/${social}.svg`} 
                    alt={social} 
                    width={20} 
                    height={20}
                    className="filter brightness-75 hover:brightness-100 transition"
                  />
                </Link>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-4 text-lavender-800">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase()}`} 
                    className=" text-base hover:text-lavender-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-4 text-lavender-800">Services</h3>
            <ul className="space-y-2">
              {['Hair', 'Beauty', 'Bridal', 'Spa'].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/${service.toLowerCase()}`} 
                    className="text-sm hover:text-lavender-600 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-4 text-lavender-800">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Beauty Street</p>
              <p>Dankuni, West Bengal 712311</p>
              <p>
                <a href="tel:+919876543210" className="hover:text-lavender-600 transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:info@lavenderparksalon.com" className="hover:text-lavender-600 transition-colors">
                  info@lavenderparksalon.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-lavender/30 my-8"
        />

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="text-center text-sm"
        >
          <p>
            &copy; {currentYear} Lavender Park Salon. All rights reserved. | 
           Website Developed & Maintained by Digital Exposure Online Services
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
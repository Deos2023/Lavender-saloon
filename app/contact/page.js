"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

// Animation variants (same as home page)
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <motion.div 
      variants={fadeIn}
      className="bg-white text-black p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide">Get In Touch</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="coloring">Coloring</option>
            <option value="facial">Facial</option>
            <option value="massage">Massage</option>
            <option value="nail-art">Nail Art</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
          ></textarea>
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-purple-700 text-white px-8 py-3 rounded uppercase tracking-wider hover:bg-purple-800 transition font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const ContactInfoCard = ({ icon, title, info, link }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
    >
      <div className="bg-purple-100 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      {link ? (
        <a href={link} className="text-purple-600 hover:text-purple-800 transition">
          {info}
        </a>
      ) : (
        <p className="text-gray-600">{info}</p>
      )}
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/5cut.jpeg" // Replace with your contact page hero image
            alt="Lavender Park Salon Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4"
            >
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4 uppercase tracking-wider">
                Contact Us
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Reach out to book an appointment or ask us anything
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl text-black font-bold text-center mb-12 uppercase tracking-wide"
          >
            How To Find Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactInfoCard
              icon={<FiMapPin className="text-purple-600 text-2xl" />}
              title="Our Location"
              info="123 Beauty Street, Dankuni, West Bengal 712311"
              link="https://maps.google.com"
            />
            <ContactInfoCard
              icon={<FiPhone className="text-purple-600 text-2xl" />}
              title="Call Us"
              info="+91 98765 43210"
              link="tel:+919876543210"
            />
            <ContactInfoCard
              icon={<FiMail className="text-purple-600 text-2xl" />}
              title="Email Us"
              info="info@lavenderparksalon.com"
              link="mailto:info@lavenderparksalon.com"
            />
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-8 uppercase tracking-wide">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.234567890123!2d88.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Hours Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-purple-50"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl text-black font-bold text-center mb-8 uppercase tracking-wide">Opening Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <FiClock className="text-purple-600 text-2xl mr-4" />
                <div>
                  <h3 className="font-bold text-gray-800">Weekdays</h3>
                  <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiClock className="text-purple-600 text-2xl mr-4" />
                <div>
                  <h3 className="font-bold text-gray-800">Weekends</h3>
                  <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-center md:col-span-2 justify-center">
                <p className="text-gray-600 italic">*Closed on public holidays</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-purple-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-light mb-6 uppercase tracking-wide">Ready To Visit Us?</h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Lavender Park difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-purple-900 px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-md"
            >
              Book Online
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-md"
            >
              Call Now
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
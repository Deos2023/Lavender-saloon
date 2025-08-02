
"use client"
import Image from "next/image";
import HeroSection from "./component/Hero";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GallerySection } from "./component/GallerySec";


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

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increment = target / (duration / 16); // Roughly 60fps

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div 
      variants={itemVariants}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-lavender-600 mb-2">
        {count}+
      </div>
      <div className="text-gray-600 uppercase text-sm tracking-wider">
        {label}
      </div>
    </motion.div>
  );
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
      className="bg-white p-8 rounded-lg text-black shadow-lg max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-light mb-6 text-center text-black uppercase tracking-wide">Contact Us</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lavender-300"
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lavender-300"
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lavender-300"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lavender-300"
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lavender-300"
          ></textarea>
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-lavender-600 text-white px-6 py-3 rounded uppercase tracking-wider hover:bg-lavender-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* About text  */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative bg-white py-16 px-4 md:px-10"
      >
        {/* Sticky Book Now Button */}
       

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
          >
            Beauty, Style, and Grace Redefined
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-4"
          >
            Welcome to Lavender Park Salon, your premier destination for beauty and grooming needs for everyone. Situated in the heart of Dankuni & Singur, our salon has been dedicated to provide exceptional service and expert care. Our team of skilled professionals, who specializes in wide range of services, including precision haircuts, hair coloring, luxurious facial treatments, soothing massages, nail art, and many more.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-8"
          >
            At Lavender Park Salon, we believe in celebrating individuality and enhancing our clients' unique beauty with tailored services that suit their lifestyles and preferences. Our commitment to quality and satisfaction drives us to use only the best products and the most up-to-date techniques. Whether you're preparing for a special occasion or in need of a relaxing pamper day, we invite you to experience the warmth and creativity of our salon. Join us at Lavender Park Salon—where your beauty and comfort are our top priorities.
          </motion.p>

          {/* Button */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider"
          >
            Book an Appointment
          </motion.button>
        </div>
      </motion.section>
  
      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-lavender-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-light text-center mb-12 uppercase tracking-wide"
          >
            Our Impact in Numbers
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={500} label="Happy Clients" />
            <Counter target={50} label="Services Offered" />
            <Counter target={10} label="Skilled Professionals" />
            <Counter target={5} label="Years Experience" />
          </div>
        </div>
      </motion.section>
  
      {/* Video Text section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#f9f9f9] relative"
      >
        {/* Left Text Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col justify-center px-8 md:px-20 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-black">
            HOME TO LONDON'S <br /> FINEST HAIR ARTISTS
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Welcome to the House of Gielly Green. Take a look around our Flagship salon, see the talented team of
            artists and discover London's leading hair and beauty salon.
          </p>
        </motion.div>

        {/* Right Image with Play Button */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full h-[400px] md:h-auto"
        >
          <Image
            src="/images/your-salon-image.jpg" // Replace with your actual image path
            alt="Salon Video"
            fill
            className="object-cover"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* BOOK NOW sticky side button (optional) */}
       
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative bg-white py-16 px-4 md:px-10"
      >
     

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide"
          >
            Our Philosophy
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-4"
          >
            At Lavender Park Salon, beauty is more than appearance—it's a reflection of self-care, confidence, and individuality. Our philosophy centers around empowering every client to feel their absolute best, inside and out.

            We believe in fostering a welcoming environment where every person is valued, heard, and treated with respect. Our approach blends modern techniques with timeless values—professionalism, creativity, and integrity—ensuring every service we provide is delivered with precision and care.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed mb-8"
          >
            Sustainability and wellness are also at the heart of what we do. We thoughtfully select products that are kind to both people and the planet, while continually evolving with industry innovations to bring you safe, ethical, and trend-forward experiences.

            At Lavender Park Salon, your transformation begins not just with beauty—but with trust, passion, and a commitment to excellence.
          </motion.p>

          {/* Button */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider"
          >
            Book an Appointment
          </motion.button>
        </div>
      </motion.section>
  
      {/* Contact Form Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </motion.section>
      <GallerySection/>
    </main>
  );
}
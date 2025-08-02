import Image from "next/image";
import HeroSection from "./component/Hero";


export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* About text  */}
    <section className="relative bg-white py-16 px-4 md:px-10">
      {/* Sticky Book Now Button */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
        <button className="bg-lavender-600 text-white font-medium text-sm uppercase tracking-wide px-3 py-2 rotate-90 origin-bottom-right shadow-md hover:bg-lavender-700 transition">
          Book Now
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide">
          Beauty, Style, and Grace Redefined
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
         Welcome to Lavender Park Salon, your premier destination for beauty and grooming needs for everyone. Situated in the heart of Dankuni & Singur, our salon has been dedicated to provide exceptional service and expert care. Our team of skilled professionals, who specializes in wide range of services, including precision haircuts, hair coloring, luxurious facial treatments, soothing massages, nail art, and many more.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          At Lavender Park Salon, we believe in celebrating individuality and enhancing our clients’ unique beauty with tailored services that suit their lifestyles and preferences. Our commitment to quality and satisfaction drives us to use only the best products and the most up-to-date techniques. Whether you’re preparing for a special occasion or in need of a relaxing pamper day, we invite you to experience the warmth and creativity of our salon. Join us at Lavender Park Salon—where your beauty and comfort are our top priorities.
        </p>

        {/* Button */}
        <button className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider">
          Book an Appointment
        </button>
      </div>
    </section>
  
  {/* Video Text section */}
     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#f9f9f9] relative">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center px-8 md:px-20 py-12">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-black">
          HOME TO LONDON’S <br /> FINEST HAIR ARTISTS
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Welcome to the House of Gielly Green. Take a look around our Flagship salon, see the talented team of
          artists and discover London’s leading hair and beauty salon.
        </p>
      </div>

      {/* Right Image with Play Button */}
      <div className="relative w-full h-[400px] md:h-auto">
        <Image
          src="/images/your-salon-image.jpg" // Replace with your actual image path
          alt="Salon Video"
          fill
          className="object-cover"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* BOOK NOW sticky side button (optional) */}
      <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 rotate-180 z-10">
        <button className="bg-yellow-600 text-white py-2 px-4 text-sm font-medium tracking-wide rotate-90">
          BOOK NOW
        </button>
      </div>
    </section>

    <section className="relative bg-white py-16 px-4 md:px-10">
      {/* Sticky Book Now Button */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
        <button className="bg-lavender-600 text-white font-medium text-sm uppercase tracking-wide px-3 py-2 rotate-90 origin-bottom-right shadow-md hover:bg-lavender-700 transition">
          Book Now
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-wide">
          Our Philosophy
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
         At Lavender Park Salon, beauty is more than appearance—it’s a reflection of self-care, confidence, and individuality. Our philosophy centers around empowering every client to feel their absolute best, inside and out.

We believe in fostering a welcoming environment where every person is valued, heard, and treated with respect. Our approach blends modern techniques with timeless values—professionalism, creativity, and integrity—ensuring every service we provide is delivered with precision and care.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
         Sustainability and wellness are also at the heart of what we do. We thoughtfully select products that are kind to both people and the planet, while continually evolving with industry innovations to bring you safe, ethical, and trend-forward experiences.

At Lavender Park Salon, your transformation begins not just with beauty—but with trust, passion, and a commitment to excellence.
        </p>

        {/* Button */}
        <button className="uppercase border border-lavender-600 text-lavender-700 hover:bg-lavender-600 hover:text-white transition px-6 py-2 text-sm tracking-wider">
          Book an Appointment
        </button>
      </div>
    </section>
  
    </main>
  );
}

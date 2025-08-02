import Image from 'next/image';

const heroData = [
  {
    title: "SLIP HAIR ACCESSORIES",
    button: "BUY NOW",
    leftImg: "/img/1.jpeg",
    rightImg: "/img/2.jpeg",
    textAlign: "left",
  },
  {
    title: "TRUDON CANDLES",
    button: "BUY NOW",
    leftImg: "/img/3.jpeg",
    rightImg: "/img/4.jpeg",
    textAlign: "right",
  },
  {
    title: "SLIP HAIR ACCESSORIES",
    button: "BUY NOW",
    leftImg: "/img/5.jpeg",
    rightImg: "/img/6.jpeg",
    textAlign: "left",
  },
  {
    title: "TRUDON CANDLES",
    button: "BUY NOW",
    leftImg: "/img/2.jpeg",
    rightImg: "/img/1.jpeg",
    textAlign: "right",
  },
];

export default function HeroSection() {
  return (
    <div>
      {heroData.map((item, index) => (
        <section
          key={index}
          className="h-screen grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left Image */}
          <div className="relative w-full h-full">
            <Image
              src={item.leftImg}
              alt={`${item.title} Left`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            {item.textAlign === 'left' && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-purple-800/30 bg-opacity-40 text-white backdrop-blur-xs">
                <h1 className="text-3xl md:text-5xl font-light mb-6 text-center text-white drop-shadow-md">
                  {item.title}
                </h1>
                <button className="bg-white text-purple-800 font-semibold py-2 px-6 border-2 border-white hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                  {item.button}
                </button>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative w-full h-full">
            <Image
              src={item.rightImg}
              alt={`${item.title} Right`}
              layout="fill"
              objectFit="cover"
            />
            {item.textAlign === 'right' && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-purple-800/30 bg-opacity-40 text-white backdrop-blur-xs">
                <h1 className="text-3xl md:text-5xl font-light mb-6 text-center text-white drop-shadow-md">
                  {item.title}
                </h1>
                <button className="bg-white text-purple-800 font-semibold py-2 px-6 border-2 border-white hover:bg-purple-100 hover:text-purple-900 transition duration-300">
                  {item.button}
                </button>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

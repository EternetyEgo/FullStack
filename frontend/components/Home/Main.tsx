import React from "react";
import Marquee from "react-fast-marquee";

export default function Main() {
  return (
    <div className="text-center py-2  bg-black text-white pt-40 md:pt-[200px]">
      {/* Birinchi bo'lim */}
      <div className="h-[80vh flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl md:text-6xl text-center font-bold text-white mb-4">Chosen by leading creatives globally</h2>
        <p className="text-gray-400 mb-12">UI8 empowers over 700,000 designers from all over the world.</p>
        {/* Marquee Component */}
        <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left" loop={0}>
          <div className="flex items-center gap-6">
            {/* Replaced Logos with Larger Images */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 1" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 2" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 3" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 4" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 5" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 6" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 7" className="h-16 sm:h-20" />
          </div>
          {/* Repeat Logos to ensure continuous scrolling */}
          <div className="flex items-center gap-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 1" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 2" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 3" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 4" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 5" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 6" className="h-16 sm:h-20" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwmizMHZFpQtH9RA3PxBIWOsama4AMJoHuQ&s" alt="Logo 7" className="h-16 sm:h-20" />
          </div>
        </Marquee>
      </div>

      {/* Ikkinchi bo'lim */}
      <div className="py-16 h-[80vh] flex flex-col items-start justify-center bg-black text-white text-left px-6 md:px-12">
        <h2 className="text-3xl sm:text-5xl lg:text-[120px] font-bold mb-6 lg:mb-10 leading-tight lg:leading-[1.1]">
          Start your free website trial <br className="hidden lg:block" />
          <span className="block lg:mt-4">today</span>
        </h2>

        <p className="text-gray-400 my-8 text-sm sm:text-base lg:text-xl max-w-md">No credit card required. Cancel anytime.</p>
        <button className="bg-white text-black py-2 px-6 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold hover:bg-gray-200 transition-all duration-300">Get Started</button>
      </div>
    </div>
  );
}

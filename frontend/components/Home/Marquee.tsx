import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Marque() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true  });
  }, []);
  return (
    <div className="h-[80vh flex flex-col items-center justify-center gap-8 bg-black py-40" data-aos="fade-up">
      <h2 className="text-3xl md:text-6xl text-center font-bold text-white mb-4">Chosen by leading creatives globally</h2>
      <p className="text-gray-400 mb-12">UI8 empowers over 700,000 designers from all over the world.</p>
      {/* Marquee Component */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left" loop={0} autoFill>
        <div className="flex items-center gap-20 mr-20">
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
        </div>
        <div className="flex items-center gap-20 mr-20">
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
          <img src="https://ibanfirst.com/_next/static/media/iban-logo.0dfe61b1.svg" alt="Logo 1" className="h-16 sm:h-16" />
        </div>
      </Marquee>
    </div>
  );
}

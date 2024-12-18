import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Marque() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center gap-8 bg-[#020817] py-40" data-aos="fade-up">
      <h2 className="text-3xl md:text-6xl text-center font-bold text-white mb-4">Biz Haqimizda Kuzatuvchilarimizni Fikirlari</h2>
      <p className="text-gray-400 mb-12">UI8 empowers over 700,000 designers from all over the world.</p>
      {/* Marquee Component */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left" loop={0} autoFill>
        <div className="max-w-lg mx-10 bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            {/* Foydalanuvchi rasmi */}
            <img
              src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              {/* Foydalanuvchi ismi va mamlakati */}
              <h2 className="font-semibold text-xl">Mohamed Shaker (Egypt)</h2>
            </div>
          </div>

          {/* Sharh matni */}
          <p className="mt-4 text-gray-300">
            I recently completed the crypto trading course and was blown away by the quality of the content and instruction. The instructors were knowledgeable, engaging, and made the material easy to understand. The course was well-organized and covered a wide range of topics, including Islamic finance principles and strategies for success in the crypto market. I highly recommend this course to anyone looking to learn more about crypto trading.
          </p>
        </div>

        <div className="flex items-center gap-20">
          <div className="max-w-lg mx-auto bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              {/* Foydalanuvchi rasmi */}
              <img
                src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                {/* Foydalanuvchi ismi va mamlakati */}
                <h2 className="font-semibold text-xl">Mohamed Shaker (Egypt)</h2>
              </div>
            </div>

            {/* Sharh matni */}
            <p className="mt-4 text-gray-300">
              I recently completed the crypto trading course and was blown away by the quality of the content and instruction. The instructors were knowledgeable, engaging, and made the material easy to understand. The course was well-organized and covered a wide range of topics, including Islamic finance principles and strategies for success in the crypto market. I highly recommend this course to anyone looking to learn more about crypto trading.
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

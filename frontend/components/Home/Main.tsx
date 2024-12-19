import React from "react";

export default function Main() {
  return (
    <div className="text-center py-2  bg-[#020817] text-white pt-40  rounded-t-[90px]">
      <div className="py-16 h-[60vh] flex flex-col items-start justify-center bg-[#020817] text-white text-left px-6 md:px-12">
        <h2 className="text-6xl sm:text-7xl lg:text-[120px] font-bold mb-6 lg:mb-10 leading-tight lg:leading-[1.1]">
          Bepul portfolio saytingizni sinab <br className="hidden lg:block" />
          <span className="block lg:mt-4">koring</span>
        </h2>

        <p className="text-gray-400 my-8 text-sm sm:text-base lg:text-xl max-w-md">Hech qanday qiyinchiliklarsiz. Shunchaki tugmani bosing.</p>
        <button className="bg-white text-black py-2 px-6 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold hover:bg-gray-200 transition-all duration-300">Portfolio Yaratish</button>
      </div>
    </div>
  );
}

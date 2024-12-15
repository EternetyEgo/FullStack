import React from "react";

export default function Main() {
  return (
    <div className="text-center py-2  bg-black text-white pt-40  rounded-t-[30px]">
      <div className="py-16 h-[60vh] flex flex-col items-start justify-center bg-black text-white text-left px-6 md:px-12">
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

import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const PerCard = () => {
  return (
    <div className="w-full pt-4 my-40">
      <div className="px-6 lg:px-10 w-[90%] mx-auto">
        {/* Popular Users Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular cards</h2>
          <a href="#" className="flex items-center group text-lg font-medium relative">
            View More
            <span className="ml-2">
              <IoMdArrowRoundForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="bg-base-100 flex flex-wrap gap-10">
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[420px] bg-base-100 shadow-xl rounded-lg border border-gray-300 overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-56">
              <img
                src="https://via.placeholder.com/350x200" // Replace with your image URL
                alt="Card Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Card Name</h2>

              {/* Description */}
              <p className="text-gray-600 text-base mb-5">This is a brief description of the content. It explains what the card is about in more detail.</p>

              {/* Created By Section */}
              <div className="flex justify-end text-gray-600 text-sm">
                <span>
                  Created by: <span className="font-semibold">John Doe</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[420px] bg-base-100 shadow-xl rounded-lg border border-gray-300 overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-56">
              <img
                src="https://via.placeholder.com/350x200" // Replace with your image URL
                alt="Card Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Card Name</h2>

              {/* Description */}
              <p className="text-gray-600 text-base mb-5">This is a brief description of the content. It explains what the card is about in more detail.</p>

              {/* Created By Section */}
              <div className="flex justify-end text-gray-600 text-sm">
                <span>
                  Created by: <span className="font-semibold">John Doe</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[420px] bg-base-100 shadow-xl rounded-lg border border-gray-300 overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-56">
              <img
                src="https://via.placeholder.com/350x200" // Replace with your image URL
                alt="Card Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Card Name</h2>

              {/* Description */}
              <p className="text-gray-600 text-base mb-5">This is a brief description of the content. It explains what the card is about in more detail.</p>

              {/* Created By Section */}
              <div className="flex justify-end text-gray-600 text-sm">
                <span>
                  Created by: <span className="font-semibold">John Doe</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[420px] bg-base-100 shadow-xl rounded-lg border border-gray-300 overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-56">
              <img
                src="https://via.placeholder.com/350x200" // Replace with your image URL
                alt="Card Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Card Name</h2>

              {/* Description */}
              <p className="text-gray-600 text-base mb-5">This is a brief description of the content. It explains what the card is about in more detail.</p>

              {/* Created By Section */}
              <div className="flex justify-end text-gray-600 text-sm">
                <span>
                  Created by: <span className="font-semibold">John Doe</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerCard;

import React from "react";
import { FiSettings } from "react-icons/fi";
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
          <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg shadow-xl group">
            {/* Rasmi */}
            <figure className="w-full h-full">
              <img
                src="https://www.shutterstock.com/image-vector/guard-c-logo-vector-icon-260nw-2197113021.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hoverda chiqadigan yozuvlar */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-bold mb-2">Car crash</h2>
              <p className="text-center px-4">Sayt avtohalokatga uchragan odamlarga bag'ishlanadi. Va yo'l qoidalari batafsil yoritilgan.</p>
              <div className="mt-4">
                <h6 className="font-bold">Created by: Anpanman</h6>
              </div>
            </div>

            {/* Yumaloq tugma */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:bg-gray-200 transition-colors">
              <FiSettings className="text-xl text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerCard;

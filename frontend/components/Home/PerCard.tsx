import React, { useEffect } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { IoMdArrowRoundForward } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PerCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true  }); 
  }, []);
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
        <div className="flex flex-wrap gap-10 justify-center md:justify-between">
          {/* Card 1 */}
          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[510px] h-[400px] overflow-hidden rounded-lg shadow-xl group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg"
                alt="Img"
                width={300} // Set a fixed width
                height={300} // Set a fixed height
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Hover text, button, and like icon */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              {/* Button in the center */}
              <div className="flex-grow flex items-center justify-center pt-10">
                <button className="btn flex items-center bg-white-500 hover:bg-white-700 px-4 rounded-md text-sm">
                  Korish <RxArrowTopRight size={20} />
                </button>
              </div>

              {/* Title, description, and like button */}
              <div className="flex justify-between items-center px-5 py-3">
                <div>
                  <h2 className="font-bold mb-2">Car crash</h2>
                  <h6 className="font-bold text-2xl">Created by: Anpanman</h6>
                </div>
                <div className="text-center space-y-1">
                  <SlLike size={30} cursor="pointer" />
                  <h1 className="select-none">45</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerCard;
import React, { useEffect } from "react";
import { FaFolder, FaUser, FaUserPlus } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="md:p-8 p-6 w-full" data-aos="fade-up">
      {/* Hero Section */}
      <div className="w-full min-h-[90vh] flex flex-col items-center justify-center md:px-4 relative hero">
        {/* Markaziy Matn */}
        <div className="md:text-center text-start md:w-[80%]">
          <h1 className="text-[20px] sm:text-4xl lg:text-7xl font-bold tracking-wider leading-loose">
            Bu platforma foydalanuvchilarga o‘z portfoliolarini yaratish
            <span className="text-blue-500"> va dunyo bilan ulashish imkoniyatini</span> beradi
          </h1>

          <p className="mt-4 text-xl text-gray-500">Har bir loyiha – bu bir hikoya. O‘z ishingizni yuklang, uni ta’riflab bering va o‘z natijangizni ko'rsating .</p>
          <div className="mt-6 flex justify-center gap-4 md:flex-row flex-col">
            <button className="btn btn-outline">Hoziroq boshlang!</button>
            <button className="btn btn-primary">Bu qanday ishlaydi</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] mx-auto flex flex-wrap gap-10 justify-between mt-12">
        {/* Projects Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#B4D7FF] rounded-t-xl flex justify-center items-center">
            <FaFolder color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Yuklangan loyihalar</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">112</span>
          </div>
        </div>

        {/* Users Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#57CAEB] rounded-t-xl flex justify-center items-center">
            <FaUser color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Foydalanuvchilarimiz</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">183,000</span>
          </div>
        </div>

        {/* New Users Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#5DDAB4] rounded-t-xl flex justify-center items-center">
            <FaUserPlus color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Biz haqimizdagi fiklrar</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">183,000</span>
          </div>
        </div>

        {/* Quiz Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#FF7976] rounded-t-xl flex justify-center items-center">
            <GrTask color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Quiz</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">100,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

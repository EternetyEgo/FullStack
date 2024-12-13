import React from "react";
import { FaFolder, FaUser, FaUserPlus } from "react-icons/fa";
import { GrTask } from "react-icons/gr";

export default function Hero() {
  return (
    <div className="p-8 w-full">
      {/* Hero Section */}
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
        {/* Markaziy Matn */}
        <div className="text-center max-w-5xl">
          <h1 className="text-4xl lg:text-7xl font-bold">
            The World's <span className="text-blue-500">Best Creators</span> Are On Behance
          </h1>
          <p className="mt-4 text-xl text-gray-500">A comprehensive platform to help hirers and creators navigate the creative world from discovering inspiration, to connecting with one another.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="btn btn-primary">Hire a Freelancer</button>
            <button className="btn btn-outline">Try Behance Pro</button>
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
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Projects</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">112</span>
          </div>
        </div>

        {/* Users Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#57CAEB] rounded-t-xl flex justify-center items-center">
            <FaUser color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">Users</span>
            <span className="text-black text-2xl sm:text-3xl font-bold">183,000</span>
          </div>
        </div>

        {/* New Users Card */}
        <div className="select-none w-full sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg">
          <div className="w-full h-[200px] bg-[#5DDAB4] rounded-t-xl flex justify-center items-center">
            <FaUserPlus color="white" size={"50%"} />
          </div>
          <div className="flex flex-col gap-2 text-center p-4">
            <span className="text-[#7C8DB5] text-base sm:text-lg font-semibold">New Users</span>
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

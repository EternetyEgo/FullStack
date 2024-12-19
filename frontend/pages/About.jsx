import React from "react";
import AbtSld from "../components/AbtSld";
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[90vh] bg-cover bg-top">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-70"
          style={{
            backgroundImage:
              "url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)",
          }}
        ></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-5">
          <div className="p-10 rounded-xl max-w-2xl">
            <h1 className="text-[70px] font-bold mb-4">Biz Haqimizda</h1>
            <p className="text-xl mb-4">Eng yaxshi tanlov o'zingizga bogliq.</p>
          </div>
        </div>
      </section>

      <AbtSld />
    </div>
  );
};

export default About;

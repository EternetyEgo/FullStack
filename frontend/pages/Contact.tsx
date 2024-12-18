import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-blue-700 text-white relative">
      <Navbar />

      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Section with Illustration */}
        <div className="flex-1 bg-white text-black md:flex items-center justify-center lg:block hidden">
          <img
            src="https://img.freepik.com/premium-vector/customer-service_776324-2.jpg"
            alt="Support Illustration"
            className="w-full h-full object-contain transform transition-all duration-500 ease-in-out "
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1  py-10 px-6 flex items-center justify-center bg-white bg-opacity-90  backdrop-blur-md">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold mb-6 text-center text-black">Contact Us</h1>
            <p className="text-md mb-6 text-center text-gray-900">We would love to hear from you. Feel free to reach out with any questions or feedback.</p>

            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4 p-4 rounded-lg focus:outline-none focus:ring-2  text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4 p-4 rounded-lg focus:outline-none focus:ring-2  text-black"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-48 mb-4 p-4 rounded-lg focus:outline-none focus:ring-2  text-black"
            ></textarea>

            <div className="flex justify-center">
              <button className="btn w-full py-3 rounded-lg text-white shadow-md transition duration-300 ease-in-out transform hover:bg-gray-950 bg-gray-800 focus:outline-none ">
                Send Message
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

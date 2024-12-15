import React, { useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const users = [
  { name: "Julietpapa", profile: "Freelance", awards: 0, category: "Web Development" },
  { name: "JohnDoe", profile: "Designer", awards: 2, category: "Graphic Design" },
  { name: "AliceSmith", profile: "Developer", awards: 1, category: "App Development" },
];

export default function Users() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true  }); 
    }, []);
  return (
    <div className="w-full pt-2 my-20" data-aos="fade-up">
      <div className="bg-base-100 px-4 lg:px-8 w-[90%] mx-auto">
        {/* Popular Users Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Users</h2>
          <a href="#" className="flex items-center group text-lg font-medium relative">
            View More
            <span className="ml-2">
              <IoMdArrowRoundForward className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Users Table */}
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-lg font-semibold">#</th>
              <th className="px-6 py-3 text-lg font-semibold">Name</th>
              <th className="px-6 py-3 text-lg font-semibold">Profile</th>
              <th className="px-6 py-3 text-lg font-semibold">Awards</th>
              <th className="px-6 py-3 text-lg font-semibold">Categories</th>
              <th className="px-6 py-3 text-lg font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 text-lg">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <span className="text-lg">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-lg">{user.profile}</td>
                <td className="px-6 py-4 text-lg">{user.awards}</td>
                <td className="px-6 py-4 text-lg">{user.category}</td>
                <td className="px-6 py-4">
                  <button className="btn btn-outline btn-md">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

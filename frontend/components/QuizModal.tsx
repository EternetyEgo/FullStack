import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* for cards  */}
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="max-w-4xl w-full p-6">
          <div className="text-left mb-6">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to the Frontend Quiz!
            </h1>
            <p className="text-lg mb-6">Pick a subject to get started</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* HTML */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-orange-500"
            >
              <span className="mr-2">
                <FaHtml5 />
              </span>
              HTML
            </button>
            {/* CSS */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-blue-500"
            >
              <span className="mr-2">
                <FaCss3Alt />
              </span>
              CSS
            </button>
            {/* JavaScript */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-yellow-500"
            >
              <span className="mr-2">
                <FaJsSquare />
              </span>
              JavaScript
            </button>
            {/* React */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-cyan-500"
            >
              <span className="mr-2">
                <FaReact />
              </span>
              React
            </button>
            {/* MongoDB */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-green-500"
            >
              <span className="mr-2">
                <FaDatabase />
              </span>
              MongoDB
            </button>
            {/* Node.js */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-teal-500"
            >
              <span className="mr-2">
                <FaNodeJs />
              </span>
              Node.js
            </button>
            {/* Express */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-yellow-600"
            >
              <span className="mr-2">
                <FaNodeJs />
              </span>
              Express
            </button>
            {/* Next.js */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-black"
            >
              <span className="mr-2">
                <FaGithub />
              </span>
              Next.js
            </button>
            {/* TypeScript */}
            <button
              onClick={handleOpen}
              className="btn btn-lg w-full text-blue-400"
            >
              <span className="mr-2">
                <FaJsSquare />
              </span>
              TypeScript
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box relative shadow-lg rounded-lg">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-800 transition-colors"
            >
              <AiOutlineClose />
            </button>

            {/* Modal Title */}
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              HTML Savollari
            </h2>

            {/* Questions */}
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Savol 1: HTML nima?
                </h3>
                <div className="form-control space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question1"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Hyper Text Markup Language
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question1"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Home Tool Markup Language
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question1"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Hyperlinks and Text Markup Language
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question1"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">None of the above</span>
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border p-6 rounded-lg shadow-sm ">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Savol 2: HTML taglar nima uchun kerak?
                </h3>
                <div className="form-control space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Web-sahifalarni o'qish uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Kontentni belgilash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Fayllarni yuklash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Ma'lumotlarni saqlash uchun
                    </span>
                  </label>
                </div>
              </div>

              {/* Question 3 */}
              <div className="border p-6 rounded-lg shadow-sm ">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Savol 3: Eng asosiy HTML taglar qaysilar?
                </h3>
                <div className="form-control space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question3"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      &lt;html&gt;, &lt;head&gt;, &lt;body&gt;
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question3"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      &lt;div&gt;, &lt;span&gt;, &lt;ul&gt;
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question3"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question3"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">None of the above</span>
                  </label>
                </div>
              </div>

              {/* Question 4 */}
              <div className="border p-6 rounded-lg shadow-sm ">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Savol 2: HTML taglar nima uchun kerak?
                </h3>
                <div className="form-control space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Web-sahifalarni o'qish uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Kontentni belgilash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Fayllarni yuklash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Ma'lumotlarni saqlash uchun
                    </span>
                  </label>
                </div>
              </div>

              {/* Question 5 */}
              <div className="border p-6 rounded-lg shadow-sm ">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Savol 2: HTML taglar nima uchun kerak?
                </h3>
                <div className="form-control space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Web-sahifalarni o'qish uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Kontentni belgilash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Fayllarni yuklash uchun
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="question2"
                      className="radio checked:bg-blue-600"
                    />
                    <span className="text-gray-600">
                      Ma'lumotlarni saqlash uchun
                    </span>
                  </label>
                </div>
              </div>

              <div className="text-center mt-6">
                  <button
                    className="submit-button"
                  >
                    Tekshirish
                  </button>
                </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Quiz;

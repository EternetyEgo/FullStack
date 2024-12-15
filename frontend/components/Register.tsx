import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Register: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // State for Login Form
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // State for Sign-Up Form
  const [signUpData, setSignUpData] = useState({
    name: "",
    username: "",
    email: "",
    tel: "",
    skills: "",
    password: "",
    passwordConfirm: "",
  });

  // Modal Open/Close Handlers
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle Login and Register actions
  const handleLogin = () => {
    // Add your login logic here
  };

  const handleRegister = () => {
    // Add your register logic here
  };

  return (
    <div className="flex items-center justify-center">
      <div className="hidden  lg:flex items-center">
        <button
          onClick={() => {
            setIsLogin(true);
            openModal();
          }}
          className="btn btn-outline border-gray-400 text-gray-600 hover:bg-gray-200 mr-4"
        >
          Kirish
        </button>
        <button
          onClick={() => {
            setIsLogin(false);
            openModal();
          }}
          className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600"
        >
          Ro‘yxatdan o‘tish
        </button>
      </div>
      <div className="flex lg:hidden items-center">
        <button
          onClick={() => {
            setIsLogin(true);
            openModal();
          }}
          className="btn btn-outline border-gray-400 text-gray-600 hover:bg-gray-200 mr-4"
        >
          Kirish
        </button>
        <button
          onClick={() => {
            setIsLogin(false);
            openModal();
          }}
          className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600"
        >
          Ro‘yxatdan o‘tish
        </button>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center" onClick={closeModal}>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-5 right-4 text-gray-500">
              <IoCloseSharp size={25} />
            </button>

            <h3 className="text-lg font-medium leading-6 text-gray-900">{isLogin ? "Login" : "Register"}</h3>

            {/* Modal Form Content */}
            <div className="mt-4">
              {isLogin ? (
                // Login Form
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineMail size={20} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Username"
                        className="ml-3 w-full border-none outline-none"
                        value={loginData.username}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            username: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineLock size={20} className="text-gray-400" />
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="ml-3 w-full border-none outline-none"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                      />
                      <button onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="ml-2 text-gray-500">
                        {isPasswordVisible ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-sm">
                    <p>
                      Don't have an account?{" "}
                      <span
                        onClick={() => {
                          setIsLogin(false);
                        }}
                        className="text-blue-500 cursor-pointer"
                      >
                        Register here
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                // Sign-Up Form
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineMail size={20} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.name}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineMail size={20} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Username"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.username}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            username: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineMail size={20} className="text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.email}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineMail size={20} className="text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.tel}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            tel: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineLock size={20} className="text-gray-400" />
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Password"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.password}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                      <AiOutlineLock size={20} className="text-gray-400" />
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Re-type Password"
                        className="ml-3 w-full border-none outline-none"
                        value={signUpData.passwordConfirm}
                        onChange={(e) =>
                          setSignUpData({
                            ...signUpData,
                            passwordConfirm: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-sm">
                    <p>
                      Already have an account?{" "}
                      <span
                        onClick={() => {
                          setIsLogin(true);
                        }}
                        className="text-blue-500 cursor-pointer"
                      >
                        Login here
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" checked={isTermsAccepted} onChange={() => setIsTermsAccepted(!isTermsAccepted)} />
                By continuing, I agree to the terms of use
                <span className="text-blue-500"> privacy policy</span>
              </label>
            </div>

            <div className="mt-6">
              <button type="button" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={isLogin ? handleLogin : handleRegister} disabled={!isTermsAccepted}>
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

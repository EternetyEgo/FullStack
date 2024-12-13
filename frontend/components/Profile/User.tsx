import { Img } from "@/public/img";
import Image from "next/image";
import { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import Card from "../Card";
import AddProjectCard from "./AddCard";

export default function User() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (value) => {
    let phone = value.replace(/\D/g, '');

    if (!phone.startsWith('998')) {
      phone = '998' + phone;
    }

    let formattedPhone = `+${phone.substring(0, 3)}`;

    if (phone.length > 3) {
      formattedPhone += ` (${phone.substring(3, 5)}`;
    }

    if (phone.length > 5) {
      formattedPhone += `) ${phone.substring(5, 8)}`;
    }

    if (phone.length > 8) {
      formattedPhone += `-${phone.substring(8, 10)}`;
    }

    if (phone.length > 10) {
      formattedPhone += `-${phone.substring(10, 12)}`;
    }

    return formattedPhone;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
        {/* Chap Panel */}
        <div className="flex-shrink-0 border border-black p-4 rounded-lg w-full xl:w-[350px]">
          <div className="flex flex-col items-center">
            <Image
              src={uploadedImage || Img}
              alt="User Image"
              className="w-40 h-40 xl:w-60 xl:h-60 border border-black p-2 rounded-full object-cover"
              width={240}
              height={240}
            />
            <h1 className="font-bold text-2xl xl:text-4xl mt-4">Anpanman</h1>
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="flex items-center gap-2">
                <CiPhone />
                <span className="font-bold">Telefon raqam:</span> +998910903737
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <FaRegClock />
                <span className="font-bold">Boshlagan vaqti:</span> 2024 yil 4 dekabr
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <FaLocationDot />
                <span className="font-bold">Joylashuvi:</span> O'zbekiston
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <IoMailSharp />
                <span className="font-bold">G-Mail:</span> asilbek37@gmail.com
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <HiOutlineStatusOnline />
                <span className="font-bold">Online</span>
              </a>
            </li>
          </ul>

          {/* Tugma */}
          <div className="mt-6 w-full flex justify-center">
            <button
              className="btn btn-success text-white w-full xl:w-auto"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <IoMdSettings /> Profil sozlamalari.
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Profil sozlamalari.</h3>
                <ul className="flex flex-col gap-5">
                  <br />
                  <li>
                    <h1>Ism:</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      className="input input-bordered w-full"
                    />
                  </li>
                  <li>
                    <h1>Familiya:</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Familiyangiz"
                      className="input input-bordered w-full"
                    />
                  </li>
                  <li>
                    <h1>Telefon:</h1>
                    <br />
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Telefon raqam"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                    />
                  </li>
                  <li>
                    <h1>Username:</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Foydalanuvchi nomi"
                      className="input input-bordered w-full"
                    />
                  </li>
                  <li>
                    <h1>Joylashuv:</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Qaysi mamlakatdansiz?"
                      className="input input-bordered w-full"
                    />
                  </li>
                  <li>
                    <h1>Yo'nalish:</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Frontend yoki Backend vahokazo"
                      className="input input-bordered w-full"
                    />
                  </li>
                  <li>
                    <h1>Izoh qoldiring:</h1>
                    <br />
                    <textarea
                      className="textarea textarea-bordered w-full"
                      placeholder="Izoh"
                    ></textarea>
                  </li>
                  <li>
                    <h1>Rasm yuklash:</h1>
                    <br />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="file-input file-input-bordered w-full"
                    />
                  </li>
                  <li>
                    <button className="btn btn-success text-white">Bajarildi</button>
                  </li>
                </ul>
              </div>
            </dialog>
          </div>
        </div>

        {/* O'rta Panel */}
        <div className="flex-1 w-full xl:w-[700px]">
          <ul className="text-center space-y-4">
            <li>
              <h1 className="font-bold text-2xl xl:text-3xl">Maxammatdaminov Asilbek</h1>
            </li>
            <li>
              <h1 className="font-bold text-xl xl:text-2xl">Front-end Dasturchi</h1>
            </li>
            <li>
              <a>
                <span className="font-bold">Izoh:</span> Salom hammaga. Men
                frontend dasturchiman!
              </a>
            </li>
            <li>
              <a className="flex flex-wrap justify-center gap-2 items-center">
                <span className="font-bold">Ko'nikmalar:</span>
                <button className="btn text-xs p-1 rounded-2xl">CSS & HTML</button>
                <button className="btn text-xs p-1 rounded-2xl">JavaScript</button>
                <button className="btn text-xs p-1 rounded-2xl">React JS</button>
                <button className="btn text-xs p-1 rounded-2xl">Next JS</button>
                <button className="btn text-xs p-1 rounded-2xl">Vite JS</button>
                <button className="btn text-xs p-1 rounded-2xl">TypeScript</button>
              </a>
            </li>
          </ul>

          {/* Cards Section */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <AddProjectCard />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

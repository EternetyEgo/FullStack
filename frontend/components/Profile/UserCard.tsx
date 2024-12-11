// for famous user cards or users in website 
import { Img } from '@/public/img'
import Image from 'next/image'
import { useState } from "react";
import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'
import { IoMailSharp } from 'react-icons/io5'


export default function UserCard() {
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
    <div>
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
              <span className="font-bold">Boshlagan vaqti:</span> 2024 yil 4
              dekabr
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
              <span className="font-bold">G-Mail:</span>{" "}
              asilbek37@gmail.com
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <HiOutlineStatusOnline />
              <span className="font-bold">Online</span>
            </a>
          </li>
        </ul>
      </div></div>
  )
}

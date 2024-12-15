// import { Img } from '@/public/img';
import Image from 'next/image';
import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default function Card() {
  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg shadow-xl group">
      {/* Rasmi */}
      <figure className="w-full h-full">
        <Image src="sa" alt="Img" className="w-full h-full object-cover" />
      </figure>

      {/* Hoverda chiqadigan yozuvlar */}
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-bold mb-2">Car crash</h2>
        <p className="text-center px-4">
          Sayt avtohalokatga uchragan odamlarga bag'ishlanadi. Va yo'l qoidalari batafsil yoritilgan.
        </p>
        <div className="mt-4">
          <h6 className="font-bold">Created by: Anpanman</h6>
        </div>
      </div>

      {/* Yumaloq tugma */}
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:bg-gray-200 transition-colors">
        <FiSettings className="text-xl text-black" />
      </button>
    </div>
  );
}

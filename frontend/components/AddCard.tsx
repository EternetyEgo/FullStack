import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function AddProjectCard() {
  return (
    <div className="w-[300px] h-[300px] border-2 border-dashed border-gray-400 rounded-lg flex flex-col justify-center items-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
      {/* Plus belgisi */}
      <div className="text-4xl text-gray-600">
        <FiPlus />
      </div>
      {/* Yozuv */}
      <p className="text-gray-600 mt-2 font-medium">Proyekt qo'shish</p>
    </div>
  );
}

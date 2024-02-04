import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ItemCard = ({ price, img, qty, id, name }) => {
  return (
    <div className="relative overflow-hidden  rounded-lg  shadow-lg flex justify-between mx-auto max-w-md my-2  ">
      <img
        src={img}
        alt=""
        className="object-cover w-fit h-8 sm:w-fit sm:h-14 mx-4 rounded-t-lg cursor-grab hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="p-1 bg-white">
        <span className="flex justify-between pr-2">
          <span className="text-black  mb-1 pl-2 font-sans font-semibold text-left text-sm">
            {name}
          </span>
          <MdDelete className="h-5 m-2" />
        </span>
        <div className="flex items-center">
          <span className="text-black font-semibold text-sm mr-4">
            <span className="text-gray-600">₹</span>
            {price}
          </span>
          <div className="flex space-x-4 mr-4">
            <button className="text-green-500 p-1 rounded-lg border border-green-500 hover:bg-green-100 transition duration-300">
              <IoMdAdd className="text-sm" />
            </button>
            <span className="border border-gray-40 p-1 rounded-lg">{qty}</span>
            <button className="text-red-500  p-1 rounded-lg border border-red-500 hover:bg-red-100 transition duration-300">
              <FaMinus className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

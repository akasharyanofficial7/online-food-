import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className="relative overflow-hidden rounded-lg  shadow-lg flex justify-between mx-auto max-w-md my-2  ">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="Seafood Pizza"
        className="object-cover w-24   h-12 mx-4 rounded-t-lg cursor-grab hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="p-1 bg-white">
        <span className="flex justify-between pr-5">
          <h2 className="text-black   font-semibold mb-1">Delicious Pizza</h2>
          <MdDelete />
        </span>
        <div className="flex items-center">
          <span className="text-black font-bold text-sm mr-4">₹1200</span>
          <div className="flex space-x-4 mr-4">
            <button className="text-green-500 p-1 rounded-lg border border-green-500 hover:bg-green-100 transition duration-300">
              <IoMdAdd className="text-sm" />
            </button>
            <span className="border border-gray-40 p-1 rounded-lg">1</span>
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

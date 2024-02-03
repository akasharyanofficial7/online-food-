import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
const FoodCard = ({ id, name, price, img, desc, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[230px]  rounded-lg   mx-6 bg-white p-3 flex flex-col gap-4">
      <img
        src={img}
        className=" w-auto h-[150px] cursor-grab hover:scale-110  transition-all duration-500 ease-in-out"
      />

      <div className="text-sm flex justify-between">
        <h2 className="font-bold"> {name}</h2>
        <span className="text-teal-500 font-bold">₹{price}</span>
      </div>
      <p>{desc.slice(0, 50)}.. </p>
      <div className="text-black flex justify-between ">
        <span className="  flex justify-between items-center p-1">
          <FaStar className="text-yellow-600 " /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, qty: 1, rating }));
          }}
          className="p-1 mx-2 text-white bg-teal-500 hover:bg-teal-700  rounded-lg text-sm font-bold"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

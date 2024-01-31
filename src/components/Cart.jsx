import React from "react";
import { FaWindowClose } from "react-icons/fa";
import ItemCard from "./ItemCard";
const Cart = () => {
  return (
    <>
      <div className=" fixed right-0 top-0 w-full lg:w-[300px] bg-white h-full">
        <div>
          <span className="text-gray-800 text-lg font-semibold flex justify-between items-center my-5 mx-3">
            MyOrder
            <FaWindowClose className="bg-white h-8 w-8 hover:text-orange-500" />
          </span>
          <hr />
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className="bg-white shadow-xl absolute p-3 rounded-lg bottom-0  w-full">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>
          {/* You may want to replace the below h3 with a dynamic total amount based on your data */}
          <h3 className="text-lg mb-4">Total Amount: $100</h3>
          <hr className="my-4" />

          <button className="bg-teal-600 text-white rounded-lg p-2 w-full hover:bg-teal-800 transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

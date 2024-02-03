import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

import { useState } from "react";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[300px] bg-white h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div>
          <span className="text-gray-800 text-lg font-semibold flex justify-between items-center my-5 mx-3">
            MyOrder
            <FaWindowClose
              onClick={() => {
                setActiveCart(!activeCart);
              }}
              className="bg-white h-8 w-8 hover:text-orange-500"
            />
          </span>
          <hr />
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />

        <div className="bg-white shadow-xl absolute p-3 rounded-lg bottom-0  w-full">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>

          <h3 className="text-lg mb-4">Total Amount: $100</h3>
          <hr className="my-4" />

          <button className="bg-teal-600 text-white rounded-lg p-2 w-full hover:bg-teal-800 transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      </div>
      <IoCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className="right-4 text-4xl rounded-full bg-white hover:bg-orange-500  fixed p-3 bottom-10 w-12  h-12"
      />
    </>
  );
};

export default Cart;

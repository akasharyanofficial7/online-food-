import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[300px] bg-white h-full transform ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 overflow-y-auto`}
      >
        <div className="bg-gray-800 text-white text-lg font-semibold flex justify-between items-center p-3">
          <span>MyOrder</span>
          <AiOutlineClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="h-6 w-8 hover:text-orange-500"
          />
        </div>

        <div className="p-2">
          {cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              qty={food.qty}
              img={food.img}
            />
          ))}
        </div>

        <div className="bg-white shadow-xl p-3 rounded-t-lg absolute bottom-0 w-full">
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
        className="fixed   p-3  h-12 w-12 bottom-10 right-4 text-4xl rounded-full bg-white hover:bg-orange-500"
      />
    </>
  );
};

export default Cart;

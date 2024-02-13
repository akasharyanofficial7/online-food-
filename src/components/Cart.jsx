import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const handleClickSuccess = () => {
    navigate("/success");
  };

  // const handleClickError = () => {
  //   navigate("/error");
  // };

  const handleClickErrorCart = () => {
    navigate("/errorCart");
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      handleClickSuccess();
    } else {
      handleClickErrorCart();
    }
  };

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
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                qty={food.qty}
                img={food.img}
              />
            ))
          ) : (
            <span className="text-gray-700 font-semibold text-center text-lg pl-10">
              Cart is Empty
            </span>
          )}
        </div>

        <div className="bg-white shadow-xl p-3 rounded-t-lg absolute bottom-0 w-full">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>
          <h6 className="text-lg font-semibold mb-4">
            Total Item:
            <span className="text-gray-700">{totalQty}</span>{" "}
          </h6>

          <h3 className="text-lg mb-4">Total Amount: ${totalPrice}</h3>
          <hr className="my-4" />

          <button
            onClick={handleCheckout}
            className="bg-teal-600 text-white rounded-lg p-2 w-full hover:bg-teal-800 transition duration-300 ease-in-out"
          >
            Checkout
          </button>
        </div>
      </div>

      <IoCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full  bg-orange-500 shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;

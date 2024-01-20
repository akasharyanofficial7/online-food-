import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-2   border-b-2 border-gray-500  text-black">
      <div className="flex items-center">
        <h3 className="text-gray-500 font-bold text-xl mr-2">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <img src={logo} className="h-12" alt="Logo" />
      </div>

      <div className="mt-3  lg:mt-0 ">
        <input
          type="text"
          className="border rounded-md p-2 focus:outline-none focus:border-blue-500 w-full lg:w-[500px]"
          placeholder="Enter text"
        />
      </div>
    </nav>
  );
};

export default Navbar;

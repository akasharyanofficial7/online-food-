import React from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlices";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between px-4 py-2   bg-white shadow-lg fixed top-0 w-full z-10">
      {/* Left side of the navbar */}
      <div className="flex items-center">
        <img src={logo} className="h-10 mr-2" alt="Logo" />
        <h3 className="text-gray-700 font-bold text-lg">foodie</h3>
      </div>

      {/* Right side of the navbar */}
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Search for food..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;

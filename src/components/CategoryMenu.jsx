import React, { useEffect } from "react";
import { useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import logo from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="px-10 sm:mx-2 mt-20">
      <h1 className="font-[cursive] font-bold text-teal-500 text-lg">
        Find The <span className="text-orange-500">Best </span>Food
      </h1>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden font-[cursive]">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`font-bold text-lg px-3 py-2 bg-slate-300 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out hover:text-white
          ${selectedCategory === "All" && "bg-orange-500 text-gray-800"}`}
        >
          All
          <img src={logo5} className="h-10 mr-2" alt="Logo" />
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`
    font-bold text-lg px-2 py-2 
    bg-slate-300 rounded-xl 
    hover:bg-teal-600 transition duration-300 ease-in-out hover:text-white 
    ${selectedCategory === category ? "bg-orange-500 text-gray-800" : ""}
  `}
            >
              {category} <img src={logo} className="h-12 mr-2" alt="Logo" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;

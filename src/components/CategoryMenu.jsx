import React, { useEffect } from "react";
import { useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

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
    <div className="px-10 sm:mx-2 mt-16">
      <h1 className="font-[cursive] font-bold text-teal-500 text-lg">
        Find The <span className="text-orange-500">Best </span>Food
      </h1>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden font-[cursive]">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`font-bold text-lg px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white
          ${selectedCategory === "All" && "bg-orange-500 text-gray-800"}`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`font-bold text-lg px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white
              ${
                selectedCategory === category && "bg-orange-500 text-gray-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;

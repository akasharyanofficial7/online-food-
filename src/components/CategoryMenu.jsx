import React from "react";

const CategoryMenu = () => {
  return (
    <div className="px-8 my-3">
      <h1 className=" font-[cursive] font-bold text-teal-500 text-lg">
        Find The <span className="text-orange-500">Best </span>Food
      </h1>
      <div className=" my-5 flex gap-4 overflow-x-scroll  scroll-smooth lg:overflow-x-hidden font-[cursive]">
        <button className="font-bold text-lg  px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white">
          All
        </button>
        <button className="font-bold text-lg  px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white">
          Lunch
        </button>
        <button className="font-bold text-lg  px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white">
          Breakfest
        </button>
        <button className="font-bold text-lg  px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white">
          Dinner
        </button>
        <button className="font-bold text-lg  px-3 py-2 bg-slate-200 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out hover:text-white">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;

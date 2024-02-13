import React from "react";
import FoodData from "../data/FoodData.js";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  let category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  const hotToast = (name) => {
    toast.success(`${name} Is Added`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start  my-6">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.d}
            name={food.name}
            img={food.img}
            desc={food.desc}
            price={food.price}
            rating={food.rating}
            hotToast={hotToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;

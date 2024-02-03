import React from "react";
import FoodData from "../data/FoodData.js";
import FoodCard from "./FoodCard";
const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start  my-6">
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.d}
            name={food.name}
            img={food.img}
            desc={food.desc}
            price={food.price}
            rating={food.rating}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;

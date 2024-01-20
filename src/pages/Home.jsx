import React from "react";
import Navbar from "../components/Navbar.jsx";
import CategoryMenu from "../components/CategoryMenu.jsx";
import FoodItems from "../components/FoodItems.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar.jsx";
import CategoryMenu from "../components/CategoryMenu.jsx";
import FoodItems from "../components/FoodItems.jsx";

import Cart from "../components/Cart.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;

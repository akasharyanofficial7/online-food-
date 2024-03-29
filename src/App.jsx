import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Success from "./pages/Success.jsx";
import Error from "./pages/Error.jsx";
import ErrorCart from "./pages/ErrorCart.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/*" element={<Error />}></Route>
          <Route path="/errorCart" element={<ErrorCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

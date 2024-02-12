import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home";
import Product from "../Component/Product";
import About from "../Component/About";
import Specification from "../Component/Specification";
import Colour_rang from "../Component/Colour_rang";

function Parent_ui() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Specification" element={<Specification />} />
          <Route path="/" element={<Colour_rang />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Parent_ui;

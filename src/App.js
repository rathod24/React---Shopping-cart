// App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import "./App.css"
function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}} >Shopping App</h1>
      <ProductList  />
      <Cart />
      <Wishlist  />
    </div>
  );
}

export default App;

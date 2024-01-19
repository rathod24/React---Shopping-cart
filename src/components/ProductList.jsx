// ProductList.js
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add_to_cart,add_to_whishlist } from "../redux/ActionTypes/cartActionTypes";
const ProductList = () => {
  const products=useSelector(state=>state.products)
  console.log("data",products)
  const dispatch=useDispatch()

  return (
    <div>
      <h2 style={{textDecoration:"underline"}}>Product List</h2>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={`${product.img}`} alt="img" className="img"/>
            {product.name} - ${product.price}
            <div className="btns">
            <button onClick={() => dispatch(add_to_cart(product))}>Add to Cart</button>
            <button onClick={() => dispatch(add_to_whishlist(product))}>
              Add to Wishlist
            </button>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

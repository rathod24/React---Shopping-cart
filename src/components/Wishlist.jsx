import React from "react";
import { useDispatch,useSelector } from "react-redux";
const Wishlist = () => {
  const wishlist=useSelector(state=>state.whishlist)
  console.log("whist data",wishlist)
  const dispatch=useDispatch()
  return (
    <div>
      <h2 style={{textDecoration:"underline"}}>Wishlist</h2>
      <div className="cart">
        {wishlist?.length!==0?wishlist?.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        )):<p>No Items</p>}
      </div>
    </div>
  );
};

export default Wishlist;

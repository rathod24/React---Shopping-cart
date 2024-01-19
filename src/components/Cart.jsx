
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { discount } from "../redux/ActionTypes/cartActionTypes";
const Cart = () => {
  const data=useSelector(state=>state)
  console.log("data",data)
  const dispatch=useDispatch()
  const calculateTotal = () => {
    return data.cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2 style={{textDecoration:"underline"}}>Shopping Cart</h2>
      <div className="cart">
        {data.cart.length !=0?data.cart.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        )):<p>No Items</p>}
     
      <p>Total: ${calculateTotal()}</p>
      <button onClick={()=>dispatch(discount())}>Apply Discount</button>
    </div>
    </div>
  );
};

export default Cart;

import { ADD_TO_CART,ADD_TO_WHISHLIST,DISCOUNT } from "../Actions/cartActions";


const initial={
    
    products:[  { id: 1, name: "Shirt & Pant", price: 20,img:"./images/pant.jpg"},
    { id: 2, name: "Pant ", price: 30,img:"./images/shirt.jpg" },
    { id: 3, name: "Shirt 3", price: 40,img:"./images/shirt1.jpg"},
    { id: 4, name: "Polo-Shirt", price: 50,img:"./images/shirt3.jpg"},
    ] 
    ,
    cart:[]
    ,
    whishlist:[]
}
const cartReducer=(state=initial,action)=>{
  switch(action.type){
    case ADD_TO_CART:{
        return {...state,cart:[...state.cart,action.value]}
    }
    case ADD_TO_WHISHLIST:{
        return {...state,whishlist:[...state.whishlist,action.value]}
    }
    case DISCOUNT :{
        // console.log()
        // // let t=[...state.cart].map(item=>({...item,(item.price)*0.8}));
        let t=[...state.cart].map(item=>({...item,price:item.price*(0.8)}))
        return {
            ...state,cart:[...t]
        }
    }
    default: return state
  }
}

export default cartReducer

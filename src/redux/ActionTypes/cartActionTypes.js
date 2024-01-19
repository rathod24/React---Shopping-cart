import { ADD_TO_CART,ADD_TO_WHISHLIST,DISCOUNT } from "../Actions/cartActions";

export const add_to_cart=(value={})=>{
    return {
        type:ADD_TO_CART,
        value:value
    }
}
export const add_to_whishlist=(value={})=>{
    return {
        type:ADD_TO_WHISHLIST,
        value:value
    }
}

export const discount=()=>{
    return {
        type:DISCOUNT
    }
}
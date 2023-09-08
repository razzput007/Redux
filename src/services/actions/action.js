import { Add_To_cart } from "../constant"
import { Remove_To_cart } from "../constant"
export const addToCart=(data)=>{
    return{
        type:Add_To_cart,
        data
    }
}

export const removeToCart=()=>{
    return{
        type:Remove_To_cart,

    }
}
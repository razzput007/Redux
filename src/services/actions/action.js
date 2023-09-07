import { Add_To_cart } from "../constant"

export const addToCart=(data)=>{
    return{
        type:Add_To_cart,
        data
    }
}
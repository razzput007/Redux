import { Add_To_cart,Remove_To_cart } from "../constant";

const initialState = {
  cardData: [],
};

export default function cartItem(state = [], action) {
  switch (action.type) {
    case Add_To_cart:
      return [
        ...state,
       { cardData: action.data}
      ]
      case Remove_To_cart:
        state.pop();
        return [
          ...state,
    
        ]
    default:
      return state;
  }
}

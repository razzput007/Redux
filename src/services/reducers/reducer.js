import { Add_To_cart } from "../constant";

const initialState = {
  cardData: [],
};

export default function cartItem(state = initialState, action) {
  switch (action.type) {
    case Add_To_cart:
      return {
        ...state,
        cardData: action.data
      }
    default:
      return state;
  }
}

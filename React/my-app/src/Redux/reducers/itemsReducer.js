import {
  ADD_ID_CART,
  DEL_ID_CART,
  ITEMS_LOADED,
  LOAD_FAILED,
  SET_FAV_ARR,
  SET_CART_ARR,
} from "../types";

export const INITIAL_STATE = {
  items: [],
  error: null,
  favArr: [],
  cartArr: [],
  addToCart: null,
  delFromCart: null,
  isModalOpen: false,
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_LOADED:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case SET_FAV_ARR:
      return {
        ...state,
        favArr: [...state.favArr, action.payload],
      };
    case SET_CART_ARR:
      return {
        ...state,
        cartArr: [...state.cartArr, action.payload],
      };
    case ADD_ID_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case DEL_ID_CART:
      return {
        ...state,
        delFromCart: action.payload,
      };

    default:
      return state;
  }
};

export { itemsReducer };

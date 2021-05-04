import {
  ADD_ID_CART,
  DEL_ID_CART,
  ITEMS_LOADED,
  LOAD_FAILED,
  OPEN_MODAL,
  HIDE_MODAL,
  SET_FAV_ARR,
  SET_CART_ARR,
} from "./types";

export const loadItems = () => (dispatch) => {
  fetch("items.json")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json())
    .then((items) => dispatch({ type: ITEMS_LOADED, payload: items }))
    .then((e) => dispatch({ type: LOAD_FAILED, payload: e.message }));
};

export const setFavArr = (favArr) => (dispatch) => {
  dispatch({ type: SET_FAV_ARR, payload: favArr });
};

export const getFavArr = () => async (dispatch) => {
  const favArr = localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    : [];
  dispatch(setFavArr(favArr));
};
export const setCartArr = (cartArr) => (dispatch) => {
  dispatch({ type: SET_CART_ARR, payload: cartArr });
};

export const getCartArr = () => async (dispatch) => {
  const cartArr = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  dispatch(setFavArr(cartArr));
};

export const delCart = (id) => (dispatch) => {
  dispatch({ type: DEL_ID_CART, payload: id });
};

export const addCart = (id) => (dispatch) => {
  dispatch({ type: ADD_ID_CART, payload: id });
};

export const openModal = () => (dispatch) => {
  dispatch({ type: OPEN_MODAL, payload: true });
};

export const hideModal = () => (dispatch) => {
  dispatch({ type: HIDE_MODAL, payload: false });
};

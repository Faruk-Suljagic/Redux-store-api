import * as actions from "../Shopping/Shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actions.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustQty = (itemID, value) => {
  return {
    type: actions.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const loadCurrentItem = (item) => {
  return {
    type: actions.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const loadProducts = () => (dispatch) => {
  let API = "https://fakestoreapi.com/products";
  fetch(API).then((data) => {
    data.json().then((dataJson) => {
      console.warn("in action", dataJson);
      return dispatch({
        type: "ADD_PRODUCT",
        payload: dataJson,
      });
    });
  });
};

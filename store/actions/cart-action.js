import { API_URL } from "../../consts/firebase";
import { cartTypes } from "../types";

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (order) => ({
  type: CONFIRM_ORDER,
  order,
});

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await res.json();

      console.warn(result);

      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

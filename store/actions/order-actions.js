import { orderTypes } from "../types";

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

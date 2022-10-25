import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoryReducer, productReducer, cartReducer, orderReducer } from "./reducers";

// Combinamos los reducers.
const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
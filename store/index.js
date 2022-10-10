import { createStore, combineReducers } from "redux";
import { categoryReducer, productReducer } from "./reducers";

// Combinamos los reducers.
const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);
import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/counter";
import cartReducer from "./reducers/cart";

const storeToStorageMiddleware = (props) => {
  return (dispatch) => {
    return (a) => {
      const result = dispatch(a);

      // Do something in the middle here to the store
      console.log(props.getState());

      // store the redux state into the local/session storage
      localStorage.setItem("store", JSON.stringify(props.getState()));

      return result;
    };
  };
};

const loadFromStorage = () => {
  if (localStorage.getItem("store") !== null) {
    return JSON.parse(localStorage.getItem("store"));
  }
};

const store = configureStore({
  reducer: {
    // only a reducer function can be used here
    countReducer,
    cartReducer,
  },
  devTools: true, // for some sites production should have true value here
  middleware: (defaultMiddlewaresFn) => {
    return [...defaultMiddlewaresFn(), storeToStorageMiddleware];
  },
  preloadedState: loadFromStorage(),
});

export default store;

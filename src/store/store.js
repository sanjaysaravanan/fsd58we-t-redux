import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/counter";

const store = configureStore({
  reducer: {
    // only a reducer function can be used here
    countReducer,
  },
  devTools: true, // for some sites production should have true value here
});

export default store;

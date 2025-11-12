import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./userSlice.js";
import { use } from "react";

const store = configureStore({
  reducer: {
    user: counterReducer,
  },
});

export default store;

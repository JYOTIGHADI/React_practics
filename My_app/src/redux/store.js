
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    userData: userReducer, // matches your useSelector(state => state.userData)
  },
});

export default store;

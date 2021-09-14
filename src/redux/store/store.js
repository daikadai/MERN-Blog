import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/users/userSlices";

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

export default store
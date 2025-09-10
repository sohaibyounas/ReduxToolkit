import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

// create store here
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;

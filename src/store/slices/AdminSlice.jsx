import { createSlice } from "@reduxjs/toolkit";
import { removeUsers } from "./UserSlice";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    // micro reducers
  },
  extraReducers: (builder) => {
    builder.addCase(removeUsers, (state, action) => {
      state.splice(action.payload, 3);
    });
  },
});


export default adminSlice.reducer;

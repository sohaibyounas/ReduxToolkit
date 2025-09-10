import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    // micro reducers
    addUsers(state, action) {
      // Looks like mutation, but Immer handles it safely
      state.push(action.payload);
      //   console.log(action.payload);
    },
    removeUsers(state, action) {
      // console.log("remove user " + action.payload);
      state.splice(action.payload, 3);
    },
    deleteUsers(state, action) {
      // means we assign new empty array instead of previous array
      // return (state = []);
      return []; // only empty array
    },
  },

  //extraReducers hanlde common action used by multiple reducers
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return []; // its independent of all slices's reducers
    });
  },
});

// console.log(usersSlice.actions);

export default usersSlice.reducer;
export const { addUsers, removeUsers, deleteUsers } = usersSlice.actions;

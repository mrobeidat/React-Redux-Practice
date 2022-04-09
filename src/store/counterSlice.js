import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";
const initState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,

  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },

    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state,action)=>{
      state.value = action.payload
    })
  },
});
export default counterSlice.reducer;
export const counterAction = counterSlice.actions;

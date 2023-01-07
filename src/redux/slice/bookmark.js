import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addItems } = bookSlice.actions;
export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    email: "",
    password: "",
    firstName: "",
    error: null,
  },
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPassword: (state, action) => {
      state.password = action.payload;
    },
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addEmail, addError, addFirstName, addPassword } =
  signUpSlice.actions;
export default signUpSlice.reducer;

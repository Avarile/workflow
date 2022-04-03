import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    email: "",
    token: "",
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
    },

    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
      };
    },

    // may not need it, for I am going to make error handling global
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { setError, setUser, setToken } = loginSlice.actions;
export const selectLogin = (state: any) => state;
export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    successs: {},
    warning: {},
    error: {},
  },
  reducers: {
    setSuccess: (state, action) => {
      return {
        ...state,
        successs: action.payload,
      };
    },

    setWarning: (state, action) => {
      return {
        ...state,
        warning: action.payload,
      };
    },

    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { setError, setWarning, setSuccess } = errorSlice.actions;
export const selectError = (state: any) => state;
export default errorSlice.reducer;

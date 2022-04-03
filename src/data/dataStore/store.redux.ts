// redux store
//
import { configureStore } from "@reduxjs/toolkit";

// import all slices
import errorRuducer from "../dataSlices/error.slice";
import authRuducer from "../dataSlices/auth.slice";

// end of slices

export const store = configureStore({
  reducer: {
    error: errorRuducer,
    login: authRuducer,
  },
});

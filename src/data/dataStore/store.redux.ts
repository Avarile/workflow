// redux store
//
import { configureStore } from "@reduxjs/toolkit";

// import all slices
import errorRuducer from "../dataSlices/error.slice";
import loginRuducer from "../dataSlices/login.slice";

// end of slices

export const store = configureStore({
  reducer: {
    error: errorRuducer,
    login: loginRuducer,
  },
});

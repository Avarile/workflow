import { createSlice } from "@reduxjs/toolkit"

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    notification: {
      type: "success",
      message: "none",
    },
  },
  reducers: {
    setNotification: (state, action) => {
      return {
        ...state,
        notification: action.payload,
      }
    },
  },
})

export const { setNotification } = errorSlice.actions
export const selectError = (state: any) => state
export default errorSlice.reducer

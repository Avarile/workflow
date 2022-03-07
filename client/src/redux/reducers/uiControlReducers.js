import { actionTypes } from "../constants/actionTypes"

const initState = {
  uiSelector: undefined,
}

export const setUiReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_UI_SELECTOR:
      return { ...state, uiSelector: action.payload }
    default:
      return state
  }
}

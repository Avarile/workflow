import { actionTypes } from "../constants/actionTypes"

export const setUiselector = (uiSelector) => {
  return {
    type: actionTypes.SET_UI_SELECTOR,
    payload: uiSelector,
  }
}

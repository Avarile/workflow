import { actionTypes } from "../constants/actionTypes"

const initState = {
  users: [],
  
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

// selecte user
export const setSelectedUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_USER:
      const payload = action.payload
      return { ...state, selectedUser: payload }
    default:
      return state
  }
}

// fetch one user
export const setFetchUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_FETCH_USER:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setCreateUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setEditUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_UPDATE_USER:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setDeleteUser = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_SELECTED_USER:
      const payload = action.payload
      return { ...state, response: payload } // for delete, it carries the response

    default:
      return state
  }
}

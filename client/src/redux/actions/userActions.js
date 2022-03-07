import { actionTypes } from "../constants/actionTypes"

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  }
}

export const setSelectedUser = (user) => {
  return {
    type: actionTypes.SET_SELECTED_USER,
    payload: user,
  }
}

export const setFetchUser = (fetchUser) => {
  return {
    type: actionTypes.SET_FETCH_USER,
    payload: fetchUser,
  }
}

export const setCreateUser = (createUser) => {
  return {
    type: actionTypes.CREATE_USER,
    payload: createUser,
  }
}

export const setEditUser = (editUser) => {
  return {
    type: actionTypes.SET_UPDATE_USER,
    payload: editUser,
  }
}

export const setDeleteUser = (userRes) => {
  return {
    type: actionTypes.REMOVE_SELECTED_USER,
    payload: userRes,
  }
}

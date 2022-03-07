import { combineReducers } from "redux"
import { userReducer, setSelectedUser, setFetchUser, setCreateUser, setEditUser, setDeleteUser } from "./userReducer"
import { bookReducer, setSelectedBook, setFetchBook, setEditBook, setDeleteBook, setCreateBook } from "./bookReducers"
import { setUiReducer } from "./uiControlReducers"

const reducers = combineReducers({
  createUser: setCreateUser,
  allUsers: userReducer,
  selectedUser: setSelectedUser,
  fetchUser: setFetchUser,
  setEditUser: setEditUser,
  setDeleteUser: setDeleteUser,

  createBook: setCreateBook,
  allBooks: bookReducer,
  selectedBook: setSelectedBook,
  fetchBook: setFetchBook,
  setEditBook: setEditBook,
  setDeleteBook: setDeleteBook,

  setUiReducer: setUiReducer,
})

export default reducers

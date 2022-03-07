import { actionTypes } from "../constants/actionTypes"

export const setBooks = (books) => {
  return {
    type: actionTypes.SET_BOOKS,
    payload: books,
  }
}

export const setSelectedBook = (book) => {
  return {
    type: actionTypes.SET_SELECTED_BOOK,
    payload: book,
  }
}

export const setFetchBook = (fetchBook) => {
  return {
    type: actionTypes.SET_FETCH_BOOK,
    payload: fetchBook,
  }
}

export const setCreateBook = (createBook) => {
  return {
    type: actionTypes.CREATE_BOOK,
    payload: createBook,
  }
}

export const setEditBook = (editBook) => {
  return {
    type: actionTypes.SET_UPDATE_BOOK,
    payload: editBook,
  }
}

export const setDeleteBook = (bookRes) => {
  return {
    type: actionTypes.REMOVE_SELECTED_BOOK,
    payload: bookRes,
  }
}

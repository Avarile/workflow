import { actionTypes } from "../constants/actionTypes"

const initState = {
  books: [],
  response: {},
}

export const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return { ...state, books: action.payload }
    default:
      return state
  }
}

// selecte book
export const setSelectedBook = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_BOOK:
      const payload = action.payload
      return { ...state, setSelectedBook: payload }
    default:
      return state
  }
}

export const setFetchBook = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_FETCH_BOOK:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setCreateBook = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setEditBook = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_UPDATE_BOOK:
      const payload = action.payload
      return { ...state, ...payload }
    default:
      return state
  }
}

export const setDeleteBook = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_SELECTED_BOOK:
      const payload = action.payload // for delete, it carries the response
      return { ...state, response: payload }

    default:
      return state
  }
}

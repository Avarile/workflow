import axios from "axios"
import { Button, Form, Table } from "react-bootstrap"
import styled from "styled-components"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBooks, setSelectedBook } from "../redux/actions/bookActions"
import { host } from "../Utls/constants"

export const BookList = () => {
  const dispatch = useDispatch()

  const isVoid = (value) => {
    if (value === undefined || value === null || value === "") {
      return true
    } else return false
  }

  const fetchBooks = async () => {
    const response = await axios.get(`${host}/books`).catch((error) => {
      console.error("Error", error)
    })
    dispatch(setBooks(response.data))
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const deleteBook = async (bookId) => {
    await axios
      .delete(`${host}/books/${bookId}`)
      .catch((error) => {
        throw new Error("Error happened during delete book :", error)
      })
      .finally(() => {
        window.location.reload()
      })
  }
  const books = useSelector((state) => state.allBooks.books)
  const book = useSelector((state) => state.selectedBook.setSelectedBook)
  console.log(book)
  // console.log(books)

  return (
    <RootContainer>
      <Form>
        <Form.Group style={{ display: "flex" }}>
          <Form.Control type="text" value={book?.name} placeholder="Selected Book" style={{ width: "20rem", height: "42px" }} />

          {book === undefined ? null : (
            <Button
              variant="dark"
              onClick={() => {
                deleteBook(book.bookId)
              }}
              style={{ marginLeft: "10px" }}>
              Delete Book
            </Button>
          )}
        </Form.Group>
      </Form>
      <Table bordered hover striped size="lg" responsive="lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Auther</th>
            <th>Genre</th>
            <th>User'Email</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <PointerTr
                key={book.bookId}
                onClick={() => {
                  dispatch(setSelectedBook(book))
                }}>
                <td>{book.name}</td>
                <td>{book.auther}</td>
                <td>{book.category}</td>
                <td>{book.user}</td>
              </PointerTr>
            )
          })}
        </tbody>
      </Table>
    </RootContainer>
  )
}

const RootContainer = styled.div`
  display: block;
  height: 100%;
`
const PointerTr = styled.tr`
  cursor: pointer;
  height: 4rem;
`
const NoBooks = styled.h1``

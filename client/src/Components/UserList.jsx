import React, { useState, useEffect } from "react"
import { Button, Form, Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { setUsers, setSelectedUser } from "../redux/actions/userActions"
import axios from "axios"
import styled from "styled-components"
import { CreateUserCanvas } from "./CreateEditCanvas"
import { setBooks } from "../redux/actions/bookActions"
import { host } from "../Utls/constants"

export const UserList = ({ formSelector, setFormSelector }) => {
  const dispatch = useDispatch()

  const fetchUsers = async () => {
    const response = await axios.get(`${host}/users`).catch((error) => {
      console.error("Error", error)
    })
    dispatch(setUsers(response.data))
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const deleteUser = async (user_ID) => {
    await axios
      .delete(`${host}/users/${user_ID}`)
      .catch((error) => {
        throw new Error("Error happened during delete user :", error)
      })
      .finally(() => {
        window.location.reload()
      })
  }

  const users = useSelector((state) => state)
  const user = useSelector((state) => state.selectedUser.selectedUser)
  const book = useSelector((state) => state.selectedBook.setSelectedBook)

  const filterBooks = async (user, books) => {
    const filteredBooks = books.filter((book) => book.user === user.email)

    return filteredBooks
  }

  useEffect(() => {
    // dispatch(setBooks(filterBooks(user, books)))
  }, [user])
  // canvas controll
  const [open, setOpen] = useState(false)

  return (
    <>
      <RootContainer>
        <Form style={{ padding: "2px" }}>
          <Form.Group style={{ display: "flex" }}>
            <Form.Control type="text" value={user?.name} placeholder="Selected User" style={{ width: "20rem" }} />
            <Button
              variant="dark"
              onClick={() => {
                setOpen(!open)
                setFormSelector("CreateUser")
              }}
              style={{ marginLeft: "10px" }}>
              Add User
            </Button>
            {user === undefined ? null : (
              <Button
                variant="dark"
                onClick={() => {
                  deleteUser(user._id)
                }}
                style={{ marginLeft: "10px" }}>
                Delete User
              </Button>
            )}
            {user === undefined ? null : (
              <Button
                variant="dark"
                onClick={() => {
                  setOpen(!open)
                  setFormSelector("EditUser")
                }}
                style={{ marginLeft: "10px" }}>
                Edit User
              </Button>
            )}
            {user === undefined ? null : (
              <Button
                variant="dark"
                onClick={() => {
                  setOpen(!open)
                  setFormSelector("CreateBook")
                }}
                style={{ marginLeft: "10px" }}>
                Add Book
              </Button>
            )}
            {book === undefined ? null : (
              <Button
                variant="dark"
                onClick={() => {
                  setOpen(!open)
                  setFormSelector("EditBook")
                }}
                style={{ marginLeft: "10px" }}>
                Edit Book
              </Button>
            )}
          </Form.Group>
        </Form>
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>DoB</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.allUsers.users.map((user) => {
              return (
                <>
                  <PointerTr
                    key={user.email}
                    style={{ color: `${user.rowcolor} || ""` }}
                    onClick={() => {
                      dispatch(setSelectedUser(user))
                    }}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                    <td>{user.phone}</td>
                  </PointerTr>
                </>
              )
            })}
          </tbody>
        </Table>
      </RootContainer>
      <CreateUserCanvas open={open} setOpen={setOpen} formSelector={formSelector} setFormSelector={setFormSelector} />
    </>
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

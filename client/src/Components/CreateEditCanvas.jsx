import React, { useState } from "react"
import { Button, Offcanvas } from "react-bootstrap"
import styled from "styled-components"
import { CreateUserForm } from "./CreateEditForms/CreateUserForm"
import { CreateBookForm } from "./CreateEditForms/CreateBookForm"
import { EditUserForm } from "./CreateEditForms/EditUserForm"
import { EditBookForm } from "./CreateEditForms/EditBookForm"
import { useSelector } from "react-redux"

export const CreateUserCanvas = ({ open, setOpen, formSelector, setFormSelector }) => {
  const user = useSelector((state) => state.selectedUser.selectedUser)
  const book = useSelector((state) => state.selectedBook)

  const FormSelectorComponent = (formIndicator, open, setOpen, user, book) => {
    switch (formIndicator) {
      case "CreateUser":
        return <CreateUserForm open={open} setOpen={setOpen} />

      case "CreateBook":
        return <CreateBookForm open={open} setOpen={setOpen} />

      case "EditUser":
        return <EditUserForm open={open} setOpen={setOpen} user={user} />

      case "EditBook":
        return <EditBookForm open={open} setOpen={setOpen} book={book} />

      default:
        return null
    }
  }

  return (
    <RootContainer show={open} backdrop={false}>
      {FormSelectorComponent(formSelector, open, setOpen, user, book)}
      <Button
        variant="dark"
        onClick={() => {
          setOpen(!open)
        }}>
        Close
      </Button>
    </RootContainer>
  )
}

const RootContainer = styled(Offcanvas)`
  margin-top: 80 px;
  height: calc(100vh - 80px);
  width: 40%;
  z-index: 1;
`

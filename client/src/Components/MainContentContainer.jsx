import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { NavBar } from "./Navbar"
import { UserList } from "./UserList"
import { BookList } from "./BookList"
// import { Route } from "react-router-dom"
// import { routesMap } from "../Utls/Routers"
// import Footer from ""

export const MainContentContainer = () => {
  // const getRoutes = (routes) => {
  //   return routes.map((route) => {
  //     return <Route path={route.layout + route.path} render={(route) => <route.component {...route} key={route.key} />} />
  //   })
  // }

  // All Book Data Fetch

  const [formSelector, setFormSelector] = useState(undefined)

  return (
    <>
      <NavBar />
      <RootContainer>
        <UserListContainer>
          <UserList formSelector={formSelector} setFormSelector={setFormSelector} />
        </UserListContainer>
        <BookListContainer>
          <BookList formSelector={formSelector} setFormSelector={setFormSelector} />
        </BookListContainer>
      </RootContainer>
    </>
  )
}

const RootContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  height: calc(100vh - 80px -60px);
  overflow: hidden;
`
const UserListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0e8e8;
  box-shadow: 4px 5px 4px 1px grey;
`
const BookListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0e8e8;
  box-shadow: 4px 5px 4px 1px grey;
`

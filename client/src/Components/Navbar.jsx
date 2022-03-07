import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { routesMap } from "../Utls/Routers"
import { NavLink } from "react-router-dom"

export const NavBar = ({}) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand href="/admin/userstable">Navia Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routesMap.map((route) => {
                return (
                  <NavLink
                    key={route.key}
                    to={route.layout + route.path}
                    style={{ textAlign: "center", textDecoration: "none", color: "white", textShadow: "2px, 2px, 2px, white", marginLeft: "10px", marginTop: "7px" }}>
                    {route.name}
                  </NavLink>
                )
              })}
              <NavDropdown title="Click Me" id="basic-nav-dropdown" style={{ display: "block" }}>
                <NavDropdown.Item href="#action/3.1">Hoping</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">I Can </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Get this Job</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Finger Crossed</NavDropdown.Item>{" "}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

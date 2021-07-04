import {React, useState, useEffect } from 'react';
import {Navbar, Nav, Form, NavDropdown} from 'react-bootstrap'
import {MENUOPTIONS} from '../shared/menuOptions.js';
import '../css/Header.css';
import { useAuth0 } from "@auth0/auth0-react";


function Header(props) {
  const [menuOptions] = useState(MENUOPTIONS)
  const { isAuthenticated, loginWithRedirect, logout, loading, user } = useAuth0();

  useEffect(() => {
    if(isAuthenticated){
    }
  }, []);

  return (
    <>
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/"> The Dojo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuOptions.map((menu) => (
                <Nav.Link key = {menu.id} href={menu.link}> {menu.name} </Nav.Link>
              ))}
              {isAuthenticated ?
                <NavDropdown title="Account" id="dropdown-menu-align-right" menuAlign="left" drop="down" align="center">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={!isAuthenticated ? () => loginWithRedirect({}) : () => logout()}> {!isAuthenticated ? "Logout": "Logout"}</NavDropdown.Item>
                </NavDropdown>
                :
                ""
              }
              <Nav.Link onClick={!isAuthenticated ? () => loginWithRedirect({}) : () => logout()}> {!isAuthenticated ? "Login" : ""} </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </header>
    </>
  );
}

export default Header
// <p className="logout-text"> {isAuthenticated ? "Logout" : "Login"} </p>

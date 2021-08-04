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
          <Navbar.Brand href="/">
            <img className="navbar-brand-img" src="https://s3.ap-south-1.amazonaws.com/thedojoblr.com/thedojo-logo-nobg.png"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuOptions.map((menu) => (
                <Nav.Link key = {menu.id} href={menu.link}> {menu.name} </Nav.Link>
              ))}
              {isAuthenticated ?
                <NavDropdown title="Account" id="dropdown-menu-align-right" menualign="left" drop="down" align="center">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={!isAuthenticated ? () => loginWithRedirect({}) : () => logout({ returnTo: window.location.origin })}> {!isAuthenticated ? "Logout": "Logout"}</NavDropdown.Item>
                </NavDropdown>
                :
                ""
              }
              <Nav.Link onClick={!isAuthenticated ? () => loginWithRedirect({}) : () => logout({ returnTo: window.location.origin })}> {!isAuthenticated ? "Login" : ""} </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

      </header>
    </>
  );
}

export default Header
// <p className="logout-text"> {isAuthenticated ? "Logout" : "Login"} </p>

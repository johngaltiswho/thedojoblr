import {React, useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {MENUOPTIONS} from '../shared/menuOptions.js';
import '../css/Header.css';


function Header(props) {
  const [menuOptions] = useState(MENUOPTIONS)

  return (
    <>
      <header>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/"> The Dojo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuOptions.map((menu) => (
                <Nav.Link key = {menu.id} href={menu.link}> {menu.name} </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default Header

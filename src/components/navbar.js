import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
  render(){
    return(
      <Navbar inverse fixedTop collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img className="navbar-logo" src={process.env.PUBLIC_URL + '/img/LOGO.png'}/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Inicio</NavItem>
            <NavItem eventKey={2} href="#">Herramientas</NavItem>
            <NavItem eventKey={3} href="#">Servicio</NavItem>
            <NavItem eventKey={4} href="#">Contacto</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class NavbarMain extends Component {
  render() {
    return (
     <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
        alt="logo"
        src= "cat_dj.jpeg"
        width="80"
        height="80"
        className="d-inline-block align-top"
      />{' '}
      Synesthesia
      </Navbar.Brand>
      </Navbar>
    )
  }
}
export default NavbarMain;

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import SaveButton from './buttons/SaveButton/SaveButton'
import './navbar.css'

class NavbarMain extends Component {
  render() {
    return (
      <Navbar className="nav-bar" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
          alt="logo"
          src= "cat_dj.jpeg"
          width="80"
          height="80"
          className="d-inline-block align-top"
          id='logo'
        />{' '}
        </Navbar.Brand>
        <Navbar.Text className='Nav-title'>
          Synesthesia
        </Navbar.Text>
        <Navbar.Collapse id="basic-navbar-nav">
            <SaveButton className="save-button"
              storedPercussion={this.props.storedPercussion}
              storedLead={this.props.storedLead}
              storedLead2={this.props.storedLead2}>
            Save</SaveButton>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavbarMain;

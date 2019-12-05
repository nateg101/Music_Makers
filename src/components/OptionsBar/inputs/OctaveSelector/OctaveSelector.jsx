import React, { Component } from "react";
import { Form } from "react-bootstrap";
import './OctaveSelector.css'

class OctaveSelector extends Component {


  handleOnChange = (event) => {
    this.props.setOctaves(event)
  }

  render() {
    return (
      <div className='octaves-container'>
        <Form
        className='octaves'>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
            as="select"
            onChange={this.handleOnChange}>
              <option disabled selected>Octaves</option>
              <option>1</option>
              <option>3</option>
              <option>5</option>
              <option>7</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default OctaveSelector;

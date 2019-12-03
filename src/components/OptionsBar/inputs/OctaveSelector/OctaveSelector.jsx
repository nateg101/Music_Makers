import React, { Component } from "react";
import { Form } from "react-bootstrap";
import './OctaveSelector.css'

class OctaveSelector extends Component {
  render() {
    return (
      <div className='octaves-container'>
        <Form 
        className='octaves'>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control 
            as="select" 
            onChange={this.props.setOctaves}>
              <option value="" disabled selected>Octaves</option>
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

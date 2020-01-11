import React from "react";
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import './OctaveSelector.css'

const OctaveSelector = (props) => {
  const handleOnChange = (event) => {
    props.dispatch({
      type: "SET_OCTAVES",
      payload: parseInt(event.target.value)
    })
  }

  return (
    <div className='octaves-container'>
      <Form
      className='octaves'>
        <Form.Group controlId="octave-selector-group">
          <Form.Control
          as="select"
          onChange={handleOnChange}>
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

export default connect()(OctaveSelector);

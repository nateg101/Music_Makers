import React, { Component } from "react";
import { Form } from "react-bootstrap";
import './OctaveSelector.css'

function OctaveSelector() {
  return (
    <div className='octaves-container'>
      <Form className='octaves'>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Octaves</Form.Label>
          <Form.Control as="select">
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

export default OctaveSelector
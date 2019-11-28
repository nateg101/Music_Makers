import React, { Component } from "react";
import { Form } from 'react-bootstrap'
import './instrumentSelect.css'

class InstrumentSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instrument: 'Piano',
    }
  }

  render() {
    return (
      <div className="instrument-selector">
      <Form>
        <Form.Control as="select">
          <option>Piano</option>
          <option>Glockenspiel</option>
          <option>3</option>
          <option>4</option>
        </Form.Control>

      </Form>
      </div>
  )}
}
export default InstrumentSelect;

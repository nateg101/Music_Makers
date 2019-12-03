import React, { Component } from "react";
import { Form, ButtonToolbar, ToggleButton, ToggleButtonGroup, InputGroup, Radio } from "react-bootstrap";
import './ScaleSelector.css'
import KEYS from '../../../music_scales/scales.js'

class ScaleSelector extends Component {

  renderKeyOptions() {
    let keyArray = []
    Object.keys(KEYS.maj).forEach((key) => {
      keyArray.push(<option>{key}</option>)
    })
    return keyArray
  }

  render() {
    return (
      <div>
        <div className='key-selector'>
          <Form
          className='key-selector-form'>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
              className='key-selector-control'
              as="select"
              onChange={this.props.setKey}>
                <option value="" disabled selected>Key</option>
                {this.renderKeyOptions()}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <div className="maj-min-buttons">
          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="Key" defaultValue={'maj'}>
              <ToggleButton value={'maj'} className="maj-button"> Maj </ToggleButton>
              <ToggleButton value={'min'} className="min-button" > Min </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}
export default ScaleSelector;

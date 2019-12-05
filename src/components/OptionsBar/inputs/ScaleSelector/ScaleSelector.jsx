import React, { Component } from "react";
import $ from 'jquery';
import { Row, Col, Form, ButtonToolbar, ToggleButton, ToggleButtonGroup, InputGroup, Radio } from "react-bootstrap";
import './ScaleSelector.css'
import KEYS from "../../../../music_scales/scales"

class ScaleSelector extends Component {
  constructor(props) {
    super(props)
    this.keyForm = React.createRef()
  }

  renderKeyOptions() {
    let keyArray = []
    Object.keys(KEYS.maj).forEach((key, i) => {
      keyArray.push(<option key={i * 5000}>{key}</option>)
    })
    return keyArray
  }

  handleChange = () => {
    let keyMode = $("input[name=Key]:checked").val()
    let scale = this.keyForm.current.value || 'C'
    this.props.setScale(KEYS[keyMode][scale])
    if(this.props.buttonText === "◼") {
      this.props.updateButtonState()
    }
  }

  render() {
    return (
      <div className='scale-selector'>
      <Row>
        <Col>
          <div className='key-selector'>
            <Form
            onChange={this.handleChange}
            className='key-selector-form'>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                ref={this.keyForm}
                className='key-selector-control'
                as="select"
                >
                  <option value="" disabled selected>Key - C</option>
                  {this.renderKeyOptions()}
                </Form.Control>
              </Form.Group>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="maj-min-buttons">
              <ButtonToolbar>
                <ToggleButtonGroup
                  id='toggle-group'
                  type="radio"
                  name="Key"
                  defaultValue={'maj'}
                  onChange={this.handleChange}>
                  <ToggleButton value={'maj'} className="maj-button"> Maj </ToggleButton>
                  <ToggleButton value={'min'} className="min-button" > Min </ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ScaleSelector;

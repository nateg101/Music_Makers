import React from "react";
import $ from 'jquery';
import { Row, Col, Form, ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import './ScaleSelector.css'
import KEYS from "../../../../music_scales/scales"


const ScaleSelector = (props) => {
  let keyForm = React.createRef()

  const renderKeyOptions = () => {
    let keyArray = []
    Object.keys(KEYS.maj).forEach((key, i) => {
      keyArray.push(<option key={i * 5000}>{key}</option>)
    })
    return keyArray
  }

  const handleChange = () => {
    let keyMode = $("input[name=Key]:checked").val()
    let scale = keyForm.current.value || 'C'
    // props.setScale(KEYS[keyMode][scale])
    props.dispatch({
      type: "SET_SCALE",
      payload: KEYS[keyMode][scale]
    })
  }
  
  return (
    <div className='scale-selector'>
    <Row>
      <Col>
        <div className='key-selector'>
          <Form
          onChange={handleChange}
          className='key-selector-form'>
            <Form.Group controlId="key-selector-group">
              <Form.Control
              ref={keyForm}
              className='key-selector-control'
              as="select">
                <option value="" disabled selected>Key - C</option>
                {renderKeyOptions()}
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
                onChange={handleChange}>
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

export default connect()(ScaleSelector);

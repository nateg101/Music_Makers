import React, { Component } from "react";
import { InputGroup, Radio } from "react-bootstrap";
import './ScaleSelector.css'

class ScaleSelector extends Component {

  render() {
    return (
      <div>
        <div className="maj-min-buttons">
          <InputGroup.Radio className="maj-button" name="Maj"/>
          <InputGroup.Radio className="min-button" name="Min"/>
        </div>
      </div>
    )
  }
}
export default ScaleSelector;

import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayButton from "./buttons/playButton.jsx";
import OctaveSelector from "./inputs/OctaveSelector";
import './optionsBar.css'

class OptionsBar extends Component {
  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
        <Row>
          <Col>
            <PlayButton storedSequencers={this.props.storedSequencers}/>
          </Col>
          <Col>
            <OctaveSelector />
          </Col>
        </Row>
      </Card>
    </div>
    )
  }
}
export default OptionsBar;

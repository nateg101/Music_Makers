import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayButton from "./buttons/playButton.jsx";
import OctaveSelector from "./inputs/OctaveSelector";
import Tempo from "./buttons/tempo.jsx";

import './optionsBar.css'

class OptionsBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: 120
    }
    this.updateTempo = this.updateTempo.bind(this);
  }

  updateTempo = (tempo) => {
    this.setState({tempo: tempo})
  }

  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
        <Row>
          <Col>
            <PlayButton 
              tempo={this.state.tempo} 
              storedSequencers={this.props.storedSequencers}/>
          </Col>
          <Col>
            <Tempo 
              tempo={this.state.tempo} 
              updateTempo={this.updateTempo}/>
          </Col>
          <Col>
            <OctaveSelector
            octaves={this.props.octaves}
            setOctaves={this.props.setOctaves}/>
          </Col>
        </Row>
      </Card>
    </div>
    )
  }
}
export default OptionsBar;

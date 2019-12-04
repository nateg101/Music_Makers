import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayButton from "./buttons/PlayButton/PlayButton";
import OctaveSelector from "./inputs/OctaveSelector/OctaveSelector";
import Tempo from "./inputs/Tempo/Tempo";
import ScaleSelector from "./inputs/ScaleSelector/ScaleSelector"
import './OptionsBar.css'

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
          <Col sm={1}>
            <PlayButton
              tempo={this.state.tempo}
              storedPercussion={this.props.storedPercussion}
              storedSequencers={this.props.storedSequencers}/>
          </Col>
          <Col>
            <Tempo
              tempo={this.state.tempo}
              updateTempo={this.updateTempo}/>
          </Col>
          <Col sm={3}>
            <OctaveSelector
            octaves={this.props.octaves}
            setOctaves={this.props.setOctaves}/>
          </Col>
          <Col>
            <ScaleSelector
            setScale={this.props.setScale}/>  
          </Col>
        </Row>
      </Card>
    </div>
    )
  }
}
export default OptionsBar;

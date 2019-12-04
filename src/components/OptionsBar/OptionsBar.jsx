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
      tempo: 120,
      buttonText: '▶',
      isButtonActive: false,
    }
    this.updateTempo = this.updateTempo.bind(this);
    this.updateButtonState = this.updateButtonState.bind(this);
  }

  updateTempo = (tempo) => {
    this.setState({tempo: tempo})
  }

  updateButtonState = () => {
    let buttonText = this.state.buttonText === "▶" ? "◼" : "▶"

    this.setState({
      buttonText: buttonText,
      isButtonActive: !this.state.isButtonActive
    })
  }

  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
        <Row>
          <Col sm={1}>
            <PlayButton
              buttonText={this.state.buttonText}
              isButtonActive={this.state.isButtonActive}
              updateButtonState={this.updateButtonState}
              tempo={this.state.tempo}
              storedPercussion={this.props.storedPercussion}
              storedLead={this.props.storedLead}
              storedLead2={this.props.storedLead2}/>
          </Col>
          <Col sm={5}>
            <Tempo
              tempo={this.state.tempo}
              updateTempo={this.updateTempo}/>
          </Col>
          <Col sm={2}>
            <OctaveSelector
            buttonText={this.state.buttonText}
            isButtonActive={this.state.isButtonActive}
            updateButtonState={this.updateButtonState}
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

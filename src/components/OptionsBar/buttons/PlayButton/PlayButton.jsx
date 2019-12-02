import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './PlayButton.css'

class PlayButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: '▶',
      isButtonActive: false,
    }
  }

  convertBPM = () => {
    return 60000/this.props.tempo
  }

  handleClick = () => {
    this.toggleSequencer()
    this.updateButtonState()
  }

  updateButtonState = () => {
    let buttonText = this.state.buttonText === "▶" ? "◼" : "▶"

    this.setState({
      buttonText: buttonText,
      isButtonActive: !this.state.isButtonActive
    })
  }

  toggleSequencer = () => {
    let sequencers = [
      this.props.storedSequencers,
      this.props.storedPercussion
    ].flat()
    if(this.state.isButtonActive){
      this.sequencersOn(sequencers)
    } else {
      this.sequencersOff(sequencers)
    }
  }

  sequencersOn(sequencers){
    sequencers.forEach((sequencer)=>{
      sequencer.stop()
      sequencer.stepper.value = 0
      sequencer.render()
      sequencer.stepper.value = -1
    })
  }

  sequencersOff(sequencers) {
    let tempo = this.convertBPM()
    sequencers.forEach((sequencer)=>{
      setTimeout(function() {
        sequencer.start(tempo)
      }, 1)
    })
  }

  render() {
    return (
      <Button
        variant="outline-light"
        id="playback-button"
        onClick={this.handleClick}>
        <span className={this.state.isButtonActive ? 'stop-button' : "play-button"}>
          {this.state.buttonText}
        </span>
      </Button>
    )
  }
}
export default PlayButton;

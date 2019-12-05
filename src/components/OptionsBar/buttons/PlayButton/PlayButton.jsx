import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './PlayButton.css'

class PlayButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  convertBPM = () => {
    return 30000/this.props.tempo
  }

  handleClick = () => {
    this.props.updateButtonState()
    this.toggleSequencer();
  }

  toggleSequencer = () => {
    let sequencers = [
      this.props.storedLead.sequencers,
      this.props.storedLead2.sequencers,
      this.props.storedPercussion
    ].flat()
    if(this.props.isButtonActive){
      this.sequencersOff(sequencers)
    } else {
      this.sequencersOn(sequencers)
    }
  }

  sequencersOff(sequencers){
    sequencers.forEach((sequencer)=>{
      if(sequencer.interval.on) {
        sequencer.stop()
        sequencer.stepper.value = 0
        sequencer.render()
        sequencer.stepper.value = -1
      }
    })
  }

  sequencersOn(sequencers) {
    let tempo = this.convertBPM()
    sequencers.forEach((sequencer)=>{
      sequencer.start(tempo)
    })
  }

  render() {
    return (
      <Button
        variant="outline-light"
        id="playback-button"
        onClick={this.handleClick}>
        <span className={this.props.isButtonActive ? 'stop-button' : "play-button"}>
          {this.props.buttonText}
        </span>
      </Button>
    )
  }
}
export default PlayButton;

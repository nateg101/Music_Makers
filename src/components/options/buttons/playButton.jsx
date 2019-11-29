import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './playButton.css'

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
    if(this.state.isButtonActive){
      this.props.storedSequencers.forEach((sequencer)=>{
        sequencer.stop()
        sequencer.stepper.value = 0
        sequencer.render()
        sequencer.stepper.value = -1
      })
    } else {
      this.props.storedSequencers.forEach((sequencer)=>{
        let tempo = this.convertBPM()
        sequencer.start(tempo)
      })
    }
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

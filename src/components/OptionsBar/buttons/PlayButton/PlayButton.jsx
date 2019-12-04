import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './PlayButton.css'

class PlayButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // buttonText: '▶',
      // isButtonActive: false,
    }
  }

  convertBPM = () => {
    return 30000/this.props.tempo
  }

  handleClick = () => {
    console.log("smello", this.props.buttonText)
    this.props.updateButtonState()
    this.toggleSequencer();

  }



  // updateButtonState = () => {
  //   let buttonText = this.state.buttonText === "▶" ? "◼" : "▶"
  //
  //   this.setState({
  //     buttonText: buttonText,
  //     isButtonActive: !this.state.isButtonActive
  //   })
  // }

  toggleSequencer = () => {
    let sequencers = [
      this.props.storedSequencers,
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
      sequencer.stop()
      sequencer.stepper.value = 0
      sequencer.render()
      sequencer.stepper.value = -1
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

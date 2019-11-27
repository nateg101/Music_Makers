import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './playButton.css'

class PlayButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: '▶',
      isButtonActive: false
    }
  }

  handleClick = () => {



    console.log("Button clicked...")
    let buttonText = this.state.buttonText === "▶" ? "◼" : "▶"

    this.setState({
      buttonText: buttonText,
      isButtonActive: !this.state.isButtonActive
    })

    if(this.state.isButtonActive === false){
      this.props.storedSequencers.forEach((sequencer)=>{
        sequencer.start(500)
      })
    } else {
      this.props.storedSequencers.forEach((sequencer)=>{
        sequencer.stop()
        sequencer.stepper.value = -1 
      })
    }
  }

  render() {
    return (
      <Button variant="outline-light" id="playback-button" onClick={this.handleClick}><span className={this.state.isButtonActive ? 'stop-button' : "play-button"}>{this.state.buttonText}</span></Button>
    )
  }
}
export default PlayButton;

import React, {Component} from "react";
import {Button} from "react-bootstrap";

class PlayButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: '▶',
      isButtonActive: false
    }
  }

  handleClick = () => {
    this.props.storedSequencers.forEach((sequencer)=>{
      sequencer.start(500)
    })
    console.log("Button clicked...")
    let buttonText = this.state.buttonText == "▶" ? "◼" : "▶"

    this.setState({
      buttonText: buttonText,
      isButtonActive: !this.state.isButtonActive
    })
  }

  render() {
    return (
      <Button variant="outline-light" id="playback-button" onClick={this.handleClick}><span className={this.state.isButtonActive ? 'stop-button' : "play-button"}>{this.state.buttonText}</span></Button>
    )
  }
}
export default PlayButton;

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
    // let stringo = LZString.decompressFromUTF16('Ʀ弹⤤㎜ᣇዉ檮㘌篟瞰')
    // stringo = stringo.split('')
    // let noSeqs = stringo.length / 16
    // let seqState = []
    // for(let i = 0; i < noSeqs; i++) {
    //   seqState.push([stringo.slice(i * 16, i * 16 + 16).map(Number)])
    // }
    // this.props.storedSequencers.forEach((seq, i)=>{
    //   seq.matrix.set.all(seqState[i])
    // })
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

import React, {Component} from "react";
import {Button} from "react-bootstrap";
import LZString from "lz-string";
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
    var stringo=LZString.decompressFromUTF16('Ʀ弹⤤㎜ᣇዉ檮㘌篟瞰')
    stringo = stringo.split('')
    var aryStringo = []
    var seqLength = stringo.length/16
    var i=0
    console.log(stringo.length)
    for (i = 0;i < seqLength; i++) {
      aryStringo.push(stringo.split(i, i+16))
    }

    console.log(aryStringo)


    // for (i; i< noSeqs; i++) {
    //   var slicer = stringo.slice(i, i+16)
    //   console.log(stringo.length)
    //   // console.log(slicer)
    //   // console.log(slicer[0][7])
    //   // console.log(slicer)
    //   aryStringo.push(slicer)
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
      this.setSeqState()
    } else {
      this.props.storedSequencers.forEach((sequencer)=>{
        let tempo = this.convertBPM()
        sequencer.start(tempo)
      })
    }
  }

  setSeqState = () => {
    let state =[]
    this.props.storedSequencers.forEach((sequencer, index)=>{
      state.push(sequencer.matrix.pattern)
    })
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };
    state = state.flat()
    state = state.join('')
    state = state.replaceAll('false', '0')
    state = state.replaceAll('true', '1')
    state = state.replaceAll(',','')
    var compressState = LZString.compressToUTF16(state)
  }

  changeSeqState = () => {

  }


  render() {
    return (
      <Button variant="outline-light" id="playback-button" onClick={this.handleClick}><span className={this.state.isButtonActive ? 'stop-button' : "play-button"}>{this.state.buttonText}</span></Button>
    )
  }
}
export default PlayButton;

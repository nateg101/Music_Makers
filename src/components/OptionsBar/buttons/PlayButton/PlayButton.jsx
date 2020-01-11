import React, {Component} from "react";
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";
import { tempStorage, storage } from '../../../../modules/instrumentStorage'
import './PlayButton.css'

class PlayButton extends Component {

  handleClick = () => {
    this.toggleSequencers();
    this.props.dispatch({
      type: "TOGGLE_PLAY"
    })
  }

  toggleSequencers = () => {
    let sequencers = [
      storage.storedLead.sequencers,
      storage.storedLead2.sequencers,
      storage.storedPercussion
    ].flat()
    if(this.props.playing){
      this.sequencersOff(sequencers)
    } else {
      this.sequencersOn(sequencers)
    }
  }

  sequencersOff(sequencers){
    window.NexusInterval.stop()
    sequencers.forEach((sequencer)=>{
      sequencer.stepper.value = 0
      sequencer.render()
      sequencer.stepper.value = -1
    })
  }

  sequencersOn() {
    window.NexusInterval.ms(30000/this.props.tempo)
    window.NexusInterval.start()
  }

  render() {
    return (
      <Button
        variant="outline-light"
        id="playback-button"
        onClick={this.handleClick}>
        <span className={this.props.playing ? 'stop-button' : "play-button"}>
          {this.props.playing ? "◼" : "▶"}
        </span>
      </Button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tempo: state.tempo,
    playing: state.playing
  }
}
export default connect(mapStateToProps)(PlayButton);

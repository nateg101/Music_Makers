import React, { Component } from "react";
import MIDISounds from 'midi-sounds-react';

class Audio extends Component {

  playTestInstrument() {
 		this.midiSounds.playChordNow(3, [60], 2.5);
 	}
  render() {
    return (
      <div>
        <p className="intro">Press Play to play instrument sound.</p>
    <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
    <div><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
      </div>
    );
  }
}

export default Audio;

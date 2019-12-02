import Script from 'react-load-script'
import React, {Component, Fragment} from "react";

class Midi extends Component {

  componentDidMount() {

    window.MIDI.LoadPlugin({
      soundfontUrl: "./soundfont/",
  		instruments: [ "trumpet" ]
    })
    // window.MIDI.noteOn(0, 48, 127, 0);
			// window.MIDI.programChange(0, 56);
			// for (var n = 0; n < 100; n ++) {
				// var delay = n / 4; // play one note every quarter second
				// var note = 48; // the MIDI note
				// var velocity = 127; // how hard the note hits
				// play the note
				// window.MIDI.noteOn(0, note, velocity, 0);
				// play the some note 3-steps up
				// MIDI.noteOn(1, note + 3, velocity, delay);

  }

  render() {
    return (
      <div>
      </div>

  )
  }




  handleScriptCreate() {
    this.setState({scriptLoaded: false})
  }

  handleScriptError() {
    this.setState({scriptError: true})
  }

  handleScriptLoad() {
    this.setState({scriptLoaded: true})
  }

}

export default Midi;

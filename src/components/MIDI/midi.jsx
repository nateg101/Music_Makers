import Script from 'react-load-script'
import React, {Component, Fragment} from "react";

class Midi extends Component {
  render() {
    return (
      <React.Fragment>
      <Script url="../../../js/MIDI/AudioDetect.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../js/MIDI/LoadPlugin.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../js/MIDI/Plugin.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../js/MIDI/Player.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../js/Window/DOMLoader.XMLHttp.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../js/Window/DOMLoader.script.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../inc/Base64.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <Script url="../../../inc/base64binary.js" onCreate={this.handleScriptCreate.bind(this)} onError={this.handleScriptError.bind(this)} onLoad={this.handleScriptLoad.bind(this)}/>
      <div>

        {
          MIDI.loadPlugin({
            soundfontUrl: "./soundfont/",
            instruments: ["trumpet"],
            callback: function() {
              MIDI.programChange(0, 56);
              // MIDI.programChange(1, 118);
              for (var n = 0; n < 100; n++) {
                var delay = n / 4; // play one note every quarter second
                var note = 48; // the MIDI note
                var velocity = 127; // how hard the note hits
                // play the note
                MIDI.noteOn(0, note, velocity, delay);
                // play the some note 3-steps up
                // MIDI.noteOn(1, note + 3, velocity, delay);
              }
            }
          })
        }

      </div>
    </React.Fragment>
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

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar';
import OptionsBar from './components/OptionsBar/OptionsBar';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';
import LZString from "lz-string";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
    this.storedSequencers = []
    this.storedPercussion = []
    this.midiStorage = {}
  }

  componentDidUpdate() {
    this.storedSequencers = []
    this.storedPercussion = []
    this.storedSequencers.forEach((sequencer) => {
      sequencer.colorInterface()
    })
  }

  componentDidMount() {
    let self = this
    this.midiStorage.MIDIPlugin = window.MIDI
    this.midiStorage.MIDIPlugin.loadPlugin({
      soundfontUrl: "./soundfont/",
      instruments: [ "acoustic_grand_piano", "gunshot" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 0);
      self.midiStorage.MIDIPlugin.programChange(1, 127);
      self.setState({ loading: false });
    }
    })
    self.getUrlVars()
  }


  getUrlVars() {
    let params = new URLSearchParams(window.location.search)
    let piano = params.get(0)
    let percussion = params.get(1)
    if (piano) {
      this.convertPiano(piano)
    } else {
      return this.setState({ octaves: 3 })
    }
  }

  convertPiano(compString) {
    let pianoString = this.decompress(compString)
    let matrixSize = 112
    let octaves = pianoString.length / matrixSize
    let piano = []
    for (let i = 0; i < octaves; i++) {
      let octave = []
      for (let j = 0; j < 7; j++) {
        let startIndex = (j * 16) + (i * matrixSize)
        octave.push(pianoString.slice(startIndex, startIndex + 16))
      }
      piano.push(octave)
    }
    this.setState({ octaves: octaves, piano: piano })
  }

  decompress(string) {
    string = string.replace(/-/g, `+`)
                                .replace(/_/g, '/')
                                .replace(/~/g, `=`)
    return LZString.decompressFromBase64(string)
                   .split('').map(function(t){return parseInt(t)})
  }

  setOctaves = (event) => {
    this.setState({
      octaves: event.target.value
    })
  }

  render() {
    return (

      <div className="App">
        <NavbarMain storedSequencers={this.storedSequencers}/>
        {
          this.state.loading ?
          <div>Loading....</div>
          :
          <SequencerContainer
            midiStorage={this.midiStorage}
            storedSequencers={this.storedSequencers}
            storedPercussion={this.storedPercussion}
            octaves={this.state.octaves}
            onClick={this.toggle}
            expand={this.state.instrument1}
            piano={this.state.piano}/>
          }
          <OptionsBar
            storedPercussion={this.storedPercussion}
            storedSequencers={this.storedSequencers}
            octaves={this.state.octaves}
            setOctaves={this.setOctaves}/>
      </div>
    );
  }
}

export default App;

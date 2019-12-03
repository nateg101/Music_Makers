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
      instruments: [ "electric_piano_1", "electric_guitar_jazz", "pad_7_halo", "tinkle_bell", "glockenspiel", "gunshot" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 121);
      self.midiStorage.MIDIPlugin.programChange(1, 127);
      self.setState({ loading: false });
    }
    })
    self.extractUrl()
  }

  extractUrl() {
    let params = new URLSearchParams(window.location.search)
    let pianoParam = params.get(0)
    let percussionParam = params.get(1)
    if (percussionParam) {
      var drums = this.convertDrums(percussionParam)
    }
    if (pianoParam) {
      var [piano, octaves] = this.convertPiano(pianoParam)
    }
    return this.setState({
      octaves: octaves || 3,
      piano: piano,
      drums: drums,
      instrument0: true,
      instrument1: true
    })
  }

  convertDrums = (compString) => {
    let drumString = this.decompress(compString)
    console.log(drumString.length)
    let drums = []
    for(let i = 0; i < 10; i++) {
      let startIndex = i * 16
      drums.push(drumString.slice(startIndex, startIndex + 16))
    }
    return drums
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
    return [piano, octaves]
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

  toggle = (index) => {
    this.setState({ ['instrument' + index]: !this.state['instrument' + index] });
  }


  render() {
    return (
      <div className="App">
        <NavbarMain
          storedPercussion={this.storedPercussion}
          storedSequencers={this.storedSequencers}/>
        {
          this.state.loading ?
          <div>Loading....</div>
          :
          <SequencerContainer
            midiStorage={this.midiStorage}
            storedSequencers={this.storedSequencers}
            storedPercussion={this.storedPercussion}
            octaves={this.state.octaves}
            toggle={this.toggle}
            instrument0={this.state.instrument0}
            instrument1={this.state.instrument1}
            drums={this.state.drums}
            piano={this.state.piano}/>
        }
        <OptionsBar
          storedPercussion={this.storedPercussion}
          storedSequencers={this.storedSequencers}
          octaves={this.state.octaves}
          setOctaves={this.setOctaves}/>
      </div>
    )
  }
}

export default App;

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
    this.scale = [
      {letter: 'C', value: 12},
      {letter: 'D', value: 14},
      {letter: 'E', value: 16},
      {letter: 'F', value: 17},
      {letter: 'G', value: 19},
      {letter: 'A', value: 21},
      {letter: 'B', value: 23},
    ]
  }

  playNote = (triggers, octave, instrument) => {
    let notes = []
    let self = this
    triggers.forEach((note, i) => {
      if (note) {
        notes.push(self.scale[i].value + (octave * 12))
      }
    })
    if (notes.length > 0){
      this.midiStorage.MIDIPlugin.chordOn(instrument, notes, 100, 0);
    }
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

  setScale = (scale) => {
    this.scale = scale
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
            playNote={this.playNote}
            scale={this.scale}
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
          setScale={this.setScale}
          storedPercussion={this.storedPercussion}
          storedSequencers={this.storedSequencers}
          octaves={this.state.octaves}
          setOctaves={this.setOctaves}/>
      </div>
    )
  }
}

export default App;

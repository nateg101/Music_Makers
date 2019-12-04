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
      scale: [
        {letter: 'C', value: 12},
        {letter: 'D', value: 14},
        {letter: 'E', value: 16},
        {letter: 'F', value: 17},
        {letter: 'G', value: 19},
        {letter: 'A', value: 21},
        {letter: 'B', value: 23},
      ],
    }
    this.storedLead = {
      sequencers: [],
      instrument: 0
    }
    this.storedLead2 = {
      sequencers: [],
      instrument: 0
    }
    this.storedPercussion = []
    this.midiStorage = {}
    this.tempStorage = new Array(12)
  }

  playNote = (triggers, octave, instrument) => {
    let notes = []
    triggers.forEach((note, i) => {
      if (note) {
        notes.push(this.state.scale[i].value + (octave * 12))
      }
    })
    if (notes.length > 0){
      this.midiStorage.MIDIPlugin.chordOn(instrument, notes, 100, 0);
    }
  }

  componentDidUpdate() {
    console.log('app did update')
    console.log(this.tempStorage)
    this.storedLead.sequencers = []
    this.storedLead2.sequencers = []
    this.storedPercussion = []
  }
  
  componentWillUpdate(){
    console.log('app will update')
    console.log(this.tempStorage)
  }

  componentDidMount() {
    let self = this
    this.midiStorage.MIDIPlugin = window.MIDI
    this.midiStorage.MIDIPlugin.loadPlugin({
      soundfontUrl: "./soundfont/",
      instruments: [ "electric_piano_1", "electric_guitar_jazz", "electric_bass_finger", "tubular_bells", "glockenspiel", "gunshot" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 4);
      self.midiStorage.MIDIPlugin.programChange(1, 127)
      self.midiStorage.MIDIPlugin.programChange(2, 26)
      self.midiStorage.MIDIPlugin.programChange(3, 33)
      self.midiStorage.MIDIPlugin.programChange(4, 112)
      self.midiStorage.MIDIPlugin.programChange(5, 121)
      self.extractUrl()
    }
    })
  }

  extractUrl() {
    let params = new URLSearchParams(window.location.search)
    let leadParam = params.get(0)
    let percussionParam = params.get(1)
    let leadInstrument = params.get(2)
    let lead2Param = params.get(3)
    let lead2Instrument = params.get(4)
    if (percussionParam) {
      var drums = this.convertDrums(percussionParam)
    }
    if (leadParam) {
      var [leadMatrix, octaves] = this.convertLeads(leadParam)
    }
    if (lead2Param) {
      var [lead2Matrix, octaves2] = this.convertLeads(lead2Param)
    }
    if (leadInstrument) {
      this.storedLead.instrument = this.decompress(leadInstrument)
    }
    if (lead2Instrument) {
      this.storedLead2.instrument = this.decompress(lead2Instrument)
    }
    var lead = {
      matrix: leadMatrix || null
    }
    var lead2 = {
      matrix: lead2Matrix || null
    }
    return this.setState({
      octaves: octaves || 3,
      lead: lead,
      lead2: lead2,
      drums: drums,
      loading: false
    })
  }

  convertDrums = (compString) => {
    let drumString = this.decompress(compString)
    let drums = []
    for(let i = 0; i < 10; i++) {
      let startIndex = i * 32
      drums.push(drumString.slice(startIndex, startIndex + 32))
    }
    return drums
  }

  convertLeads(compString) {
    let pianoString = this.decompress(compString)
    let matrixSize = 224
    let octaves = pianoString.length / matrixSize
    let piano = []
    for (let i = 0; i < octaves; i++) {
      let octave = []
      for (let j = 0; j < 7; j++) {
        let startIndex = (j * 32) + (i * matrixSize)
        octave.push(pianoString.slice(startIndex, startIndex + 32))
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
    this.setState({
      scale: scale
    })
  }

  render() {
    return (
      <div className="App">
        <NavbarMain
          storedPercussion={this.storedPercussion}
          storedInstrument={this.state.instrument}
          storedLead={this.storedLead}
          storedLead2={this.storedLead2}/>
        {
          this.state.loading ?
          <div>Loading....</div>
          :
          <SequencerContainer
            playNote={this.playNote}
            scale={this.state.scale}
            midiStorage={this.midiStorage}
            storedLead={this.storedLead}
            storedLead2={this.storedLead2}
            storedPercussion={this.storedPercussion}
            octaves={this.state.octaves}
            drums={this.state.drums}
            lead={this.state.lead}
            lead2={this.state.lead2}
            tempStorage={this.tempStorage}/>
        }
        <OptionsBar
          setScale={this.setScale}
          storedPercussion={this.storedPercussion}
          storedLead={this.storedLead}
          storedLead2={this.storedLead2}
          octaves={this.state.octaves}
          setOctaves={this.setOctaves}/>
      </div>
    )
  }
}

export default App;

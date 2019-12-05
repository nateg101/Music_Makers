import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar';
import OptionsBar from './components/OptionsBar/OptionsBar';
import InstrumentContainer from './components/InstrumentContainer/InstrumentContainer';
import LZString from "lz-string";

class App extends React.Component {
  constructor(props) {
    super(props)
    let [instruments, octaves] = this.extractUrl()
    this.createStoredInstruments(instruments)
    this.state = {
      loading: true,
      octaves: octaves || 3,
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
    this.midiStorage = {}
  }

  componentDidUpdate() {
    this.storedLead.sequencers = []
    this.storedLead2.sequencers = []
    this.storedPercussion = []
  }
  
  componentDidMount() {
    let self = this
    this.midiStorage.MIDIPlugin = this.getWindowMidi()
    this.midiStorage.MIDIPlugin.loadPlugin({
      soundfontUrl: "./soundfont/",
      instruments: [
         "electric_piano_1",
        "electric_guitar_jazz",
        "electric_bass_finger",
        "tubular_bells",
        "glockenspiel",
        "gunshot" 
      ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 4);
      self.midiStorage.MIDIPlugin.programChange(1, 127)
      self.midiStorage.MIDIPlugin.programChange(2, 26)
      self.midiStorage.MIDIPlugin.programChange(3, 33)
      self.midiStorage.MIDIPlugin.programChange(4, 112)
      self.midiStorage.MIDIPlugin.programChange(5, 121)
      self.setState({ loading: false })
    }
    })
  }

  createStoredInstruments([
    leadMatrix,
    leadInstrument,
    lead2Matrix,
    lead2Instrument,
    drums,
  ]) {
    this.tempStorage = { 
      lead: leadMatrix || new Array(7),
      lead2: lead2Matrix || new Array(7),
      drums: [drums]
    }
    this.storedLead = {
      sequencers: [],
      instrument: leadInstrument || 0
    }
    this.storedLead2 = {
      sequencers: [],
      instrument: lead2Instrument || 0
    }
    this.storedPercussion = []
  }

  convertDrums = (compString) => {
    if (!compString) {
      return null
    }
    let drumString = this.decompress(compString)
    if (drumString.length < 320) {return null}
    let drums = []
    for(let i = 0; i < 10; i++) {
      let startIndex = i * 32
      drums.push(drumString.slice(startIndex, startIndex + 32))
    }
    return drums
  }

  convertLeads(compString) {
    if (!compString) {
      return []
    }
    let octaveArray = {
      1: [4],
      3: [5,4,3],
      5: [6,5,4,3,2],
      7: [7,6,5,4,3,2,1]
    }
    let leadString = this.decompress(compString)
    let matrixSize = 224
    if (leadString.length < matrixSize) {return []}
    let octaves = leadString.length / matrixSize
    let lead = []
    octaveArray[octaves].forEach((octave, i) => {
      let octaveArray = []
      for (let j = 0; j < 7; j++) {
        let startIndex = (j * 32) + (i * matrixSize)
        octaveArray.push(leadString.slice(startIndex, startIndex + 32))
      }
      lead[octave] = octaveArray
    })
    return [lead, octaves]
  }

  decompress(string) {
    if (!string) {
      return null
    }
    string = string.replace(/-/g, `+`)
                   .replace(/_/g, '/')
                   .replace(/~/g, `=`)
    return LZString.decompressFromBase64(string)
                   .split('').map(function(t){return parseInt(t)})
  }

  extractUrl = () => {
    let [
      leadParam,
      drumsParam,
      leadInstrumentParam,
      lead2Param,
      lead2InstrumentParam
    ] = this.getUrlParams()

    let [leadMatrix, octaves] = this.convertLeads(leadParam)
    let [lead2Matrix, ] = this.convertLeads(lead2Param)
    let leadInstrument = this.decompress(leadInstrumentParam)
    let lead2Instrument = this.decompress(lead2InstrumentParam)
    let drums = this.convertDrums(drumsParam)
    return [[leadMatrix, leadInstrument, lead2Matrix, lead2Instrument, drums], octaves]
  }

  getUrlParams() {
    let params = new URLSearchParams(window.location.search)
    return [
      params.get(0),
      params.get(1),
      params.get(2),
      params.get(3),
      params.get(4)
    ]
  }

  getWindowMidi() {
    if (window.Cypress) {
      let midi = function() {}
      midi.programChange = function() {}
      midi.chordOn = function() {}
      midi.loadPlugin = function() {}
      return midi
    }
    return window.MIDI
  }

  setOctaves = (event) => {
    this.setState({
      octaves: parseInt(event.target.value)
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
      
        <InstrumentContainer
          resetSequencers={this.resetSequencers}
          stopPlayback={this.stopPlayback}
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
        
        <OptionsBar
          setScale={this.setScale}
          storedPercussion={this.storedPercussion}
          storedLead={this.storedLead}
          storedLead2={this.storedLead2}
          setOctaves={this.setOctaves}/>
      </div>
    )
  }
}

export default App;

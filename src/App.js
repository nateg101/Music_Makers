import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { extractUrl } from './modules/urlCompression'
import { createStoredInstruments } from './modules/instrumentStorage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import setupMidi from "./modules/MIDI"
import NavbarMain from './components/navbar/navbar';
import OptionsBar from './components/OptionsBar/OptionsBar';
import InstrumentContainer from './components/InstrumentContainer/InstrumentContainer';

const App = (props) => {

  let [instruments, octaves] = extractUrl()
  createStoredInstruments(instruments)

  useEffect(() => {
    if (octaves) {
      props.dispatch({
        type: "SET_OCTAVES",
        payload: octaves
      })
    }
    const callback = (MIDIPlugin)=>{
      props.dispatch({ 
        type: "SET_MIDI",
        payload: MIDIPlugin
      })
    }
    setupMidi(
      "./soundfont/",
      [
        "electric_piano_1",
        "electric_guitar_jazz",
        "electric_bass_finger",
        "tubular_bells",
        "glockenspiel",
        "gunshot" 
      ],
      callback)
    },
    [octaves]
  )

  return (
    <div className="App">
      <NavbarMain />
    
      <InstrumentContainer />
      
      <OptionsBar />
    </div>
  )
}

export default connect()(App);

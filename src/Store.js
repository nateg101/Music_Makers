import { createStore } from 'redux';

const initialState = {
  scale: [
    {letter: 'C', value: 12},
    {letter: 'D', value: 14},
    {letter: 'E', value: 16},
    {letter: 'F', value: 17},
    {letter: 'G', value: 19},
    {letter: 'A', value: 21},
    {letter: 'B', value: 23},
  ],
  octaves: 3,
  tempo: 120,
  playing: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_SCALE":
      return {
        ...state,
        scale: action.payload,
      }
    case "SET_OCTAVES":
      return {
        ...state,
        octaves: action.payload
      } 
    case "SET_MIDI":
      return {
        ...state,
        MIDIPlugin: action.payload
      }
    case "SET_TEMPO":
      return {
        ...state,
        tempo: action.payload
      }
      case "TOGGLE_PLAY": 
      return {
        ...state,
        playing: !state.playing
      }
    default:
      return state
  }
}

const Store = createStore(reducer);

export default Store
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
      octaves: 3,
      loading: true,
      instrument1: true
    }
    this.storedSequencers = []
    this.midiStorage = {}
    this.setOctaves = this.setOctaves.bind(this)
  }

  componentDidMount() {
    let self = this
    this.midiStorage.MIDIPlugin = window.MIDI
    this.midiStorage.MIDIPlugin.loadPlugin({
      soundfontUrl: "./soundfont/",
      instruments: [ "acoustic_grand_piano" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 0);
      self.setState({loading: false});
      }
    })
    self.getUrlVars()
  }


  getUrlVars() {
    let urlParams = new URLSearchParams(window.location.search).get('0')

    if (urlParams) {
      urlParams = urlParams.replace(/\-/g, `+`) // Convert '+' to '-'
               .replace(/\_/g, '/') // Convert '/' to '_'
               .replace(/\~/g, `=`); // Remove ending '='
      let stringo = LZString.decompressFromBase64(urlParams)
      stringo = stringo.split('').map(function(t){return parseInt(t)})
      let matrixSize = 112
      let noSeqs = stringo.length / matrixSize
      let seqState = []
      for (let i = 0; i < noSeqs; i++) {
        let matrix = []
        for(let j = 0; j < 7; j++) {
          let startIndex = (j * 16) + (i * matrixSize)
          matrix.push(stringo.slice(startIndex, startIndex + 16))
        }
        seqState.push(matrix)
      }
      this.setState({ octaves: noSeqs, song: seqState })
    }else{
      return
    }
  }

  setOctaves(event) {
    this.setState({
      octaves: event.target.value
    })
  }

  toggle = () => {
    this.setState({ instrument1: !this.state.instrument1 });
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
          octaves={this.state.octaves}
          onClick={this.toggle}
          expand={this.state.instrument1}
          song={this.state.song}/>
          }
          <OptionsBar
          storedSequencers={this.storedSequencers}
          octaves={this.state.octaves}
          setOctaves={this.setOctaves}/>
      </div>
    );
  }
}

export default App;

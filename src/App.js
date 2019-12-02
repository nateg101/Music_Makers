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
    this.getUrlVars()
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
  }


  getUrlVars() {
    let urlParams = window.location.pathname.substr(1)
    console.log(urlParams)

    if (!urlParams === false) {
      let stringo = LZString.decompressFromBase64(urlParams)
      console.log('stringoFirst', stringo)
      stringo = stringo.split('').map(function(t){return parseInt(t)})
      console.log('stringo', stringo)
      let noSeqs = stringo.length / 16
      let seqState = []
      for(let i = 0; i < noSeqs; i++) {
        seqState.push([stringo.slice(i * 16, i * 16 + 16).map(Number)])
      }
      console.log('seqState', seqState)
      console.log('before', this.storedSequencers.length)
      this.storedSequencers.forEach((seq, i)=>{
        console.log('inside foreach', seq)
        seq.matrix.set.all(seqState[i])
      })
      console.log('stored', this.storedSequencers)
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
          expand={this.state.instrument1}/>
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

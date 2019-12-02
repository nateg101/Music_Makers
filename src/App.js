import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';
// import Midi from './components/MIDI/midi.jsx';

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
    console.log(this.midiStorage.MIDIPlugin)
    this.midiStorage.MIDIPlugin.loadPlugin({
      soundfontUrl: "./soundfont/",
      instruments: [ "acoustic_grand_piano" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 0);
      self.setState({loading: false});
      console.log('setting loading to false - MIDI SHOULD EXIST')
      }
    })
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
        <NavbarMain/>
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

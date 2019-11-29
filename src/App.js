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
      loading: true
    }
    this.storedSequencers = []
    this.midiStorage = {}
    this.midi = null
  }

  componentDidMount() {
    let self = this
    this.midiStorage.MIDIPlugin = window.MIDI
    console.log(this.midiStorage.MIDIPlugin)
    this.midiStorage.MIDIPlugin.loadPlugin({
  		soundfontUrl: "./soundfont/",
  		instruments: [ "trumpet" ],
      callback: function() {
        self.midiStorage.MIDIPlugin.programChange(0, 56);
        self.setState({loading: false});
        console.log('setting loading to false - MIDI SHOULD EXIST')
      }
    })
    // callback: function() {
    //   self.MIDIPlugin.programChange(0, 56);
    //   self.setState({loading: false});
    // });
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
          storedSequencers={this.storedSequencers}/>
          }
        <OptionsBar storedSequencers={this.storedSequencers}/>
      </div>
    );
  }
}

export default App;

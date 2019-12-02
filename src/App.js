import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar';
import OptionsBar from './components/OptionsBar/OptionsBar';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      octaves: 3,
      loading: true,
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
      instruments: [ "acoustic_grand_piano", "gunshot" ],
    callback: function() {
      self.midiStorage.MIDIPlugin.programChange(0, 0);
      self.midiStorage.MIDIPlugin.programChange(1, 127);
      self.setState({loading: false});
      }
    })
  }

  setOctaves(event) {
    this.setState({
      octaves: event.target.value
    })
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
          octaves={this.state.octaves}/>
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

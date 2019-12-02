import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar';
import OptionsBar from './components/OptionsBar/OptionsBar';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';
import MIDISounds from 'midi-sounds-react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      octaves: 3,
    }
    this.storedSequencers = []
    this.setOctaves = this.setOctaves.bind(this)
    this.midiStorage = {} 
  }
  
  setOctaves(event) {
    this.setState({
      octaves: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div hidden>
          <MIDISounds ref={(ref) => (this.midiStorage.midiSounds = ref)} instruments={[3]} />
        </div>
        <NavbarMain />
        <SequencerContainer
          parent={this.midiStorage}
          storedSequencers={this.storedSequencers}
          octaves={this.state.octaves}/>

        <OptionsBar
        storedSequencers={this.storedSequencers}
        octaves={this.state.octaves}
        setOctaves={this.setOctaves}/>
      </div>
    );
  }
}

export default App;

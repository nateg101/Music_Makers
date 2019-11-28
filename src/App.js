import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      octaves: 3
    }
    this.storedSequencers = []
    this.setOctaves = this.setOctaves.bind(this)
  }

  setOctaves(event) {
    this.setState({
      octaves: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <NavbarMain />
        <SequencerContainer
        storedSequencers={this.storedSequencers}
        octaves={this.state.octaves}/>
        <OptionsBar
        storedSequencers={this.storedSequencers}
        setOctaves={this.setOctaves}/>
      </div>
    );
  }
}

export default App;

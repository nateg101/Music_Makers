import React from 'react';
import Nexus from 'nexusui'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerComponent/SequencerComponent';


class App extends React.Component {
  render() {
    // window.Nexus = Nexus
    // var element = React.createElement('a')
    // const sequencer = new Nexus.Sequencer(element)
    return (
      <div className="App">
      <NavbarMain/>
      <SequencerContainer/>
      <div className='options d-flex justify-content-center'>
        <OptionsBar />
      </div>
      </div>
    );
  }
}

export default App;

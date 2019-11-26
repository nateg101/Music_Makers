import React from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerContainer'

function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <SequencerContainer />
      <OptionsBar/>
    </div>
  );
}

export default App;

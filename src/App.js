import React from 'react';
import logo from './logo.svg';
import './App.css';
import SequencerContainer from './components/SequencerContainer/SequencerContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SequencerContainer />
      <SequencerContainer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerComponent/SequencerComponent.jsx'

function App() {
  return (
    <div className="App">
    <NavbarMain/>
    <SequencerContainer/>
    <div className='options d-flex justify-content-center'>
      <OptionsBar/>
    </div>
    </div>
  );
}

export default App;

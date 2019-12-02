import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/navbar/navbar.jsx';
import OptionsBar from './components/options/optionsBar.jsx';
import SequencerContainer from './components/SequencerContainer/SequencerContainer';
import LZString from "lz-string";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.storedSequencers = []
  }

  componentDidMount() {
    this.getUrlVars()
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


  render() {
    return (
      <div className="App">
        <NavbarMain storedSequencers={this.storedSequencers}/>
        <SequencerContainer storedSequencers={this.storedSequencers}/>
        <OptionsBar storedSequencers={this.storedSequencers}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";
import InstrumentSelect from "./buttons/instrumentSelect.jsx";

import Tempo from "./buttons/tempo.jsx";
import './optionsBar.css'

class OptionsBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: 120
    }
    this.updateTempo = this.updateTempo.bind(this);
  }

  updateTempo = (tempo) => {
    this.setState({tempo: tempo})
  }

  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
      <PlayButton tempo={this.state.tempo} storedSequencers={this.props.storedSequencers}/>
      <Tempo tempo={this.state.tempo} updateTempo={this.updateTempo}/>
      <InstrumentSelect/>
      </Card>
    </div>
    )
  }
}
export default OptionsBar;

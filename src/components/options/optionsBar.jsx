import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";
import Tempo from "./buttons/tempo.jsx";
import './optionsBar.css'

class OptionsBar extends Component {
  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
      <PlayButton storedSequencers={this.props.storedSequencers}/>
      <Tempo/>
      </Card>
    </div>
    )
  }
}
export default OptionsBar;

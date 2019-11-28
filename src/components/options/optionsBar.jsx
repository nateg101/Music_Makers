import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";
import OctaveSelector from "./inputs/OctaveSelector";
import './optionsBar.css'

class OptionsBar extends Component {
  render() {
    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
      <PlayButton storedSequencers={this.props.storedSequencers}/>
      </Card>
      <OctaveSelector />
    </div>
    )
  }
}
export default OptionsBar;

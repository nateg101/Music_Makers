import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";
import './optionsBar.css'

class OptionsBar extends Component {
  render() {
    return (
      <Card className='option-bar' body>
      <PlayButton/>
      </Card>
    )
  }
}
export default OptionsBar;

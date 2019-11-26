import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";
import './optionsBar.css'

class OptionsBar extends Component {
  render() {
    return (
      <div className='options d-flex justify-content-center'>
        <Card className='option-bar' body>
        <PlayButton/>
        </Card>
      </div>
    )
  }
}
export default OptionsBar;

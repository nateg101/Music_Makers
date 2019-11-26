import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PlayButton from "./buttons/playButton.jsx";

class OptionsBar extends Component {
  render() {
    return (
      <Card body>
      <PlayButton storedSequencers={this.props.storedSequencers}/>
      </Card>
    )
  }
}
export default OptionsBar;

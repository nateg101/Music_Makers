import React, { Component } from "react";
import { Button } from "react-bootstrap";

class PlayButton extends Component {
  render() {
    return (
      <Button variant="outline-light" id="playback-button">
      <span class="play-button">&#9654;</span>
      </Button>
    )
  }
}
export default PlayButton;

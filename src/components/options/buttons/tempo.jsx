import React, {Component} from "react";
import {Button} from "react-bootstrap";
import InputRange from "react-input-range"
import './tempo.css'
import 'react-input-range/lib/css/index.css'

class Tempo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempo: 120
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({defaultTempo: event})
    console.log("default", this.state.tempo)
  }

  render() {
    return (
      <form className='tempo-slider'>
      <div className="tempo-range">
      <InputRange
        type="tempo"
        maxValue={200}
        minValue={50}
        value={this.state.tempo}
        onChange={this.handleChange} />
        </div>
        </form>
    );
  }
}
export default Tempo;

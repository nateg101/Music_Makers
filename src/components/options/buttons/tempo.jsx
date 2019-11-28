import React, {Component} from "react";
import {Button} from "react-bootstrap";
import InputRange from "react-input-range"
import './tempo.css'
import 'react-input-range/lib/css/index.css'

class Tempo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 120
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({tempoBPM: event.target.value})
  }

  render() {
    return (
      <form className='tempo-slider'>
      <div className="tempo-range">
      <InputRange
        maxValue={200}
        minValue={50}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
        </div>
        </form>
    );
  }
        // <Button variant="outline-light" id="tempo-down">{"<"}</Button>
        // <input className="tempo-input" type="number" min="50" max="200" name="tempo" value={this.state.tempoBPM} onChange={this.handleChange}/>
        // <Button variant="outline-light" id="tempo-up">{">"}</Button>
}
export default Tempo;

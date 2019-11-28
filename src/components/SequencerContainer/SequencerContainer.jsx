import React from 'react'
import ReactDOM from 'react-dom'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './SequencerContainer.css'

export default class SequencerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      octaves: this.props.octaves
    }
  }

  render() {
    console.log(this.state.octaves)
    let scale = [
      {letter: 'B', value: 23},
      {letter: 'A', value: 21},
      {letter: 'G', value: 19},
      {letter: 'F', value: 17},
      {letter: 'E', value: 16},
      {letter: 'D', value: 14},
      {letter: 'C', value: 12}
    ]
    return (
      <div className="sequencer-wrapper">
        <SequencerComponent
        octave={5}
        scale={scale}
        storedSequencers={this.props.storedSequencers}/>
        <SequencerComponent
        octave={4}
        scale={scale}
        storedSequencers={this.props.storedSequencers}/>
        <SequencerComponent
        octave={3}
        scale={scale}
        storedSequencers={this.props.storedSequencers}/>
      </div>
    )
  }

}

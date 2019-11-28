import React from 'react'
import ReactDOM from 'react-dom'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './SequencerContainer.css'

export default class SequencerContainer extends React.Component {

  renderSequencers = () => {
    let scale = [
      {letter: 'B', value: 23},
      {letter: 'A', value: 21},
      {letter: 'G', value: 19},
      {letter: 'F', value: 17},
      {letter: 'E', value: 16},
      {letter: 'D', value: 14},
      {letter: 'C', value: 12}
    ]
    let sequencers = []
    let octaveArray = {
      1: [4],
      3: [5,4,3],
      5: [6,5,4,3,2],
      7: [7,6,5,4,3,2,1]
    }
    octaveArray[this.props.octaves].forEach((octave, i) => {
      sequencers.push(
        <SequencerComponent
          key={i + 100 * octave}
          parent={this.props.parent}
          octave={octave}
          scale={scale}
          storedSequencers={this.props.storedSequencers}/>
        )
      })
    return sequencers
  }

  render() {
    return (
      <div className="sequencer-wrapper">
        {this.renderSequencers()}
      </div>
    )
  }

}

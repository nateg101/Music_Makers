import React from 'react'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import { Card } from 'react-bootstrap'
import './SequencerContainer.scss'

export default class SequencerContainer extends React.Component {

  renderPianoSequencers = () => {
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
          midiStorage={this.props.midiStorage}
          instrument={0}
          octave={octave}
          scale={scale}
          storedSequencers={this.props.storedSequencers}/>
        )
      })
    return sequencers
  }
  
  render() {
    let drumNotes = [
      {letter: 'crash', value: 57},
      {letter: 'low', value: 45},
      {letter: 'cowbell', value: 56},
      {letter: 'ride', value: 59},
      {letter: 'hi tom', value: 50},
      {letter: 'mid tom', value: 47},
      {letter: 'something?', value: 70},
      {letter: 'hats-open', value: 46},
      {letter: 'hats', value: 44},
      {letter: 'snare', value: 38},
      {letter: 'kick', value: 36},
    ]
    const { expand, onClick } = this.props;
    return (
      <div className='instruments'>
        <div className="piano-sequencer-wrapper card" >
          <Card.Header className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>Instrument 1</Card.Header>
          <div className={expand ? 'content is-expanded' : 'content'}>
          {this.renderPianoSequencers()}
          </div>
        </div>
        <div className="drum-sequencer-wrapper card" >
          <Card.Header className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>Percussion</Card.Header>
          <div className={expand ? 'content is-expanded' : 'content'}>
          <SequencerComponent
            key={10 + 1000}
            rows={11}
            midiStorage={this.props.midiStorage}
            instrument={1}
            octave={0}
            scale={drumNotes}
            storedSequencers={this.props.storedSequencers}/>
          </div>
        </div>
      </div>
    )
  }

}

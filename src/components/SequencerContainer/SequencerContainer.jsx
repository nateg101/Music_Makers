import React from 'react'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import { Card, Form } from 'react-bootstrap'
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
      let matrix
      if(this.props.piano) {
        matrix = this.props.piano[i]
      }
      sequencers.push(
        <SequencerComponent
          key={i + 100 * octave}
          midiStorage={this.props.midiStorage}
          instrument={0}
          octave={octave}
          scale={scale}
          noteNameClass={'piano'}
          matrix={matrix || null}
          storedSequencers={this.props.storedSequencers}/>
        )
      })
    return sequencers
  }

  render() {
    let drumNotes = [
      {letter: 'crash', value: 57},
      {letter: 'cowbell', value: 56},
      {letter: 'ride', value: 59},
      {letter: 'hi tom', value: 50},
      {letter: 'mid tom', value: 47},
      {letter: 'low tom', value: 45},
      {letter: 'open hh', value: 46},
      {letter: 'hats', value: 44},
      {letter: 'snare', value: 38},
      {letter: 'kick', value: 36},
    ]

    return (
      <div className='instruments'>
        <div className="piano-sequencer-wrapper card" >
          <Card.Header className={this.props.instrument0 ? 'title is-expanded' : 'title'} onClick={()=>{this.props.toggle(0)}}><span className="instrument-name">Instrument 1</span>
          <Form
          className='instrument-select'>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
              as="select"
              onChange={this.props.setOctaves}>
                <option value="" disabled selected>Select instrument...</option>
                <option>1</option>
                <option>3</option>
                <option>5</option>
                <option>7</option>
              </Form.Control>
            </Form.Group>
          </Form>
          </Card.Header>
          <div className={this.props.instrument0 ? 'content is-expanded' : 'content'}>
          {this.renderPianoSequencers()}
          </div>
        </div>
        <div className="drum-sequencer-wrapper card" >
          <Card.Header className={this.props.instrument1 ? 'title is-expanded' : 'title'} onClick={()=>{this.props.toggle(1)}}>Percussion</Card.Header>
          <div className={this.props.instrument1 ? 'content is-expanded' : 'content'}>
          <SequencerComponent
            key={10 + 1000}
            matrix={this.props.drums}
            rows={drumNotes.length}
            midiStorage={this.props.midiStorage}
            instrument={1}
            octave={0}
            scale={drumNotes}
            noteNameClass={'drums'}
            storedSequencers={this.props.storedPercussion}/>
          </div>
        </div>
      </div>
    )
  }

}

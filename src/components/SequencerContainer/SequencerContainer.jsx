import React from 'react'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import { Card } from 'react-bootstrap'
import './SequencerContainer.scss'

export default class SequencerContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      instrument0: true,
      instrument1: true
    }
    this.drumNotes = [
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
  }

  toggle = (index) => {
    this.setState({ ['instrument' + index]: !this.state['instrument' + index] });
  }

  componentDidUpdate(){
    console.log('zoop')
  }
  renderPianoSequencers = () => {
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
          playNote={this.props.playNote}
          key={i + 100 * octave}
          midiStorage={this.props.midiStorage}
          instrument={0}
          octave={octave}
          intermittentStorage={{}}
          scale={this.props.scale}
          noteNameClass={'piano'}
          matrix={matrix || null}
          storedSequencers={this.props.storedSequencers}/>
        )
      })
    return sequencers
  }

  playDrumNote = (triggers, octave, instrument) => {
    let notes = []
    triggers.forEach((note, i) => {
      if (note) {
        notes.push(this.drumNotes[i].value + (octave * 12))
      }
    })
    if (notes.length > 0){
      this.props.midiStorage.MIDIPlugin.chordOn(instrument, notes, 100, 0);
    }
  }

  render() {
    return (
      <div className='instruments'>
        <div className="piano-sequencer-wrapper card" >
          <Card.Header className={this.state.instrument0 ? 'title is-expanded' : 'title'} onClick={()=>{this.toggle(0)}}>Instrument 1</Card.Header>
          <div className={this.state.instrument0 ? 'content is-expanded' : 'content'}>
          {this.renderPianoSequencers()}
          </div>
        </div>
        <div className="drum-sequencer-wrapper card" >
          <Card.Header className={this.state.instrument1 ? 'title is-expanded' : 'title'} onClick={()=>{this.toggle(1)}}>Percussion</Card.Header>
          <div className={this.state.instrument1 ? 'content is-expanded' : 'content'}>
          <SequencerComponent
            intermittentStorage={{}}
            playNote={this.playDrumNote}
            key={10 + 1000}
            matrix={this.props.drums}
            rows={this.drumNotes.length}
            midiStorage={this.props.midiStorage}
            instrument={1}
            octave={0}
            scale={this.drumNotes}
            noteNameClass={'drums'}
            storedSequencers={this.props.storedPercussion}/>
          </div>
        </div>
      </div>
    )
  }

}

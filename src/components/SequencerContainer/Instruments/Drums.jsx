import React from 'react'
import { Card } from 'react-bootstrap'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './instrument.css'


export default class Drums extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: true,
    }
    this.drumNotes = [
     {letter: "kick", value: 36},
     {letter: "snare", value: 38},
     {letter: "hats", value: 44},
     {letter: "open hh", value: 46},
     {letter: "low tom", value: 45},
     {letter: "mid tom", value: 47},
     {letter: "hi tom", value: 50},
     {letter: "ride", value: 59},
     {letter: "cowbell", value: 56},
     {letter: "crash", value: 57}
   ]
  }

  toggle = (index) => {
    this.setState({ visible: !this.state.visible });
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
        <div className='drums-container card'>
          <Card.Header
          className={this.state.visible ? 'title is-expanded' : 'title'}
          onClick={()=>{this.toggle(1)}}>
            Percussion
          </Card.Header>
          <div className={this.state.visible ? 'content is-expanded' : 'content'}>
            <SequencerComponent
            playNote={this.playDrumNote}
            key={10 + 1000}
            matrix={this.props.drums}
            rows={this.drumNotes.length}
            instrument={1}
            octave={0}
            scale={this.drumNotes}
            noteNameClass={'drums'}
            storedSequencers={this.props.storedPercussion}
            tempStorage={this.props.tempStorage}
            midiStorage={this.props.midiStorage}/>
          </div>
        </div>
    )
  }
}

import React from 'react'
import { Card, Accordion, Button } from 'react-bootstrap'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './Instrument.css'


export default class Drums extends React.Component {
  constructor(props){
    super(props)
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

  playDrumNote = (triggers, octave, instrument) => {
    if (!this.ready || !this.props.midiStorage.MIDIPlugin) {
      return
    }
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

  appendToSequencers = (sequencer) => {
    this.props.storedPercussion.push(sequencer)
    this.ready = true
  }

  render() {
      return (
        <div className="drum-sequencer-wrapper-container">
          <div className='drums-container card'>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  Percussion
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Expand / Collapse
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="drum-sequencer-wrapper">
                    <SequencerComponent
                      onReady={this.appendToSequencers}
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
                      tempStorage={this.props.tempStorage}/>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
    )
  }
}

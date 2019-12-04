import React from 'react'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import { Card, Form, Accordion, Button } from 'react-bootstrap'
import './SequencerContainer.scss'

export default class SequencerContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      instrument0: true,
      instrument1: true
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
    this.setState({ ['instrument' + index]: !this.state['instrument' + index] });
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
      console.log("yaman", this.props.instrument1)
      sequencers.push(
        <SequencerComponent
          playNote={this.props.playNote}
          key={i + 100 * octave}
          midiStorage={this.props.midiStorage}
          instrument={this.props.instrument}
          octave={octave}
          intermittentStorage={{}}
          scale={this.props.scale}
          noteNameClass={'piano'}
          matrix={matrix || null}
          storedSequencers={this.props.storedSequencers}
          tempStorage={this.props.tempStorage}/>
        )
      })
    return sequencers
  }

  renderInstrumentName = (instrument) => {
    let instrumenthash = {
      0: 'Electric Piano',
      2: 'Electric Jazz Guitar',
      3: 'Synth Pad Halo',
      4: 'Tubular Bells',
      5: 'Glockenspiel'
      }
    return instrumenthash[instrument]
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
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Form
                className='instrument-select'>
                  <Form.Group id="instrument-form">
                    <Form.Label className="select-instrument-label">Select Instrument</Form.Label>
                    <Form.Control className='select-instrument-control'
                    as="select"
                    onChange={this.props.setInstrument}>
                      <option value="" disabled selected>{this.renderInstrumentName(this.props.instrument)}</option>
                      <option value="0">{this.renderInstrumentName(0)}</option>
                      <option value="2">{this.renderInstrumentName(2)}</option>
                      <option value="3">{this.renderInstrumentName(3)}</option>
                      <option value="4">{this.renderInstrumentName(4)}</option>
                      <option value="5">{this.renderInstrumentName(5)}</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.renderPianoSequencers()}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              Percussion
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="drum-sequencer-wrapper card" >
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
                      storedSequencers={this.props.storedPercussion}
                      tempStorage={this.props.tempStorage}/>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }

}

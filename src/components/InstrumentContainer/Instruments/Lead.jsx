import React from 'react'
import { Card, Form, Accordion, Button } from 'react-bootstrap'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './Instrument.css'



export default class Lead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      instrument: this.props.storedLead.instrument
    }
    this.octaveArray = {
      1: [4],
      3: [5,4,3],
      5: [6,5,4,3,2],
      7: [7,6,5,4,3,2,1]
    }
  }

  playNote = (triggers, octave) => {
    if (!this.ready || !this.props.midiStorage.MIDIPlugin) {
      return
    }
    let notes = []
    triggers.forEach((note, i) => {
      if (note) {
        notes.push(this.props.scale[i].value + (octave * 12))
      }
    })
    if (notes.length > 0) {
      this.props.midiStorage.MIDIPlugin.chordOn(this.state.instrument, notes, 100, 0);
    }
  }

  renderInstrumentName = (instrument) => {
    let instrumenthash = {
      0: 'Electric Piano',
      2: 'Electric Jazz Guitar',
      3: 'Electric Bass',
      4: 'Tubular Bells',
      5: 'Glockenspiel'
    }
    return instrumenthash[instrument]
  }

  setInstrument = (event) => {
    window.NexusInterval.stop()
    this.setState({
      instrument: parseInt(event.target.value)
    })
    this.props.storedLead.sequencers = []
    this.props.storedLead.instrument = event.target.value
  }


  renderLeadSequencers = () => {
    let sequencers = []
    this.octaveArray[this.props.octaves].forEach((octave, i) => {
      sequencers.push(
        <SequencerComponent
          onReady={this.appendToSequencers}
          playNote={this.playNote}
          key={i * this.props.keySeed + 100 * octave}
          midiStorage={this.props.midiStorage}
          instrument={this.state.instrument}
          octave={octave}
          scale={this.props.scale}
          noteNameClass={'lead'}
          tempStorage={this.props.tempStorage}/>
        )
      })
    return sequencers
  }

  appendToSequencers = (sequencer) => {
    this.props.storedLead.sequencers.push(sequencer)
    if (this.props.storedLead.sequencers.length === this.props.octaves) {
      this.ready = true
    }
  }

  render() {
    return(
      <div className='lead-container'>
        <Accordion defaultActiveKey="0" className="lead-accordion">
          <Card>
            <Card.Header>
              <Form
                className='instrument-select'>
                  <Form.Group id="instrument-form">
                    <Form.Label className="select-instrument-label">Select Instrument</Form.Label>
                    <Form.Control className='select-instrument-control'
                      as="select"
                      onChange={this.setInstrument}
                      defaultValue={this.state.instrument}>
                      <option value="0">{this.renderInstrumentName(0)}</option>
                      <option value="2">{this.renderInstrumentName(2)}</option>
                      <option value="3">{this.renderInstrumentName(3)}</option>
                      <option value="4">{this.renderInstrumentName(4)}</option>
                      <option value="5">{this.renderInstrumentName(5)}</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              <Accordion.Toggle as={Button} className="expander" variant="link" eventKey="0">
                Expand / Collapse
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="lead-sequencer-wrapper">
                {this.renderLeadSequencers()}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

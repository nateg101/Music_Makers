import React from 'react'
import { Card, Form, Accordion, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './Instrument.css'

const OCTAVE_MAP = {
  1: [4],
  3: [5,4,3],
  5: [6,5,4,3,2],
  7: [7,6,5,4,3,2,1]
}

const INSTRUMENT_MAP = {
  0: 'Electric Piano',
  2: 'Electric Jazz Guitar',
  3: 'Electric Bass',
  4: 'Tubular Bells',
  5: 'Glockenspiel'
}

class Lead extends React.Component {
  constructor(props){
    super(props)
    this.sequencers = []
    this.instrument = this.props.instrument || 0
  }

  componentDidUpdate= () => {
    this.sequencers = []
  }

  playNote = (triggers, octave) => {
    if (!this.ready || !this.props.MIDIPlugin) {
      return
    }
    let notes = []
    triggers.forEach((note, i) => {
      if (note) {
        notes.push(this.props.scale[i].value + (octave * 12))
      }
    })
    if (notes.length > 0) {
      try {
        this.props.MIDIPlugin.chordOn(this.instrument, notes, 100, 0);
      }
      catch {
        console.warn('MIDI not ready!')
      }
    }
  }

  setInstrument = (event) => {
    this.instrument = event.target.value
    this.props.storeInstrument(this.props.name, event.target.value)
  }


  renderLeadSequencers = () => {
    let sequencers = []
    let keySeed = this.props.name.split("").reduce((acc, letter) => {
      return acc += letter.charCodeAt(0) 
    }, 0)
    OCTAVE_MAP[this.props.octaves].forEach((octave, i) => {
      sequencers.push(
        <SequencerComponent
          onReady={this.appendToSequencers}
          playNote={this.playNote}
          key={i * keySeed + 100 * octave}
          octave={octave}
          scale={this.props.scale}
          noteNameClass={'lead'}
          tempStorage={this.props.tempStorage}/>
        )
      })
    return !this.props.MIDIPlugin ? "Loading..." : sequencers
  }

  appendToSequencers = (sequencer) => {
    this.sequencers.push(sequencer)
    if (this.sequencers.length === this.props.octaves) {
      this.ready = true
      this.props.storeSequencers(this.props.name, this.sequencers)
    }
  }

  render() {
    return (
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
                      defaultValue={this.instrument}>
                      <option value="0">{INSTRUMENT_MAP[0]}</option>
                      <option value="2">{INSTRUMENT_MAP[2]}</option>
                      <option value="3">{INSTRUMENT_MAP[3]}</option>
                      <option value="4">{INSTRUMENT_MAP[4]}</option>
                      <option value="5">{INSTRUMENT_MAP[5]}</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              <Accordion.Toggle as={Button} className="expander pull-right" variant="link" eventKey="0">
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

const mapStateToProps = (state) => {
  return {
    scale: state.scale,
    octaves: state.octaves,
    MIDIPlugin: state.MIDIPlugin
  }
}

export default connect(mapStateToProps)(Lead)
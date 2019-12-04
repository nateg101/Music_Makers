import React from 'react'
import { Card, Form, Accordion, Button } from 'react-bootstrap'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './Instrument.css'



export default class Lead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: true
    }
    this.octaveArray = {
      1: [4],
      3: [5,4,3],
      5: [6,5,4,3,2],
      7: [7,6,5,4,3,2,1]
    }
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


    toggle = (index) => {
      this.setState({ ['instrument' + index]: !this.state['instrument' + index] });
    }

    renderPianoSequencers = () => {
    let sequencers = []
    this.octaveArray[this.props.octaves].forEach((octave, i) => {
      let matrix

      if(this.props.piano) {
        matrix = this.props.piano[i]
      }
      sequencers.push(
        <SequencerComponent
          playNote={this.props.playNote}
          key={i + 100 * octave}
          midiStorage={this.props.midiStorage}
          instrument={this.props.instrument}
          octave={octave}
          scale={this.props.scale}
          noteNameClass={'piano'}
          matrix={matrix || null}
          storedSequencers={this.props.storedSequencers}
          tempStorage={this.props.tempStorage}/>
        )
      })
    return sequencers
  }

  render() {
    return(
      <div className='lead-container'>
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
              <Accordion.Toggle as={Button} className="expander" variant="link" eventKey="0">
                Expand / Collapse
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="piano-sequencer-wrapper">
                {this.renderPianoSequencers()}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

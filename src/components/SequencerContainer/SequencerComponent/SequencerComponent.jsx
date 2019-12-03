import React from 'react'
import { Sequencer } from 'react-nexusui'
import { Container, Row, Card, Col } from 'react-bootstrap'
import NoteNames from './NoteNames/NoteNames'
import './SequencerComponent.css'

export default class SequencerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.myInput = React.createRef()
    this.render = this.render.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: this.myInput.current.offsetWidth });
    if (this.sequencer){
      let self = this
      setTimeout(function() {
        self.sequencer.colorInterface()
      }, 0)
    }
  }

  handleChange = (change) => {
    if(change.state) {
      let triggers = new Array(this.props.scale.length)
      triggers[triggers.length - change.row - 1] = 1
      this.props.playNote(triggers, this.props.octave, this.props.instrument)
    }
  }

  handleOnReady = (sequencer) => {
    if (this.props.midiStorage.MIDIPlugin) {
      this.props.storedSequencers.push(sequencer)
    }
    if (this.props.matrix) {
      sequencer.matrix.set.all(this.props.matrix)
      setTimeout(function() {
        sequencer.colorInterface()
      }, 0)
    }
    this.sequencer = sequencer
  }

  render() {
      return (
        <Container>
          <Row key={this.props.octave + 10}>
            <Col sm={1} className='no-gutters'>
              <NoteNames
                noteNameClass={this.props.noteNameClass}
                octave={this.props.octave}
                scale={this.props.scale}/>
            </Col>
            <Col sm={11} className='no-gutters'>
              <Container className='sequencer-component' id="notes" ref={this.myInput}>
                {this.state.width ? <Sequencer
                  key={this.props.octave + 12}
                  rows={this.props.rows || 7}
                  columns={16}
                  size={[this.state.width*0.9412, this.state.width*0.27]}
                  onReady={this.handleOnReady}
                  onChange={this.handleChange}
                  onStep={(state)=>{this.props.playNote(state, this.props.octave, this.props.instrument)}}/> : <div>Loading....</div>}
              </Container>
            </Col>
            <hr></hr>
          </Row>
      </Container>
    )
  }
}

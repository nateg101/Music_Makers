import React from 'react'
import { Sequencer } from 'react-nexusui'
import { Container, Row, Card, Col } from 'react-bootstrap'
import './SequencerComponent.css'

export default class SequencerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.myInput = React.createRef()
    this.playNote = this.playNote.bind(this)
    this.render = this.render.bind(this)
    this.setKey()
  }

  setKey() {
    this.key = []
    for(let i = 0; i < this.props.scale.length; i++){
      this.key.unshift(this.props.scale[i].value + (this.props.octave * 12))
    }
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
      this.playNote(triggers)
    }
  }

  playNote(triggers) {
    let notes = []
    triggers.forEach((note, i)=>{
      if (note) {
        notes.push(this.key[i])
      }
    })
    if (notes.length > 0){
      this.props.midiStorage.MIDIPlugin.chordOn(this.props.instrument, notes, 100, 0);
    }
  }

  renderNoteNames = () => {
    let noteNames = []
    for(let i = 0; i < this.props.scale.length; i++){
      noteNames.push(
        <Card 
          key={i + 15 * this.props.octave}
          className={`note-card ${this.props.noteNameClass}-notes justify-content-center border-0`}>
          {"" + this.props.scale[i].letter + (this.props.octave || "") }
        </Card>
      )
    }
    return noteNames
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
              {this.renderNoteNames()}
            </Col>
            <Col sm={11} className='no-gutters'>
              <Container className='sequencer-component' id="notes" ref={this.myInput}>
                {this.state.width ? <Sequencer
                  key={this.props.octave + 12}
                  rows={this.props.rows || 7}
                  columns={16}
                  size={[this.state.width*0.9412, this.state.width*0.27]}
                  onReady={this.handleOnReady}
                  onChange={function() {}}
                  onStep={this.playNote}/> : <div>Loading....</div>}
              </Container>
            </Col>
            <hr></hr>
          </Row>
      </Container>
    )
  }
}

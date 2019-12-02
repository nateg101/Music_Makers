import React from 'react'
import { Sequencer } from 'react-nexusui'
import { Container, Row, Card, Col } from 'react-bootstrap'
import './SequencerComponent.css'

export default class SequencerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
    this.myInput = React.createRef()
    this.playNote = this.playNote.bind(this)
    this.render = this.render.bind(this)
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
      console.log(notes)
      this.props.midiStorage.MIDIPlugin.chordOn(this.props.instrument, notes, 100, 0);
    }
  }

  renderNoteNames = () => {
    let noteNames = []
    for(let i = 0; i < this.props.scale.length; i++){
      noteNames.push(
        <Card key={i + 15 * this.props.octave} className={`note-card ${this.props.noteNameClass}-notes justify-content-center border-0`}>
          {"" + this.props.scale[i].letter + (this.props.octave || "") }
        </Card>
      )
    }
    return noteNames
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
              <Sequencer
                key={this.props.octave + 12}
                rows={this.props.rows || 7}
                columns={16}
                size={[this.state.width*0.9412, this.state.width*0.27]}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.handleChange}
                onStep={this.playNote}/>
            </Container>
          </Col>
          <hr></hr>
        </Row>
    </Container>
    )
  }
}

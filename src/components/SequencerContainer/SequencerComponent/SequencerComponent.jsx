import React from 'react'
import { Sequencer } from 'react-nexusui'
import { Container, Row, Card } from 'react-bootstrap'
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

  playNote(on, note) {
    if(on.state || on[0] === 1) {
      this.props.midiStorage.MIDIPlugin.noteOn(0,note,127, 0);
    }
  }

  render() {
    let colors = [
      '#ffff00',
      '#ee82ee',
      '#ffa500',
      '#008000',
      '#0000ff',
      '#4b0082',
      '#ff0000'
    ]
    let self = this
    const someOctave = this.props.octave
    return (
      <div >
        <Container className='sequencer-container' id="notes" ref={this.myInput}>
            {this.props.scale.map(function(note, i) {
                  return (
                    <Row key={i + 10 * someOctave}>
                      <Card key={i + 11 * someOctave} className='note-card justify-content-center border-0'>
                        {note.letter + someOctave}
                      </Card>
                      <Sequencer
                        key={i + 12 * someOctave}
                        rows={1}
                        columns={16}
                        size={[self.state.width*0.9412,self.state.width*0.07]}
                        color={colors[i]}
                        note={(note.value + (someOctave * 12))}
                        onReady={(sequencer)=>{self.props.storedSequencers.push(sequencer)}}
                        onChange={self.playNote}
                        onStep={self.playNote}/>
                    </Row>
                  )
                }
              )}
        </Container>
      </div>
    )
  }
}

import React from 'react'
import { Sequencer } from 'react-nexusui'
import { Container, Row, Card } from 'react-bootstrap'
import './SequencerComponent.css'
import MIDISounds from 'midi-sounds-react'

export default class SequencerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
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
    console.log('here')
    console.log(on, note)
    if(on.state || on[0] === 1) {
      this.midiSounds.playChordNow(3,[note], 1);
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
      return (
        <div >
          <div hidden>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} />
          </div>
          <Container className='sequencer-container' id="notes" ref={this.myInput}>
              {this.props.scale.map(function(note, i) {
                    return (
                      <Row key={i + self.props.octave}>
                        <Card key={i + 1 + self.props.octave} className='note-card justify-content-center border-0'>
                          {note.letter + self.props.octave}
                        </Card>
                        <Sequencer
                          key={i + 2 + self.props.octave}
                          rows={1}
                          columns={16}
                          size={[self.state.width*0.9412,self.state.width*0.07]}
                          color={colors[i]}
                          note={note.value + (self.props.octave * 12)}
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

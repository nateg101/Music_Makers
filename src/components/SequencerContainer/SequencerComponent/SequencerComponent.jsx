import React from 'react'
import { Sequencer } from '../../Nexus'
import { Container, Row, Card } from 'react-bootstrap'
import './SequencerComponent.css'
import MIDISounds from 'midi-sounds-react';

export default class SequencerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.myInput = React.createRef()
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: this.myInput.current.offsetWidth, height: this.myInput.current.offsetWidth });
  };

  playNote(note) {
    this.midiSounds.playChordNow(3,[note], 2.5);
  }

  render() {
    let noteHighB = 71
    let noteHighA = 69
    let noteMidG = 67
    let noteMidF = 65
    let noteMidE = 64
    let noteLowD = 62
    let noteC = 60

    return (

      <div >
        <Container className='sequencer-container' id="notes" ref={this.myInput}>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              B
            </Card>
            <Sequencer
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ffff00'
                onChange={this.playNote.bind(this, noteHighB)}
                onStep={this.playNote.bind(this, noteHighB)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              A
            </Card>
            <Sequencer
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ee82ee'
                onChange={this.playNote.bind(this, noteHighA)}
                onStep={this.playNote.bind(this, noteHighA)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              G
            </Card>
            <Sequencer
              rows={1}
              columns={16}
              size={[this.state.width*0.9412,this.state.height*0.07]}
              color='#ffa500'
              onChange={this.playNote.bind(this, noteMidG)}
              onStep={this.playNote.bind(this, noteMidG)}
              />
              <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              F
            </Card>
            <Sequencer
              rows={1}
              columns={16}
              size={[this.state.width*0.9412,this.state.height*0.07]}
              color='#008000'
              onChange={this.playNote.bind(this, noteMidF)}
              onStep={this.playNote.bind(this, noteMidF)}/>
              <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              E
            </Card>
            <Sequencer
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#0000ff'
                onChange={this.playNote.bind(this, noteMidE)}
                onStep={this.playNote.bind(this, noteMidE)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              D
            </Card>
            <Sequencer
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#4b0082'
                onChange={this.playNote.bind(this, noteLowD)}
                onStep={this.playNote.bind(this, noteLowD)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              C
            </Card>
            <Sequencer
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ff0000'
                onChange={this.playNote.bind(this, noteC)}
                onStep={this.playNote.bind(this, noteC)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
        </Container>
      </div>
    )
  }

}

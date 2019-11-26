import React from 'react'
import { Sequencer } from '../../Nexus'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ReactDOM from 'react-dom'
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
    console.log(this.myInput.current.offsetWidth)
    this.setState({ width: this.myInput.current.offsetWidth, height: this.myInput.current.offsetWidth });
  };

  playNote(note) {
    this.midiSounds.playChordNow(3,[note], 2.5);
  }

  render() {
    return (
      <div >
        <Container className='sequencer-container' id="notes" ref={this.myInput}>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              B
            </Card>
            <Sequencer className='high-b'
                rows={1}
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ffff00' onChange={this.playNote.bind(this, 71)}/>
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
                color='#ee82ee' onChange={this.playNote.bind(this, 69)}/>
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
              color='#ffa500' onChange={this.playNote.bind(this, 67)}/>
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
              color='#008000' onChange={this.playNote.bind(this, 65)}/>
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
                color='#0000ff' onChange={this.playNote.bind(this, 64)}/>
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
                color='#4b0082' onChange={this.playNote.bind(this, 62)}/>
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
                color='#ff0000' onChange={this.playNote.bind(this, 60)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
        </Container>
      </div>
    )
  }

}

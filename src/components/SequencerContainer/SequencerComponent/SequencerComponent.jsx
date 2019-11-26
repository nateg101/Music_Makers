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
    this.playNote = this.playNote.bind(this)
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

  checkMatrix(num) {
    if (num === 1) {
      
    }
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
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote.bind(this, noteHighB)}
                onStep={(num)=>{if(num === 1) {this.playNote(noteHighB)}}}/>
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
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote.bind(this, noteHighA)}
                onStep={(num)=>{if(num === 1) {this.playNote(noteHighA)}}}/>
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
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
              onChange={this.playNote.bind(this, noteMidG)}
              onStep={(num)=>{if(num === 1) {this.playNote(noteMidG)}}}
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
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
              onChange={this.playNote.bind(this, noteMidF)}
              onStep={(num)=>{if(num === 1) {this.playNote(noteMidF)}}}/>
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
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote.bind(this, noteMidE)}
                onStep={(num)=>{if(num === 1) {this.playNote(noteMidE)}}}/>
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
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote.bind(this, noteLowD)}
                onStep={(num)=>{if(num === 1) {this.playNote(noteLowD)}}}/>
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
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote.bind(this, noteC)}
                onStep={(num)=>{if(num === 1) {this.playNote(noteC)}}}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
        </Container>
      </div>
    )
  }

}

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

  playHighB() {
    this.midiSounds.playChordNow(3, [71], 2.5);
  }

  playHighA() {
    this.midiSounds.playChordNow(3, [69], 2.5);
  }

  playMiddleG() {
    this.midiSounds.playChordNow(3, [67], 2.5);
  }

  playMiddleF() {
    this.midiSounds.playChordNow(3, [65], 2.5);
  }

  playMiddleE() {
    this.midiSounds.playChordNow(3, [64], 2.5);
  }

  playMiddleD() {
    this.midiSounds.playChordNow(3, [62], 2.5);
  }

  playMiddleC() {
    this.midiSounds.playChordNow(3, [60], 2.5);
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
                color='#ffff00' onChange={this.playHighB.bind(this)}/>
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
                color='#ee82ee' onChange={this.playHighA.bind(this)}/>
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
              color='#ffa500' onChange={this.playMiddleG.bind(this)}/>
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
              color='#008000' onChange={this.playMiddleF.bind(this)}/>
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
                color='#0000ff' onChange={this.playMiddleE.bind(this)}/>
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
                color='#4b0082' onChange={this.playMiddleD.bind(this)}/>
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
                color='#ff0000' onChange={this.playMiddleC.bind(this)}/>
                <div hidden><MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} /></div>
          </Row>
        </Container>
      </div>
    )
  }

}

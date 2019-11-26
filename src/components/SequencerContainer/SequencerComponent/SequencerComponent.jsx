import React from 'react'
import { Sequencer } from '../../Nexus'
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

  playNote(on, note) {
    console.log('here')
    if(on[0] === 1){
      this.midiSounds.playChordNow(3,[note], 1);
    }
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
         <div hidden>
          <MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[3]} />
        </div>
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
                note={noteHighB}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote([1], noteHighB)}
                onStep={this.playNote}/>
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
                note={noteHighA}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote([1], noteHighA)}
                onStep={this.playNote}/>
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
              note={noteMidG}
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
              onChange={this.playNote([1], noteMidG)}
              onStep={this.playNote}/>
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
              note={noteMidF}
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
              onChange={this.playNote([1], noteMidF)}
              onStep={this.playNote}/>
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
                note={noteMidE}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote([1], noteMidE)}
                onStep={this.playNote}/>
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
                note={noteLowD}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote([1], noteLowD)}
                onStep={this.playNote}/>
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
                note={noteC}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}
                onChange={this.playNote([1], noteC)}
                onStep={this.playNote}/>
          </Row>
        </Container>
      </div>
    )
  }

}

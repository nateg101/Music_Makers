import React from 'react'
import { Sequencer } from '../../Nexus'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import './SequencerComponent.css'


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
  
  render() {
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
                onStep={console.log}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
                onStep={console.log}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
              onStep={console.log}
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
              onStep={console.log}
              onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
                onStep={console.log}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
                onStep={console.log}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
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
                onStep={console.log}
                onReady={(sequencer)=>{this.props.storedSequencers.push(sequencer)}}/>
          </Row>
        </Container>
      </div>
    )
  }

}
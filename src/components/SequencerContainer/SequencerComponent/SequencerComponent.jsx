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
    console.log(this.myInput.current.offsetWidth)
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
                color='#ffff00'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              A
            </Card>
            <Sequencer 
                rows={1} 
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ee82ee'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              G
            </Card>
            <Sequencer 
              rows={1} 
              columns={16}
              size={[this.state.width*0.9412,this.state.height*0.07]}
              color='#ffa500'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              F
            </Card>
            <Sequencer 
              rows={1} 
              columns={16}
              size={[this.state.width*0.9412,this.state.height*0.07]}
              color='#008000'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              E
            </Card>
            <Sequencer 
                rows={1} 
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#0000ff'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              D
            </Card>
            <Sequencer 
                rows={1} 
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#4b0082'/>
          </Row>
          <Row>
            <Card className='note-card justify-content-center border-0'>
              C
            </Card>
            <Sequencer 
                rows={1} 
                columns={16}
                size={[this.state.width*0.9412,this.state.height*0.07]}
                color='#ff0000'/>
          </Row>
        </Container>
      </div>
    )
  }

}
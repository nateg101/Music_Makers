import React from 'react'
import { Sequencer } from '../Nexus'
import { Container, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import './SequencerContainer.css'


export default class SequencerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  
  render() {
    return (
      <div className='sequencer-container'>
        <Container>
          <Row>
            <Col></Col>
            <Col id="notes">
              <Row>
                A
                <Sequencer 
                    rows={1} 
                    columns={16}
                    size={[this.state.width*0.7,this.state.height*0.07]}
                    color='#ffff00'/>
              </Row>
              <Row>
                B
                <Sequencer 
                    rows={1} 
                    columns={16}
                    size={[this.state.width*0.7,this.state.height*0.07]}
                    color='#ee82ee'/>
              </Row>
              <Row>
                C
                <Sequencer 
                  rows={1} 
                  columns={16}
                  size={[this.state.width*0.7,this.state.height*0.07]}
                  color='#ffa500'/>
              </Row>
              <Row>
                D
                <Sequencer 
                  rows={1} 
                  columns={16}
                  size={[this.state.width*0.7,this.state.height*0.07]}
                  color='#008000'/>
              </Row>
              <Row>
                E
                <Sequencer 
                    rows={1} 
                    columns={16}
                    size={[this.state.width*0.7,this.state.height*0.07]}
                    color='#0000ff'/>
              </Row>
              <Row>
                F
                <Sequencer 
                    rows={1} 
                    columns={16}
                    size={[this.state.width*0.7,this.state.height*0.07]}
                    color='#4b0082'/>
              </Row>
              <Row>
                G
                <Sequencer 
                    rows={1} 
                    columns={16}
                    size={[this.state.width*0.7,this.state.height*0.07]}
                    color='#ff0000'/>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    )
  }

}

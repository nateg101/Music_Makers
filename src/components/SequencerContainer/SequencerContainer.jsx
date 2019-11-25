import React from 'react'
import { Sequencer } from 'react-nexusui'
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
      <div class='sequencer-container'>
        <Sequencer
        rows={16}
        columns={16}
        size={[(this.state.width*0.6), (this.state.height*0.8)]}
      />
      </div>
    )
  }

}

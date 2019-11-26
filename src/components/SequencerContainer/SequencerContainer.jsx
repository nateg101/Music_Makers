import React from 'react'
import ReactDOM from 'react-dom'
import SequencerComponent from './SequencerComponent/SequencerComponent'
import './SequencerContainer.css'


export default class SequencerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    return (
      <div className= 'sequencer-holder'>
        <div className='sequencer-wrapper'>
         <SequencerComponent />
         <SequencerComponent />
        </div>
      </div>
    )
  }

}

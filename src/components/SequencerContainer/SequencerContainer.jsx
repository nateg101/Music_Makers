import React from 'react'
// import SequencerComponent from './SequencerComponent/SequencerComponent'
import Drums from './Instruments/Drums'
import Lead from './Instruments/Lead'
import './SequencerContainer.scss'

export default class SequencerContainer extends React.Component {

  render() {
    return (
      <div className='instruments'>
        <Lead
          storedSequencers={this.props.storedSequencers}
          piano={this.props.piano}
          octaves={this.props.octaves}
          scale={this.props.scale}
          tempStorage={this.props.tempStorage}
          midiStorage={this.props.midiStorage}
          playNote={this.props.playNote}
          setInstrument={this.props.setInstrument}/>
        <Drums
          storedPercussion={this.props.storedPercussion}
          drums={this.props.drums}
          tempStorage={this.props.tempStorage}
          midiStorage={this.props.midiStorage}/>
      </div>
    )
  }
}

import React from 'react'
// import SequencerComponent from './SequencerComponent/SequencerComponent'
import Drums from './Instruments/Drums'
import Lead from './Instruments/Lead'
import './SequencerContainer.scss'

export default class SequencerContainer extends React.Component {

  componentDidUpdate() {
    console.log('sequencer updated')
  }

  render() {
    return (
      <div className='instruments'>
        <Lead
          storedLead={this.props.storedLead}
          lead={this.props.lead}
          octaves={this.props.octaves}
          scale={this.props.scale}
          tempStorage={this.props.tempStorage}
          midiStorage={this.props.midiStorage}
          playNote={this.props.playNote}
          setInstrument={this.props.setInstrument}/>
        <Lead
          storedLead={this.props.storedLead2}
          lead={this.props.lead2}
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

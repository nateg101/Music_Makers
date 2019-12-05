import React from 'react'
// import SequencerComponent from './SequencerComponent/SequencerComponent'
import Drums from './Instruments/Drums'
import Lead from './Instruments/Lead'
import './InstrumentContainer.scss'

export default class InstrumentContainer extends React.Component {

  render() {
    return (
      <div className='instruments'>
        <div id='lead'>
          <Lead
            resetSequencers={this.props.resetSequencers}
            stopPlayback={this.props.stopPlayback}
            keySeed={5}
            storedLead={this.props.storedLead}
            octaves={this.props.octaves}
            scale={this.props.scale}
            tempStorage={this.props.tempStorage.lead}
            midiStorage={this.props.midiStorage}
            setInstrument={this.props.setInstrument}/>
        </div>
        <div id='lead2'>
          <Lead
            resetSequencers={this.props.resetSequencers}
            stopPlayback={this.props.stopPlayback}
            keySeed={6}
            storedLead={this.props.storedLead2}
            octaves={this.props.octaves}
            scale={this.props.scale}
            tempStorage={this.props.tempStorage.lead2}
            midiStorage={this.props.midiStorage}
            setInstrument={this.props.setInstrument}/>
        </div>
        <Drums
          storedPercussion={this.props.storedPercussion}
          tempStorage={this.props.tempStorage.drums}
          midiStorage={this.props.midiStorage}/>
      </div>
    )
  }
}

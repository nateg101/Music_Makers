import React from 'react'
import { connect } from 'react-redux';
import Drums from './Instruments/Drums'
import Lead from './Instruments/Lead'
import { tempStorage, storage } from '../../modules/instrumentStorage'
import './InstrumentContainer.scss'

const InstrumentContainer = (props) => {
  const storeSequencers = (name, sequencers) => {
    name === "storedPercussion" 
    ? storage[name].push(sequencers)
    : storage[name].sequencers = sequencers
  }

  const storeInstrument = (name, instrument) => {
    storage[name].instrument = instrument
  }

  return (
    <div className='instruments'>
      <div id='lead'>
        <Lead
          name={"storedLead"}
          storeSequencers={storeSequencers}
          storeInstrument={storeInstrument}
          instrument={storage.storedLead.instrument}
          tempStorage={tempStorage.lead}/>
      </div>
      <div id='lead2'>
        <Lead
          name={"storedLead2"}
          storeSequencers={storeSequencers}
          storeInstrument={storeInstrument}
          instrument={storage.storedLead2.instrument}
          tempStorage={tempStorage.lead2}/>
      </div>
        <Drums
          name={"storedPercussion"}
          storeSequencers={storeSequencers}
          storedPercussion={storage.storedPercussion}
          tempStorage={tempStorage.drums}/>
    </div>
  )
}

export default connect()(InstrumentContainer)

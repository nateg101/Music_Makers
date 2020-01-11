let tempStorage, storage

const createStoredInstruments = ([
  leadMatrix,
  leadInstrument,
  lead2Matrix,
  lead2Instrument,
  drums,
]) => {
  tempStorage = { 
    lead: leadMatrix || new Array(7),
    lead2: lead2Matrix || new Array(7),
    drums: [drums]
  }
  storage = {
    storedLead: { 
      sequencers: [], 
      instrument: leadInstrument || 0 
    },
    storedLead2: {
      sequencers: [],
      instrument: lead2Instrument || 0
    },
    storedPercussion: []
  }
  return [tempStorage, storage]
}

export {
  createStoredInstruments,
  storage,
  tempStorage
}
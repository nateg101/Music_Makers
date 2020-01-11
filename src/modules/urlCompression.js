import LZString from "lz-string";

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const decompress = (string) => {
  if (!string) {
    return null
  }
  string = string.replace(/-/g, `+`)
                 .replace(/_/g, '/')
                 .replace(/~/g, `=`)
  return LZString.decompressFromBase64(string)
                 .split('').map(function(t){return parseInt(t)})
}

const compress = (string) => {
  return LZString.compressToBase64(string)
                 .replace(/\+/g, `-`)
                 .replace(/\//g, `_`)
                 .replace(/=/g, `~`);
}

const stringify = (array) => {
  return array.flat()
              .join('')
              .replaceAll('false', '0')
              .replaceAll('true', '1')
              .replaceAll(',','')
}

const instrumentState = (sequencers) => {
  let state = []
  sequencers.forEach((sequencer)=>{
    state.push(sequencer.matrix.pattern)
  })
  state = stringify(state)
  return compress(state)
}

const constructUrl = (storage) => {
  let leadInstrument = compress(storage.storedLead.instrument.toString())
  let lead2Instrument = compress(storage.storedLead2.instrument.toString())
  let leadState = instrumentState(storage.storedLead.sequencers)
  let lead2State = instrumentState(storage.storedLead2.sequencers)
  let drumState = instrumentState(storage.storedPercussion)
  return `${window.location.origin}/?0=${leadState}&1=${drumState}&2=${leadInstrument}&3=${lead2State}&4=${lead2Instrument}`
}

const getUrlParams = () => {
  let params = new URLSearchParams(window.location.search)
  return [
    params.get(0),
    params.get(1),
    params.get(2),
    params.get(3),
    params.get(4)
  ]
}

const convertLeads = (compString) => {
  if (!compString) {
    return []
  }
  let octaveArray = {
    1: [4],
    3: [5,4,3],
    5: [6,5,4,3,2],
    7: [7,6,5,4,3,2,1]
  }
  let leadString = decompress(compString)
  let matrixSize = 224
  if (leadString.length < matrixSize) {return []}
  let octaves = leadString.length / matrixSize
  let lead = []
  octaveArray[octaves].forEach((octave, i) => {
    let octaveArray = []
    for (let j = 0; j < 7; j++) {
      let startIndex = (j * 32) + (i * matrixSize)
      octaveArray.push(leadString.slice(startIndex, startIndex + 32))
    }
    lead[octave] = octaveArray
  })
  return [lead, octaves]
}

const convertDrums = (compString) => {
  if (!compString) {
    return null
  }
  let drumString = decompress(compString)
  if (drumString.length < 320) {return null}
  let drums = []
  for(let i = 0; i < 10; i++) {
    let startIndex = i * 32
    drums.push(drumString.slice(startIndex, startIndex + 32))
  }
  return drums
}

const extractUrl = () => {
  let [
    leadParam,
    drumsParam,
    leadInstrumentParam,
    lead2Param,
    lead2InstrumentParam
  ] = getUrlParams()
  let [leadMatrix, octaves] = convertLeads(leadParam)
  let [lead2Matrix, ] = convertLeads(lead2Param)
  let leadInstrument = decompress(leadInstrumentParam)
  let lead2Instrument = decompress(lead2InstrumentParam)
  let drums = convertDrums(drumsParam)
  return [[leadMatrix, leadInstrument, lead2Matrix, lead2Instrument, drums], octaves]
}

export {
  extractUrl,
  constructUrl
}
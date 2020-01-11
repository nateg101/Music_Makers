let MIDIPlugin

const setupMidi = (url, instruments, cb) => {
  if (!MIDIPlugin) {
    MIDIPlugin = getWindowMidi()
    MIDIPlugin.loadPlugin({
      soundfontUrl: url,
      instruments: instruments,
      callback: () => {
        MIDIPlugin.programChange(0, 4);
        MIDIPlugin.programChange(1, 127)
        MIDIPlugin.programChange(2, 26)
        MIDIPlugin.programChange(3, 33)
        MIDIPlugin.programChange(4, 112)
        MIDIPlugin.programChange(5, 121)
        cb(MIDIPlugin)
      }
    })
    return
  }
}

const getWindowMidi = () => {
  if (window.Cypress) {
    let midi = function() {}
    midi.programChange = function() {}
    midi.chordOn = function() {}
    midi.loadPlugin = function() {}
    return midi
  }
  return window.MIDI
}

export default setupMidi
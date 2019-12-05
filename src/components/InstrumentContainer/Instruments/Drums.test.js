import React from "react";
import Drums from './Drums'
import { shallow, mount } from 'enzyme'

describe('instrument component testing', function() {
  let wrapper
  let storedPercussion
  let midiStorage = {}
  beforeEach(function() {
    storedPercussion = []
    midiStorage.MIDIPlugin = {}
    midiStorage.MIDIPlugin.chordOn = jest.fn()
    wrapper = mount(<Drums
      midiStorage={midiStorage}
      storedPercussion={storedPercussion}
      drums={[]}
      tempStorage={[]}
    />);
  })


  it('renders successfully', function() {
    const wrapper = shallow(<Drums/>);

    expect(wrapper.find('.drums-container').length).toEqual(1)
  });

  it('renders child components', function(){
    expect(wrapper.find('.drums-container').length).toEqual(1)
    expect(wrapper.find('.sequencer-component')).toBeTruthy()
  })
  
  it('sends calls the midi plugin', function() {
    wrapper.instance().ready = true
    wrapper.instance().playDrumNote([1],1,1)
    expect(midiStorage.MIDIPlugin.chordOn).toHaveBeenCalledWith(1, [48], 100, 0)
  })
  
  it('waits for sequencers to load before allowing midi to play', function() {
    let [triggers, octave, instrument] = [[1],1,1]
    wrapper.instance().playDrumNote(triggers, octave, instrument)

    expect(midiStorage.MIDIPlugin.chordOn).not.toHaveBeenCalledWith(1, [48], 100, 0)

    for(let i = 0; i < 10; i++) {wrapper.instance().appendToSequencers({})}
    wrapper.instance().playDrumNote([1],1,1)
    
    expect(midiStorage.MIDIPlugin.chordOn).toHaveBeenCalledWith(1, [48], 100, 0)
  })

});

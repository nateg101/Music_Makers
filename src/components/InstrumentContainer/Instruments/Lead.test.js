import React from "react";
import Lead from './Lead'
import { shallow, mount } from 'enzyme'

describe('instrument component testing', function() {
  let wrapper
  let storedLead
  let tempStorage
  let octaves = 3
  let scale
  let midiStorage = {}
  beforeEach(function() {
    midiStorage.MIDIPlugin = {}
    midiStorage.MIDIPlugin.chordOn = jest.fn()
    storedLead = {
      sequencers: [],
      instrument: 0
    }
    tempStorage = {
      lead: []
    }
    scale = [{letter: 'C', value: 1}]
    wrapper = mount(<Lead
      keySeed={1}
      midiStorage={midiStorage}
      scale={scale}
      storedLead={storedLead}
      matrix={[]}
      tempStorage={tempStorage}
      octaves={octaves}/>);
  })


  it('renders successfully', function() {
    const shallowWrapper = shallow(
      <Lead 
      storedLead={{instrument: 0}}
      octaves={octaves}/>
    );
    
    expect(shallowWrapper.find('.lead-container').length).toEqual(1)
  });
  
  it('renders child components', function(){
    expect(wrapper.find('.lead-container').length).toEqual(1)
    expect(wrapper.find('.sequencer-component')).toBeTruthy()
  })

  it('sends calls the midi plugin', function() {
    let [triggers, octave] = [[1],1]
    wrapper.instance().ready = true
    wrapper.instance().playNote(triggers, octave)
    expect(midiStorage.MIDIPlugin.chordOn).toHaveBeenCalledWith(0, [13], 100, 0)
  })

  it('waits for sequencers to load before allowing midi to play', function() {
    let [triggers, octave] = [[1],1]
    wrapper.instance().playNote(triggers, octave)

    expect(midiStorage.MIDIPlugin.chordOn).not.toHaveBeenCalledWith(0, [13], 100, 0)

    for(let i = 0; i < 3; i++) {wrapper.instance().appendToSequencers({})}
    wrapper.instance().playNote(triggers, octave)

    expect(midiStorage.MIDIPlugin.chordOn).toHaveBeenCalledWith(0, [13], 100, 0)
  })
});

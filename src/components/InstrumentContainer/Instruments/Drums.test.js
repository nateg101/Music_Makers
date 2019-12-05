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
      storedSequencers={storedPercussion}
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
});

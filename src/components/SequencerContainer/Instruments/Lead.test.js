import React from "react";
import Lead from './Lead'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

describe('instrument component testing', function() {
  let wrapper
  let storedSequencers
  let playNote
  let octaves = 3
  let scale
  beforeEach(function() {
    playNote = sinon.spy()
    storedSequencers = []
    scale = []
    wrapper = mount(<Lead
      scale={scale}
      storedSequencers={storedSequencers}
      matrix={[]}
      tempStorage={[]}
      playNote={playNote}
      octaves={octaves}/>);
  })


  it('renders successfully', function() {
    console.log('first test')
    const shallowWrapper = shallow(<Lead octaves={octaves}/>);
    
    expect(shallowWrapper.find('.lead-container').length).toEqual(1)
  });
  
  it('renders child components', function(){
    console.log('secondtest')
    expect(wrapper.find('.lead-container').length).toEqual(1)
    expect(wrapper.find('.sequencer-component')).toBeTruthy()
  })
});

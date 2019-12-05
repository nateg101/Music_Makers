import React from "react";
import Lead from './Lead'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

describe('instrument component testing', function() {
  let wrapper
  let storedLead
  let tempStorage
  let playNote
  let octaves = 3
  let scale
  beforeEach(function() {
    playNote = sinon.spy()
    storedLead = {
      instrument: 0
    }
    tempStorage = {
      lead: []
    }
    scale = []
    wrapper = mount(<Lead
      scale={scale}
      storedLead={storedLead}
      matrix={[]}
      tempStorage={tempStorage}
      playNote={playNote}
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
});

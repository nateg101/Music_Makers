import React from "react";
import InstrumentContainer from './InstrumentContainer'
import { shallow } from 'enzyme'

describe('InstrumentContainer component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(
    <InstrumentContainer 
      tempStorage={{lead:[]}}
      octaves={3}/>
    ); 

    expect(wrapper.find('.instruments').length).toEqual(1)
  });
});
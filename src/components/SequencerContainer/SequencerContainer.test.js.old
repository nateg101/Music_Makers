import React from "react";
import SequencerContainer from './SequencerContainer'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<SequencerContainer octaves={3}/>); 

    expect(wrapper.find('.instruments').length).toEqual(1)
  });
});
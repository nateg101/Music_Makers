import React from "react";
import OptionsBar from './OptionsBar'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<OptionsBar />); 

    expect(wrapper.find('.option-bar').length).toEqual(1)
  });
});
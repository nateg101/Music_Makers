import React from "react";
import OctaveSelector from './OctaveSelector'
import { mount } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = mount(<OctaveSelector />); 

    expect(wrapper.find('form').length).toEqual(1)
  });

  it('updates the octaves', function() {
    
  })
});
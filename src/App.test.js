import React from "react";
import App from './App'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  let wrapper
  beforeEach(function() {
    window.MIDI = jest.fn()
    window.MIDI.loadPlugin = jest.fn()
    wrapper = shallow(<App />); 

  })
  it('renders successfully', function() {
    expect(wrapper.find('.App'))
  });

  it('initializes the MIDI component', function() {
    expect(window.MIDI.loadPlugin).toBeCalled();
  })
});
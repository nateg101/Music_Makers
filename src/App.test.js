import React from "react";
import App from './App'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<App />); 

    expect(wrapper.find('.App'))
  });
});
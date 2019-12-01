import App from './App'
import React from 'react';
import { shallow } from 'enzyme';

describe('app component testing', function() {
  it('renders successfully', function() {
    expect.hasAssertions()
    const wrapper = shallow(<App />); 

    expect(wrapper.find('.App')).to.have.lengthOf(1)
  });
});
import React from "react";
import NavbarMain from './navbar'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<NavbarMain />);

    expect(wrapper.find('.Nav-title').text()).toEqual('Synesthesia')
  });
});
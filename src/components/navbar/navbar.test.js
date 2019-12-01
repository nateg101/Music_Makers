import NavbarMain from './navbar'
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('App component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<NavbarMain />);

    expect(wrapper.find('.Nav-title').text()).toEqual('Synesthesia')
  });
});
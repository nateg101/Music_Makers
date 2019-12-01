import React from "react";
import Tempo from './Tempo'
import { mount } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    let wrapper = mount(<Tempo tempo={120} updateTempo={function(){}}/>);
    let title = wrapper.find('.tempo-label').text()
    expect(title).toEqual('Tempo')
  });
});
import React from "react";
import Instrument from './instrument'
import { shallow } from 'enzyme'

describe('instrument component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<Instrument/>);

    expect(wrapper.find('.instrument-container').length).toEqual(1)
  });
});

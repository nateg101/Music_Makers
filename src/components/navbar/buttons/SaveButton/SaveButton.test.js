import React from "react";
import SaveButton from './SaveButton'
import { shallow } from 'enzyme'

describe('app component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<SaveButton />);

    expect(wrapper.find('.save-wrapper').length).toEqual(1)
  });
});
import React from "react";
import Drums from './Drums'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

describe('instrument component testing', function() {
  let wrapper
  let storedPercussion
  let playNote
  beforeEach(function() {
    playNote = sinon.spy()
    storedPercussion = []
    wrapper = mount(<Drums
      storedSequencers={storedPercussion}
      matrix={[]}
      tempStorage={[]}
    />);
  })


  it('renders successfully', function() {
    const wrapper = shallow(<Drums/>);

    expect(wrapper.find('.drums-container').length).toEqual(1)
  });
});

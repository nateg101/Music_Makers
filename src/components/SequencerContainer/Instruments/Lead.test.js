import React from "react";
import Lead from './Lead'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

describe('instrument component testing', function() {
  // let wrapper
  // let storedSequencerss
  // let playNote
  // beforeEach(function() {
  //   playNote = sinon.spy()
  //   storedPercussion = []
  //   wrapper = mount(<Drums
  //     storedSequencers={storedPercussion}
  //     matrix={[]}
  //     tempStorage={[]}
  //   />);
  // })


  it('renders successfully', function() {
    const wrapper = shallow(<Lead/>);

    expect(wrapper.find('.lead-container').length).toEqual(1)
  });
});

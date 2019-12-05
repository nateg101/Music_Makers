import React from "react";
import Drums from './Drums'
import { shallow, mount } from 'enzyme'

describe('instrument component testing', function() {
  let wrapper
  let storedPercussion
  beforeEach(function() {
    storedPercussion = []
    wrapper = mount(<Drums
      storedSequencers={storedPercussion}
      drums={[]}
      tempStorage={[]}
    />);
  })


  it('renders successfully', function() {
    const wrapper = shallow(<Drums/>);

    expect(wrapper.find('.drums-container').length).toEqual(1)
  });

  it('renders child components', function(){
    expect(wrapper.find('.drums-container').length).toEqual(1)
    expect(wrapper.find('.sequencer-component')).toBeTruthy()
  })
});

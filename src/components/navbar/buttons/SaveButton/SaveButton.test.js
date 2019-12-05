import React from "react";
import SaveButton from './SaveButton'
import { shallow, mount } from 'enzyme'

describe('app component testing', function() {
  let wrapper
  let storedLead = {}
  let storedLead2 = {}
  let storedPercussion
  beforeEach(function() {
    function Sequencer() {
      let sequencer = {}
      sequencer.matrix = {}
      sequencer.matrix.pattern = [[]]
      return sequencer
    }
    storedLead.sequencers = [new Sequencer]
    storedLead2.sequencers = [new Sequencer]
    storedPercussion = [new Sequencer]
    storedLead.instrument = 0
    storedLead2.instrument = 0

    wrapper = mount(<SaveButton 
                            storedPercussion={storedPercussion}
                            storedLead2={storedLead2}
                            storedLead={storedLead}/>);
  })
  it('renders successfully', function() {
    const shallowWrapper = shallow(<SaveButton />);
    expect(shallowWrapper.find('.save-wrapper').length).toEqual(1)
  });
  
  it('opens the save overlay', function() {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('.Modal').length).toEqual(1)
  })
});
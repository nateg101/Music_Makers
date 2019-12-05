import React from "react";
import SaveButton from './SaveButton'
import { shallow, mount } from 'enzyme'
import LZString from 'lz-string' 
jest.mock('lz-string')

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
    LZString.compressToBase64.mockReturnValue("dummy");
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

  it('compresses the instrument states', function() {
    wrapper.find('button').simulate('click')
    expect(LZString.compressToBase64).toHaveBeenCalledWith("0")
    expect(LZString.compressToBase64).toHaveBeenCalledWith("0")
    expect(LZString.compressToBase64).toHaveBeenCalledWith("")
  })

  it('constructs a URL with the compressed strings', function() {
    wrapper.find('button').simulate('click')
    let text = wrapper.find('.url').text()
    console.warn(text)
    expect(text).toContain("/?0=dummy&1=dummy&2=dummy&3=dummy&4=dummy")
  })
});
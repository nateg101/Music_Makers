import React from 'react'
import SequencerComponent from './SequencerComponent'
import { mount } from 'enzyme'

describe('SequencerComponent Testing', function() {
  let wrapper
  let onReady = jest.fn()
  beforeEach(function() {
    wrapper = mount(<SequencerComponent 
                      tempStorage={{}}
                      onReady={onReady}
                      scale={[{letter: 'C', value: 1}]}/>)
  })
  it('renders successfully', function() {
    expect(wrapper.find('.sequencer-component').length).toEqual(2)
  })

  it('calls the onReady callback when mounded', function(){
    wrapper.instance().handleOnReady("sequencer")
    expect(onReady).toHaveBeenCalledWith("sequencer")
  })
})
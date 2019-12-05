import React from 'react'
import SequencerComponent from './SequencerComponent'
import { mount } from 'enzyme'

describe('SequencerComponent Testing', function() {
  it('renders successfully', function() {
    let wrapper = mount(<SequencerComponent scale={[{letter: 'C', value: 1}]}/>)
    expect(wrapper.find('.sequencer-component').length).toEqual(2)
  })
})
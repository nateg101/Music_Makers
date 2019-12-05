import React from 'react'
import NoteNames from './NoteNames'
import { mount } from 'enzyme'

describe('NoteNames testing', function() {
  it.only('renders correctly', function() {
    const wrapper = mount(<NoteNames 
                            noteNameClass={'drums'}
                            octave={1}
                            scale={[{letter: "C"}]}/>)
    expect(wrapper.contains('C1')).toBeTruthy()
    expect(wrapper.find('.drums-notes').length).toEqual(2)
  })
})
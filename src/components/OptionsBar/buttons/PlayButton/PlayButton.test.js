import React from "react";
import PlayButton from './PlayButton'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('app component testing', function() {
  let wrapper
  let sequencer
  let stepper
  beforeEach(function() {
    sequencer = {}
    stepper = {}
    sequencer.start = sinon.spy()
    sequencer.stop = sinon.spy()
    sequencer.render = sinon.spy()
    sequencer.stepper = stepper
    wrapper = mount(<PlayButton storedSequencers={[sequencer]}/>); 
  })

  it('renders successfully', function() {
    let text = wrapper.find('Button').text()
    expect(text).toEqual('▶')
  });

  it('starts the sequencers', function() {
    wrapper.find('button').simulate('click')
    expect(sequencer.start.calledOnce).toBeTruthy()
  })

  it('stops and resets the sequencers', function() {
    wrapper.find('button').simulate('click')
    wrapper.find('button').simulate('click')
    expect(sequencer.stop.calledOnce).toBeTruthy()
    expect(sequencer.render.calledOnce).toBeTruthy()
    expect(stepper.value).toEqual(-1)
  })
});
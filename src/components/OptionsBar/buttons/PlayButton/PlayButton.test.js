import React from "react";
import PlayButton from './PlayButton'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('app component testing', function() {
  let wrapper
  let storedSequencers
  let storedPercussion
  beforeEach(function() {
    function Sequencer() {
      let sequencer = {}
      let stepper = {}
      sequencer.start = sinon.spy()
      sequencer.stop = sinon.spy()
      sequencer.render = sinon.spy()
      sequencer.stepper = stepper
      return sequencer
    }
    storedSequencers = [new Sequencer]
    storedPercussion = [new Sequencer]

    wrapper = mount(<PlayButton 
      storedPercussion={storedSequencers}
      storedSequencers={storedPercussion}/>); 
  })

  it('renders successfully', function() {
    let text = wrapper.find('Button').text()
    expect(text).toEqual('▶')
  });

  it('starts the sequencers', function() {
    wrapper.find('button').simulate('click')
    expect(storedSequencers[0].start.calledOnce).toBeTruthy()
    expect(storedPercussion[0].start.calledOnce).toBeTruthy()
  })

  it('stops and resets the sequencers', function() {
    wrapper.find('button').simulate('click')
    wrapper.find('button').simulate('click')
    let sequencers = [storedPercussion, storedSequencers].flat()
    sequencers.forEach((sequencer)=>{
      expect(sequencer.stop.calledOnce).toBeTruthy()
      expect(sequencer.render.calledOnce).toBeTruthy()
      expect(sequencer.stepper.value).toEqual(-1)
    })
  })
});
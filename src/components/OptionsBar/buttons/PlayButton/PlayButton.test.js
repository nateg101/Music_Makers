import React from "react";
import PlayButton from './PlayButton'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('PlayButton component testing', function() {
  let wrapper
  let storedLead = {}
  let storedLead2 = {}
  let storedPercussion
  let updateButtonState
  beforeEach(function() {
    function Sequencer() {
      let sequencer = {}
      let stepper = {}
      sequencer.start = sinon.spy()
      sequencer.stop = sinon.spy()
      sequencer.render = sinon.spy()
      sequencer.stepper = stepper
      sequencer.interval = {}
      sequencer.interval.on = sinon.spy()
      return sequencer
    }
    storedLead.sequencers = [new Sequencer]
    storedLead2.sequencers = [new Sequencer]
    storedPercussion = [new Sequencer]
    updateButtonState = sinon.spy()

    wrapper = mount(<PlayButton
      buttonText="test"
      isButtonActive={false}
      updateButtonState={updateButtonState}
      storedPercussion={storedPercussion}
      storedLead={storedLead}
      storedLead2={storedLead2}/>);
  })

  it('renders successfully', function() {
    let text = wrapper.find('Button').text()
    expect(text).toEqual('test')
  });

  it('starts the sequencers', function() {
    wrapper.find('button').simulate('click')
    expect(updateButtonState.called).toBeTruthy()
    expect(storedLead.sequencers[0].start.calledOnce).toBeTruthy()
    expect(storedLead2.sequencers[0].start.calledOnce).toBeTruthy()
    expect(storedPercussion[0].start.calledOnce).toBeTruthy()
  })

  it('stops and resets the sequencers', function() {
    let newWrapper = mount(<PlayButton
      buttonText="test"
      isButtonActive={true}
      updateButtonState={updateButtonState}
      storedPercussion={storedPercussion}
      storedLead={storedLead}
      storedLead2={storedLead2}/>);

    newWrapper.find('button').simulate('click')
    let sequencers = [storedPercussion, storedLead.sequencers, storedLead2.sequencers].flat()
    sequencers.forEach((sequencer)=>{
      expect(sequencer.stop.calledOnce).toBeTruthy()
      expect(sequencer.render.calledOnce).toBeTruthy()
      expect(sequencer.stepper.value).toEqual(-1)
    })
      expect(updateButtonState.called).toBeTruthy()
  })
});

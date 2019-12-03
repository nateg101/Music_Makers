import React from "react";
import ScaleSelector from './ScaleSelector'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('app component testing', function() {
  let wrapper
  let callback
  beforeEach(function(){
    callback = sinon.spy()
    wrapper = mount(<ScaleSelector setScale={callback}/>); 
  })
  
  it('renders successfully', function() {
    expect(wrapper.find('.scale-selector').length).toEqual(1)
  });
});
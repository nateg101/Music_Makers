import React from "react";
import OctaveSelector from './OctaveSelector'
import { mount } from 'enzyme'
import { jsxEmptyExpression } from "@babel/types";

describe('app component testing', function() {
  let wrapper
  let setOctaves = jest.fn()
  beforeEach(function() {
    wrapper = mount(<OctaveSelector setOctaves={setOctaves}/>); 
  })
  
  it('renders successfully', function() {
    expect(wrapper.find('form').length).toEqual(1)
  });

  it('calls setOctaves when changed', function() {
    wrapper.instance().handleOnChange("event")

    expect(setOctaves).toHaveBeenCalledWith("event")
  })
});
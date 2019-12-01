import './__mocks__/AudioContext'
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('App component testing', function() {
  it('renders successfully', function() {
    const wrapper = shallow(<App />); 
  });
});
import React from 'react'
import ReactDOM from 'react-dom'
import Sequencer from './Sequencer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sequencer />, div);
  ReactDOM.unmountComponentAtNode(div);
});


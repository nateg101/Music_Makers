import React from 'react';
import ReactDOM from 'react-dom';
import SequencerComponent from './SequencerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SequencerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

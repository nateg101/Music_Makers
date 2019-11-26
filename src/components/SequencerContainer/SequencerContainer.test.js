import React from 'react';
import ReactDOM from 'react-dom';
import SequencerContainer from './SequencerContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SequencerContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

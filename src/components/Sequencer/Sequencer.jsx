import React from 'react'
import { Sequencer } from 'react-nexusui'
import ReactDOM from 'react-dom'


export default class OurSequencer extends React.Component {

  render() {
    return (
      <Sequencer
      rows={5}
      columns={10}
      size={[400, 200]}
    />
    )
  }

}

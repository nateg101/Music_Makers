import React, { Component }from 'react'
import { Card } from 'react-bootstrap'

class NoteNames extends Component {
  constructor(props){
    super(props)
    this.state = {
      scale: this.props.scale
    }
  }

  renderNoteNames = () => {
    let noteNames = []
    for(let i = 0; i < this.state.scale.length; i++){
      noteNames.push(
        <Card 
          key={i + 15 * this.props.octave}
          className={`note-card ${this.props.noteNameClass}-notes justify-content-center border-0`}>
          {"" + this.state.scale[i].letter + (this.props.octave || "") }
        </Card>
      )
    }
    return noteNames
  }

  render() {
    return(
      <div className='note-names-list'>
        {this.renderNoteNames()}
      </div>
    )
  }

}

export default NoteNames

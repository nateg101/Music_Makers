import React, { Component }from 'react'
import { Card } from 'react-bootstrap'

function NoteNames(props) {
  const [scale, setScale] = React.useState(props.scale)

  React.useEffect(() => {
    if (props.scale !== scale) {
      setScale(props.startTime);
    }
  }, [props.scale]);

  let renderNoteNames = () => {
    let noteNames = []
    for(let i = 0; i < props.scale.length; i++){
      noteNames.push(
        <Card 
          key={i + 15 * props.octave}
          className={`note-card ${props.noteNameClass}-notes justify-content-center border-0`}>
          {"" + props.scale[i].letter + (props.octave || "") }
        </Card>
      )
    }
    return noteNames
  }

  return(
    <div className='note-names-list'>
      {renderNoteNames()}
    </div>
  )
}

export default NoteNames

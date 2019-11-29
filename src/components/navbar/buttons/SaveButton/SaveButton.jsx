import React from "react"
import { Button } from 'react-bootstrap'
import './SaveButton.css'

function SaveButton() {
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);

  if(show) {
    console.log('funtimes')
    return (
      <div id="myNav" className="save-link-overlay">
        <Button className="closebtn" onClick={()=>{setShow(false)}}>X</Button>
        <div className="overlay-content">
          <h1>Save your song!</h1>
        </div>
      </div>
    )
  } else {
    console.log('target = ' + target)
    console.log('show = ' + show)
    return (
      <div>
        <Button className={'save-button'} onClick={() => setShow(true)}>Save</Button>
      </div>
    )
  }
}

export default SaveButton
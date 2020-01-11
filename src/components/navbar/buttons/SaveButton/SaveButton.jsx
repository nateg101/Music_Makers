import React, { useState } from "react"
import Button from "react-bootstrap/Button";
import Modal, {closeStyle} from 'simple-react-modal';
import { constructUrl } from '../../../../modules/urlCompression'
import { storage } from '../../../../modules/instrumentStorage'
import './SaveButton.css';

const SaveButton = (props) => {

  const [show, setShow] = useState(false)

  const open = () => {
    setShow(true)
  }

  const close = () => {
    setShow(false)
  }

  return (
    <div className = 'save-wrapper'>
      <Button variant='outline-light' className = 'save-button pull-right' onClick={open}>Save</Button>
      <Modal
        className="Modal-wrapper"
        containerClassName="Modal"
        closeOnOuterClick={true}
        show={show}>
        <div style={closeStyle} onClick={close}>X</div>
        <div className="link-text">Your song has been saved to this link:</div>
        {show ? <div className='url'>{constructUrl(storage)}</div> : null }
      </Modal>
    </div>
  );
}

export default SaveButton

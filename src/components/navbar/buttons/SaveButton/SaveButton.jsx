import React, {Component} from "react"
import Button from "react-bootstrap/Button";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import './SaveButton.css';
import Modal, {closeStyle} from 'simple-react-modal';
import LZString from "lz-string";



class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      copied: false,
    }
  };

  show() {
    this.setState({show: true})
  }

  close() {
    this.setState({show: false})
  }

   setSeqState = () => {
     let state =[]
     this.props.storedSequencers.forEach((sequencer, index)=>{
       state.push(sequencer.matrix.pattern)
     })
     String.prototype.replaceAll = function(search, replacement) {
       var target = this;
       return target.replace(new RegExp(search, 'g'), replacement);
     };
     state = state.flat()
     state = state.join('')
     state = state.replaceAll('false', '0')
     state = state.replaceAll('true', '1')
     state = state.replaceAll(',','')
     var compressState = LZString.compressToBase64(state)
     return compressState
   }




  render() {
    return (
      <div className = 'save-wrapper'>
        <Button variant='outline-light' className = 'save-button pull-right' onClick={this.show.bind(this)}>Save</Button>
        <Modal
        className="Modal-wrapper" //this will completely overwrite the default css completely
        containerClassName="Modal"
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.close.bind(this)}>
        <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
        <div className='url'>{window.location.href + `${this.setSeqState()}`}</div>
        </Modal>
        </div>
    );
  }
}
export default SaveButton

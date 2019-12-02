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
    this.show.bind(this)
    this.close.bind(this)
    
    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };
  }

  show = () => {
    this.setState({show: true})
  }

  close = () => {
    this.setState({show: false})
  }

  setSeqState = () => {
    let state = []
    console.log(this.props.storedSequencers.length)
    this.props.storedSequencers.forEach((sequencer)=>{
      state.push(sequencer.matrix.pattern)
    })
    state = this.stringify(state)
    return this.compress(state)
  }

  stringify(array) {
  return array.flat()  
              .join('')  
              .replaceAll('false', '0')  
              .replaceAll('true', '1')
              .replaceAll(',','')
  }

  compress(string) {
    return LZString.compressToBase64(string)
                   .replace(/\+/g, `-`)
                   .replace(/\//g, `_`)
                   .replace(/=/g, `~`);
  }

  render() {
    return (
      <div className = 'save-wrapper'>
        <Button variant='outline-light' className = 'save-button pull-right' onClick={this.show}>Save</Button>
        <Modal
          className="Modal-wrapper" //this will completely overwrite the default css completely
          containerClassName="Modal"
          closeOnOuterClick={true}
          show={this.state.show}>
          <a style={closeStyle} onClick={this.close}>X</a>
          {this.state.show ? <div className='url'>{window.location.href + `?0=${this.setSeqState()}`}</div> : null }
        </Modal>
      </div>
    );
  }
}
export default SaveButton

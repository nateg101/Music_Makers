import React, {Component} from "react"
import { Button, Modal } from 'react-bootstrap'
import LZString from "lz-string";
import './SaveButton.css'


class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: ''};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
     var compressState = LZString.compressToUTF16(state)
   }


  render() {
    return (

        <div>
        <Button color="success" onClick={this.toggle}>Save</Button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header>Save Your Track</Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </Modal.Footer>
        </Modal>
        </div>

    );
  }
}
export default SaveButton

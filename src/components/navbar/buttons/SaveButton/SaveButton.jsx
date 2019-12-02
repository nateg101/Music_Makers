import React, {Component} from "react"
import Modal, {closeStyle} from 'simple-react-modal'
import LZString from "lz-string";
import './SaveButton.css'


class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    };




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
    );
  }
}
export default SaveButton

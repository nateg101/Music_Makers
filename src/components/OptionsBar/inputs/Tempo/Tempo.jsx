import React from "react";
import InputRange from "react-input-range"
import { connect } from 'react-redux';
import './Tempo.css'
import 'react-input-range/lib/css/index.css'

const Tempo = (props) => {
  const handleChange = (tempo) => {
    props.dispatch({
        type: "SET_TEMPO",
        payload: tempo
    })
  }
  return (
    <form className='tempo-slider'>
      <div className="tempo-range">
        <InputRange
          type="tempo"
          maxValue={200}
          minValue={50}
          value={props.tempo}
          onChange={handleChange}/>
        <label className='tempo-label'>Tempo</label>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    tempo: state.tempo
  }
}

export default connect(mapStateToProps)(Tempo);

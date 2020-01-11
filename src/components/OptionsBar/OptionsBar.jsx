import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayButton from "./buttons/PlayButton/PlayButton";
import OctaveSelector from "./inputs/OctaveSelector/OctaveSelector";
import Tempo from "./inputs/Tempo/Tempo";
import ScaleSelector from "./inputs/ScaleSelector/ScaleSelector"
import './OptionsBar.css'

const OptionsBar = (props) => {

    return (
    <div className='options d-flex justify-content-center'>
      <Card className="option-bar" body>
        <Row>
          <Col sm={1}>
            <PlayButton
              storedPercussion={props.storedPercussion}
              storedLead={props.storedLead}
              storedLead2={props.storedLead2}/>
          </Col>
          <Col sm={5}>
            <Tempo />
          </Col>
          <Col sm={2}>
            <OctaveSelector />
          </Col>
          <Col>
            <ScaleSelector />
          </Col>
        </Row>
      </Card>
    </div>
    )
  }

export default OptionsBar;

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/model.css";
export default function ModelSensors(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Train ID: {props.train.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Train Sensor</h4>
        <div className="container sensors-container">
          <div className="row">
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">Speed</h4>
              <p className="sensor-value">{props.train.train.speed} Km/hr</p>
            </div>
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={require("../utilities/images/Vector.svg").default}
                alt=""
              />
              <h4 className="sensor-name">Door state</h4>
              <p className="sensor-value">{props.train.train.doorState}</p>
            </div>
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group-1.svg").default}
                alt=""
              />
              <h4 className="sensor-name">location</h4>
              <p className="sensor-value">{props.train.train.gps}</p>
            </div>
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={
                  require("../utilities/images/2682807_drop_high_humidity_percentage_precipitation_icon 2.svg")
                    .default
                }
                alt=""
              />
              <h4 className="sensor-name">humidity</h4>
              <p className="sensor-value">{props.train.train.humidity}%</p>
            </div>
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={
                  require("../utilities/images/1343435_alarm_alert_signal_telltale_icon 2.svg")
                    .default
                }
                alt=""
              />
              <h4 className="sensor-name">Alarm</h4>
              <p className="sensor-value">{props.train.train.alarm}</p>
            </div>
            <div className="col-md-3 col-6 sensor-card">
              <img
                src={require("../utilities/images/Vector-1.svg").default}
                alt=""
              />
              <h4 className="sensor-name">Lights</h4>
              <p className="sensor-value">{props.train.train.lightsState}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
          Train Id : 12345
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Train Sensor</h4>
        <div className="container sensors-container">
          <div className="row">
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
            </div>
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
            </div>
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
            </div>
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
            </div>
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
            </div>
            <div className="col-md-4 col-6 sensor-card">
              <img
                src={require("../utilities/images/Group.svg").default}
                alt=""
              />
              <h4 className="sensor-name">tempreture</h4>
              <p className="sensor-value">23 °C</p>
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

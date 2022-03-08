import { Fragment, useState } from "react";
import "../styles/trains.css";
import ModelSensors from "./ModelSensors";
const Train = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <div className="container train-container">
        <h2 className="train-header">
          <button className="train-btn" onClick={() => setModalShow(true)}>
            Id:12345
          </button>
          <span className="train-state">Normal</span>
        </h2>
      </div>
      <ModelSensors show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default Train;

import { Fragment, useContext, useState } from "react";
import "../styles/trains.css";
import ModelSensors from "./ModelSensors";
import icon from "../utilities/images/delete1.svg";
import { TrainContext } from "../context/context";
const Train = ({ train, isAdmin }) => {
  const [modalShow, setModalShow] = useState(false);
  const { removeTrain } = useContext(TrainContext);
  return (
    <Fragment>
      <div className="container train-container">
        <h2 className="train-header">
          <button className="train-btn" onClick={() => setModalShow(true)}>
            {train.id}
          </button>
          <span className="train-state">{train.train.alarm}</span>
          {isAdmin && (
            <span onClick={() => removeTrain(train.id)} className="delete-icon">
              <img src={icon} alt="da" width="30" height="30" />
            </span>
          )}
        </h2>
      </div>
      <ModelSensors
        train={train}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
};

export default Train;

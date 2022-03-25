import Train from "./Train";
import "../styles/trains.css";
import { trains } from "../utilities/trains";
import { useContext } from "react";
import { TrainContext } from "../context/context";
const TrainList = ({ isAdmin }) => {
  const { data } = useContext(TrainContext);

  return (
    <div className="container trains-list">
      <div className="container train-container">
        <div className="train-header">
          <h1 className="train-id-header">Train ID</h1>
          <h1 className="train-alarm-header">Train Alarm</h1>
        </div>
      </div>
      {data &&
        data.map((train) => (
          <Train train={train} key={train.id} isAdmin={isAdmin} />
        ))}
    </div>
  );
};

export default TrainList;

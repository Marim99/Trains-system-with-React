import Train from "./Train";
import "../styles/trains.css";
//import { trains } from "../utilities/trains";
import { useContext, useEffect, useState } from "react";
import { TrainContext } from "../context/context";
import useFetch from "../useFetch";
const TrainList = ({ isAdmin }) => {
  const { data } = useContext(TrainContext);
  const trains = useFetch("http://b57c-196-159-6-17.ngrok.io/allTrains");
  console.log(trains);
  return (
    <div className="container trains-list">
      <div className="container train-container">
        <div className="train-header">
          <h1 className="train-id-header">Train ID</h1>
          <h1 className="train-alarm-header">Train Alarm</h1>
        </div>
      </div>
      {trains &&
        trains.map((train) => (
          <Train train={train} key={train.id} isAdmin={isAdmin} />
        ))}
    </div>
  );
};

export default TrainList;

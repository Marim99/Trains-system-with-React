import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Train from "../utilities/train";
import { trains } from "../utilities/trains";
export const TrainContext = createContext();

const TrainContextProvider = (props) => {
  const [data, setTrain] = useState(trains);
  const addTrain = (
    speed,
    gps,
    temperature,
    lightsState,
    doorState,
    humidity,
    alarm,
  ) => {
    setTrain([
      ...data,
      {
        id: uuidv4(),
        train: new Train(
          speed,
          gps,
          temperature,
          lightsState,
          doorState,
          humidity,
          alarm,
        ),
      },
    ]);
  };

  const removeTrain = (id) => {
    setTrain(data.filter((train) => train.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <TrainContext.Provider value={{ data, addTrain, removeTrain }}>
      {props.children}
    </TrainContext.Provider>
  );
};

export default TrainContextProvider;

import TrainList from "./TrainsList";
import "../styles/admin.css";
import AddTrain from "./AddTrain";
import { useContext } from "react";
import { TrainContext } from "../context/context";
import { useState } from "react";
const Admin = () => {
  /* const [Form, setShowForm] = useState(false);
  const showForm = () => {
    setShowForm(!Form);
  };*/
  const { addTrain } = useContext(TrainContext);
  const handelAddTrain = (e) => {
    e.preventDefault();
    addTrain();
  };

  return (
    <>
      <button className="btn btn-primary add" onClick={handelAddTrain}>
        {" "}
        ADD Train
      </button>
      {/*Form && <AddTrain />*/}
      <TrainList isAdmin={true} />
    </>
  );
};

export default Admin;

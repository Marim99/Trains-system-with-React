import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import Login from "./components/Login";
import TrainList from "./components/TrainsList";

function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TrainsList" element={<TrainList />} />
      </Routes>
    </Router>
  );
}

export default App;

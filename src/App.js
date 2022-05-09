import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import Login from "./components/Login";
import TrainList from "./components/TrainsList";
import Admin from "./components/Admin";
import TrainContextProvider from "./context/context";
import AboutUs from "./components/AboutUs";
import useFetch from "./useFetch";
import axios from "axios";
function App() {
  /*window.axios.defaults.headers.common["crossDomain"] = true;
  window.axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  window.axios.defaults.headers.common["x-csrfToken"] = token;*/
  return (
    <Router>
      <TrainContextProvider>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TrainsList" element={<TrainList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </TrainContextProvider>
    </Router>
  );
}

export default App;

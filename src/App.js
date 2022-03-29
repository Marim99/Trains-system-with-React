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

function App() {
  useFetch("https://jsonplaceholder.typicode.com/posts");
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

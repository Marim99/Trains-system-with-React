import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

const Login = () => {
  /* window.axios = require("axios");
  window.axios.defaults.headers["crossDomain"] = true;
  window.axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  window.axios = require("axios");
  var token = document.querySelector("meta[name=csrf-token]").content;
  console.log(token);
  window.axios.defaults.headers = {
    "X-CSRF-TOKEN": token,
  };
  const handleSubmet = (e) => {
    e.preventDefault();
    console.log(email, password);

    axios
      .post("https://jobs-proj.herokuapp.com/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          name: "marim",
          email: email,
          password: password,
          password_confirmation: password,
        },
      })
      .then((res) => {
        console.log(res);
        //res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };*/
  return (
    <div className="login-cover">
      <div className="login-cover1">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <div className="container">
                <p className="login-text">
                  Smart <span>Railway</span>
                </p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Id"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                    //value={password}
                    //onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Link to={"/TrainsList"}>
                  <button
                    type="submit"
                    className="btn login-btn"
                    //onClick={handleSubmet}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

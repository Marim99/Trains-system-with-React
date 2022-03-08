import { Link } from "react-router-dom";
import "../styles/login.css";
const Login = () => {
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
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button type="submit" className="btn login-btn">
                  <Link to={"/trainsList"}>Login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

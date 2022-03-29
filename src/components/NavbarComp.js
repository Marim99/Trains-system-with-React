import "../styles/navbarComp.css";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            width="40"
            height="40"
            className="d-inline-block align-top"
            src={require("../utilities/images/Vector1.svg").default}
            alt="Tag"
          />
          Smart<span>Railway</span>
        </a>
        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse " id="basic-navbar-nav">
          <nav className=" navbar-nav">
            <a className="nav-link" href="/" data-rr-ui-event-key="/">
              Home
            </a>
            <Link
              className="nav-link"
              to="/aboutus"
              data-rr-ui-event-key="#features"
            >
              About
            </Link>

            <Link className="nav-link" to={"/Login"}>
              <button className="btn" id="login-button">
                {" "}
                Login{" "}
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;

import React, { Component } from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
  
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              FindLegal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item mr-2">
                  <Link className="nav-link active" aria-current="page" to="/discuss">
                    Discuss
                  </Link>
                </li>
                <li className="nav-item mr-2">
                  <Link className="nav-link" to="/bid">
                    For Lawyers
                  </Link>
                </li>
                <li className="nav-item mr-2">
                  <Link className="nav-link" to="/find-lawyer">
                    Find Lawyer
                  </Link>
                </li>            
                <li className="nav-item mr-2">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>            
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    IPC Section
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <Link to="/login"><button type="button" className="btn btn-outline-primary signInBtn">Sign In</button></Link>
              
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

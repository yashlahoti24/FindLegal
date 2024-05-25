import React, { useState, useContext } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./LogoLightModeNoBg.png";

import noteContext from "../Context/notes/NoteContext";

function Login(props) {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ email: "", password: "" });
  const { loginUser } = context;
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const suc = await loginUser(note.email, note.password);
    
    if (suc.success === true) {
      console.log("login successfully");
      Navigate("/");
    } else {
      alert("login failed");
      Navigate("/login");
    }
    console.log(note);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bodyColor">
        <div className="form-container">
          <img
            src={Logo}
            alt="Logo"
            className="login-image"
          />
          <h4 className="login-title">Welcome Back!</h4>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
            <button type="submit" className="form-btn">
              Log in
            </button>
          </form>
          <p className="sign-up-label">
            Don't have an account?
            <Link to="/signup" className="sign-up-link">
              Sign up
            </Link>
          </p>
          <p className="sign-up-label">
            Join as Lawyer {" "} 
          <Link to="/lawyer-signup" className="sign-up-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

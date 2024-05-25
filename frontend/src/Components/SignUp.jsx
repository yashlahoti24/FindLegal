import React, { useState, useContext } from "react";
import "../css/SignUp.css";
import { Link } from "react-router-dom";
import Logo from "./LogoLightModeNoBg.png";

import noteContext from "../Context/notes/NoteContext"

function SignUp(props) {
  const context = useContext(noteContext);
  const { setUser } = context;

  const [note, setNote] = useState({ name: "",phoneNo: "", DOB: "" , email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(note.name, note.phoneNo, note.DOB, note.email, note.password)
    console.log(note);
    // const response = await fetch(`http://localhost:5000/auth/`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: note.email, password: note.password }),
    // });
    // const json = await response.json();
    // console.log(json);
    // if (json.success) {
    //   localStorage.setItem("token", json.authToken);
    //   // Redirect to home page or any other page after successful sign up
    //   window.location.href = "/";
    //   // props.showAlert("Account created successfully", "success");
    // } else {
    //   // props.showAlert("Invalid Credentials", "danger");
    // }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="form-container">
      <img
            src={Logo}
            alt="Logo"
            className="login-image"
          />
        <h4 className="signup-title">Register</h4>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="input"
            className="input"
            placeholder="Name"
            name="name"
            onChange={onChange}
          />
          {/* <input
            type="Bar Number"
            className="input"
            placeholder="Bar Number"
            name="barnumber"
            onChange={onChange}
          /> */}
          <input
            type="Number"
            className="textarea"
            placeholder="Phone No"
            name="phoneNo"
            onChange={onChange}
          />
          <input
            type="Number"
            className="textarea"
            placeholder="DOB"
            name="DOB"
            onChange={onChange}
          />
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
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={onChange}
          />
          <button type="submit" className="form-btn" onClick={handleSubmit}>
            Register
          </button>
        </form>
        <p className="sign-up-label">
          Already registered?
          <Link to='/login' className="sign-up-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState, useContext } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";

import noteContext from "../context/notes/NoteContext";

function Login(props) {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ email: "", password: "" });
  const { loginUser } = context;
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(`http://localhost:5000/api/auth/login`, {
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
    //   // Redirect to the home page or any other page after successful login
    //   window.location.href = "/";
    //   props.showAlert("Login in successfully", "success");
    // } else {
    //   props.showAlert("Invalid Credentials", "danger");
    // }

    const suc =await loginUser(note.email, note.password);
    if(suc.success === true){
      console.log("login successfully")
      Navigate("/");
    }else{
      console.log("login failed");
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
          <p className="title">Welcome</p>
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
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
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
        </div>
      </div>
    </>
  );
}

export default Login;

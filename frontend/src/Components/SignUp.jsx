import React, { useState } from "react";
import "../css/SignUp.css";
import { Link } from "react-router-dom";

function SignUp(props) {
  const [note, setNote] = useState({ email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: note.email, password: note.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      // Redirect to home page or any other page after successful sign up
      window.location.href = "/";
      // props.showAlert("Account created successfully", "success");
    } else {
      // props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="bodyColor">
      <div className="form-container">
        <p className="title">Register</p>
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
            type="Address"
            className="textarea"
            placeholder="address"
            name="address"
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
          <button type="submit" className="form-btn">
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

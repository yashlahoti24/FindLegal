import React, { useState } from "react";
import "../css/SignUp.css";
import { Link } from "react-router-dom";
import dummyDb from "../Data/dummyDb";

function LawyerLogin(props) {
  let host= "http://localhost:5000";
  const [flag,setFlag] = useState(false);
  const [info, setInfo] = useState({
    name:"",
    email: "",
    password: "",
    phoneNo: "",
    lawyerId: "",
    bio: "",
    experience: "",
    court: "",
    practise: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    //bio ha input bhi daalna hai filhal ke liye o static hai
    Verify();
    
  };
  function Verify() {
    let temp =check(info.lawyerId);
    if(temp!==null){
      fill(info.name,info.lawyerId,info.court,info.practise,info.email,info.password,info.phoneNo,"tanmay",info.experience);
    
    }else {
      console.log("enter valid barcode")
 
    }
  }
  function check() {
    // const law = Array.from(dummyDb).filter((e) => e.barcode === barcode);
    let temp =dummyDb.module;
    console.log(temp)
    for(let i=0;i<temp.length;i++){
      console.log(temp[i].barcode,info.lawyerId);
      if(temp[i].barcode ===Number(info.lawyerId)){
        console.log(temp[i]);
        setInfo({
          name:temp[i].name, email: "",
        password: "",
        phoneNo: "",
        lawyerId: temp[i].barcode,
        bio: "",
        expierence: "",
        court: temp[i].court,
        practise: temp[i].practise})
        alert("Bar number Verified! Continue Registration")
        setFlag(true);
        console.log(flag);
        return temp[i];

      }
    }
    alert("Please enter valid bar number");
    setFlag(false)
    console.log(flag);

    return null;
  }
  const fill = async (name,lawyerId,court,practise, email, password, phoneNo, bio, expierence) => {
    console.log(info);

    //registration user ki api call hogi ;
    const response = await fetch(`http://localhost:5000/auth/laywer-registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNo,
        lawyerId,
        bio:"Experienced attorney specializing in Business, offers tailored legal solutions with a client-centered approach. With a track record of success in Business, provide strategic advocacy and personalized attention to achieve favorable outcomes. Committed to justice both in and out of the courtroom, is dedicated to serving clients and community. ",
        expierence,
        court,
        practise,
      }),
    });
    let json = await response.json();
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
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="bodyColor">
      <div className="form-container">
        <p className="title">Register</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="Bar Number"
            className="input"
            placeholder="Bar Number"
            name="lawyerId"
            onChange={onChange}
          />
          <div className="form-check" onClick={check}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Verify
            </label>
          </div>
          <input
            type="input"
            className="input"
            placeholder={info.name.length===0?"Name": `${info.name}`}
            name="name"
            onChange={onChange}
            disabled
          />

          <input
            type="Address"
            className="textarea"
            placeholder="Address"
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
            type="number"
            className="input"
            placeholder="Phone No"
            name="phoneNo"
            onChange={onChange}
          />
          <input
            type="number"
            className="input"
            placeholder="Experience"
            name="experience"
            onChange={onChange}
          />
          <input
            type="text"
            className="input"
            placeholder={info.court.length===0?"Court": `${info.court}`}
            name="court"
            onChange={onChange}
            disabled
          />
          <input
            type="text"
            className="input"
            placeholder={info.practise.length===0?"Practise": `${info.practise}`}
            name="practise"
            onChange={onChange}

            disabled

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
          <button type="button" className="form-btn" disabled={flag?false:true}    onClick={Verify}>
            Register
          </button>
        </form>
        <p className="sign-up-label">
          Already registered?
          <Link to="/lawyer-login" className="sign-up-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LawyerLogin;

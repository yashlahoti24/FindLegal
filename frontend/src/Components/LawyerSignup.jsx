import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBRadio,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import dummyDb from "../Data/dummyDb";
import Logo from "./LogoLightModeNoBg.png";
import { Link } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let host = "http://localhost:5000";
  const [flag, setFlag] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    lawyerId: "",
    bio: "",
    exp: "",
    court: "",
    practise: "",
    city: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    Verify();
  };

  function Verify() {
    let temp = check(info.lawyerId);
    if (temp !== null) {
      fill(
        info.name,
        info.lawyerId,
        info.court,
        info.practise,
        info.email,
        info.password,
        info.phoneNo,
        "tanmay",
        info.exp,
        info.city
      );
    } else {
      toast.error("Enter valid barcode");
    }
  }

  function check() {
    let temp = dummyDb.module;
    console.log(temp);
    for (let i = 0; i < temp.length; i++) {
      console.log(temp[i].barcode, info.lawyerId);
      if (temp[i].barcode === Number(info.lawyerId)) {
        console.log(temp[i]);
        setInfo({
          name: temp[i].name,
          email: "",
          password: "",
          phoneNo: "",
          lawyerId: temp[i].barcode,
          bio: "",
          exp: "",
          court: temp[i].court,
          practise: temp[i].practise,
        });
        toast.success("Bar number Verified! Continue Registration");
        setFlag(true);
        console.log(flag);
        return temp[i];
      }
    }
    toast.error("Please enter valid bar number");
    setFlag(false);
    console.log(flag);

    return null;
  }

  const fill = async (
    name,
    lawyerId,
    court,
    practise,
    email,
    password,
    phoneNo,
    bio,
    exp
  ) => {
    console.log(info);

    const response = await fetch(
      `http://localhost:5000/auth/laywer-registration`,
      {
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
          bio: "Experienced attorney specializing in Business, offers tailored legal solutions with a client-centered approach. With a track record of success in Business, provide strategic advocacy and personalized attention to achieve favorable outcomes. Committed to justice both in and out of the courtroom, is dedicated to serving clients and community. ",
          exp,
          court,
          practise,
        }),
      }
    );
    let json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      window.location.href = "/login";
      toast.success("Account created successfully");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <form className="container" style={{}} onSubmit={handleSubmit}>
        <img
          src={Logo}
          alt="Logo"
          className="login-image"
          style={{ marginTop: "10px" }}
        />
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center"
          style={{}}
        >
          <div className="mask "></div>
          <MDBCard className="m-5">
            <MDBCardBody className="px-5 shadow-lg">
              <h2 className=" text-center mb-5">Create a Lawyer Account</h2>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Bar ID"
                    type="number"
                    name="lawyerId"
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <div className="d-flex flex-row justify-content-center mb-4">
                    <MDBRadio
                      name="flexRadio"
                      label="Verify"
                      onClick={check}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder={info.name.length === 0 ? "Name" : `${info.name}`}
                    name="name"
                    id="form2"
                    type="text"
                    disabled
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Phone No."
                    id="form3"
                    type="number"
                    name="phoneNo"
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Email"
                    id="form4"
                    type="email"
                    name="email"
                    onChange={onChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Experience"
                    id="form2"
                    type="number"
                    name="exp"
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="City"
                    id="form3"
                    type="text"
                    name="city"
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder={info.court.length === 0 ? "Court" : `${info.court}`}
                    id="form4"
                    type="text"
                    name="court"
                    disabled
                    onChange={onChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder={info.practise.length === 0 ? "Practise" : `${info.practise}`}
                    id="form4"
                    type="text"
                    name="practise"
                    disabled
                    onChange={onChange}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Password"
                    id="form4"
                    type="password"
                    onChange={onChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBTextArea placeholder="Write about yourself" className="m-2" onChange={onChange}></MDBTextArea>
              </MDBRow>
              <MDBBtn
                className="mb-4 w-100 shadow-lg btn-success"
                size="lg"
                disabled={flag ? false : true}
                onClick={Verify}
              >
                Register
              </MDBBtn>
              <p className="paragraph">
                Already registered? <Link to="/login">Log in</Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </>
  );
}

export default App;

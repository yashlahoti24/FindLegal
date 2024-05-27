import React, { useEffect, useRef, useState } from "react"; // Import hooks from 'react'
import "../css/Home.css";
import ProfileCard from "./ProfileCard";
import Marriage from "../images/Marriage.webp";
import Birth from "../images/Birth.webp";
import Divorce from "../images/Divorce.webp";
import Name from "../images/Name.webp";
import { Link } from "react-router-dom";
import Certificates from "./Certificates";
import image from "../images/image.png";
import tanmay from "../images/tanmay.jpg";
import ketan from "../images/ketan.jpg";
import samarth from "../images/samarth.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../css/ProfileCard.css";

const Home = ({ options, label, id, selectedVal, handleChange }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <>
      <div>
        <h2 className="text">Your trusted legal partner</h2>
        <h6 style={{ color: "GrayText", paddingBottom: "20px" }}>
          Helping you resolve your legal problem
        </h6>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="marriage">
                <img src={Marriage} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Birth} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Divorce} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Name} className="d-block w-100" alt="..." />
              </Link>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <div className="location">
        <span className="search-text">Search for top-rated Lawyers: </span>
        <div className="dropdownHome">
          <div className="selected-value">
            <input
              ref={inputRef}
              type="text"
              value={getDisplayValue()}
              name="searchTerm"
              onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
              }}
              onClick={toggle}
              placeholder="Search by Location"
            />
            <div className={`arrow ${isOpen ? "open" : ""}`}></div>
          </div>
          <div className={`options ${isOpen ? "open" : ""}`}>
            {filter(options).map((option, index) => (
              <div
                onClick={() => selectOption(option)}
                className={`option ${
                  option[label] === selectedVal ? "selected" : ""
                }`}
                key={`${id}-${index}`}
              >
                {option[label]}
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="profile-container">
        <h2 className="m-3 text">Top Rated Lawyers</h2>
        <div className="profileCard">
          <div className="pCard" style={{ backgroundColor: "#fefefe" }}>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{
                              width: "160px",
                              borderRadius: "0%",
                              position: "relative",
                              left: "-25px",
                            }}
                            src={image}
                            alt="Balaji"
                            fluid
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <MDBCardTitle>Yash Lahoti</MDBCardTitle>
                          <MDBCardText>Business | Pune</MDBCardText>

                          <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: "#efefef" }}
                          >
                            <div>
                              <p className="small text-muted mb-1">
                                Experience
                              </p>
                              <p className="mb-0">2+ Years</p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Ratings</p>
                              <p className="mb-0">4.7</p>
                            </div>
                            <div>
                              <p className="small text-muted mb-1">Users</p>
                              <p className="mb-0">100+</p>
                            </div>
                          </div>
                          <div className="d-flex pt-1">
                            <MDBBtn outline className="me-1 flex-grow-1">
                              Chat
                            </MDBBtn>
                            <Link to="/lawyer-profile/345678912">
                              <MDBBtn className="flex-grow-1">Profile</MDBBtn>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>

          <div className="pCard" style={{ backgroundColor: "#fefefe" }}>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{
                              width: "160px",
                              borderRadius: "0%",
                              position: "relative",
                              left: "-25px",
                            }}
                            src={tanmay}
                            alt="Balaji"
                            fluid
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <MDBCardTitle>Tanmay Yadav</MDBCardTitle>
                          <MDBCardText>Criminal | Mumbai</MDBCardText>

                          <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: "#efefef" }}
                          >
                            <div>
                              <p className="small text-muted mb-1">
                                Experience
                              </p>
                              <p className="mb-0">2+ Years</p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Ratings</p>
                              <p className="mb-0">4.2</p>
                            </div>
                            <div>
                              <p className="small text-muted mb-1">Reviews</p>
                              <p className="mb-0">16</p>
                            </div>
                          </div>
                          <div className="d-flex pt-1">
                            <MDBBtn outline className="me-1 flex-grow-1">
                              Chat
                            </MDBBtn>
                            <Link to="/lawyer-profile/123456789">
                              <MDBBtn className="flex-grow-1">Profile</MDBBtn>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>

          <div className="pCard" style={{ backgroundColor: "#fefefe" }}>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{
                              width: "160px",
                              borderRadius: "0%",
                              position: "relative",
                              left: "-25px",
                            }}
                            src={ketan}
                            alt="Balaji"
                            fluid
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <MDBCardTitle>Ketan Yalmate</MDBCardTitle>
                          <MDBCardText>Marriage | Delhi</MDBCardText>

                          <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: "#efefef" }}
                          >
                            <div>
                              <p className="small text-muted mb-1">
                                Experience
                              </p>
                              <p className="mb-0">2+ Years</p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Ratings</p>
                              <p className="mb-0">4.4</p>
                            </div>
                            <div>
                              <p className="small text-muted mb-1">Reviews</p>
                              <p className="mb-0">10</p>
                            </div>
                          </div>
                          <div className="d-flex pt-1">
                            <MDBBtn outline className="me-1 flex-grow-1">
                              Chat
                            </MDBBtn>
                            <Link to="/lawyer-profile/123456789">
                              <MDBBtn className="flex-grow-1">Profile</MDBBtn>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
            <div className="pCard" style={{ backgroundColor: "#fefefe" }}>
              <MDBContainer>
                <MDBRow className="justify-content-center">
                  <MDBCol md="9" lg="7" xl="5" className="mt-5">
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="p-4">
                        <div className="d-flex text-black">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              style={{
                                width: "160px",
                                borderRadius: "0%",
                                position: "relative",
                                left: "-25px",
                              }}
                              src={samarth}
                              alt="Balaji"
                              fluid
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <MDBCardTitle>Samarth Thosar</MDBCardTitle>
                            <MDBCardText>Tax | Bangalore</MDBCardText>

                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <div>
                                <p className="small text-muted mb-1">
                                  Experience
                                </p>
                                <p className="mb-0">2+ Years</p>
                              </div>
                              <div className="px-3">
                                <p className="small text-muted mb-1">Ratings</p>
                                <p className="mb-0">4.5</p>
                              </div>
                              <div>
                                <p className="small text-muted mb-1">Reviews</p>
                                <p className="mb-0">13</p>
                              </div>
                            </div>
                            <div className="d-flex pt-1">
                              <MDBBtn outline className="me-1 flex-grow-1">
                                Chat
                              </MDBBtn>
                              <Link to="/lawyer-profile/123456789">
                                <MDBBtn className="flex-grow-1">Profile</MDBBtn>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
        </div>
      </div>
      <div className="certificate-container">
        <h2 className="container m-5 text">
          Legal Services and Government Registrations
        </h2>
        <div className="certificate">
          <Link to="/pro">
            <Certificates title="Property Possession Delay" />
          </Link>
          <Link to="/apostile">
            <Certificates title="Apostile Certificate" />
          </Link>
          <Link to="/divorce">
            <Certificates title="Mutual Consent Divorce" />
          </Link>
          <Link to="/pro">
            <Certificates title="Trademark Registration" />
          </Link>
          <Link to="/pro">
            <Certificates title="Marriage Certificate" />
          </Link>
          <Link to="/pro">
            <Certificates title="Birth Certificate" />
          </Link>
          <Link to="/pro">
            <Certificates title="Name Change Certificate" />
          </Link>
          <Link to="/pro">
            <Certificates title="GST Registration" />
          </Link>
          <Link to="/pro">
            <Certificates title="FSSAI License" />
          </Link>
          <Link to="/pro">
            <Certificates title="Legal Heir Certificate" />
          </Link>
          <Link to="/pro">
            <Certificates title="Company Incorporation" />
          </Link>
          <Link to="/pro">
            <Certificates title="Medical Negligence" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;

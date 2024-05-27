import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ProfilePage.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Posts from "./Posts";
import Bids from "./Bids";
import noteContext from "../Context/notes/NoteContext";
import { Star } from "react-bootstrap-icons";
import image from "../images/image.png";
import ketan from "../images/ketan.jpg"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import Reviews from "./Reviews";

const ProfilePage = () => {
  const arr= [image,ketan];
  const context = useContext(noteContext);
  const { getLawyer, lawyer, fetchReviewsOfSpecificLawyer, lawyerReview,writeReview } =
    context;
  const location = useLocation();
  const [rating, setRating] = useState(0);
  const [description,setDescription] = useState("");
  let lawyerId;
  function getLawyerId() {
    let temp = location.pathname;
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    lawyerId = temp.substring(i + 1, temp.length);
    getLawyer(lawyerId);
    console.log(lawyer);
  }

  useEffect(() => {
    getLawyerId();
    fetchReviewsOfSpecificLawyer(lawyerId);
    // console.log(lawyer.img);
  }, []);

  const handleStarClick = (value) => {
    setRating(value);
  };
  const onChange = (e) => {
    setDescription({ ...description, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getLawyerId();
    writeReview(lawyerId,description.description,rating);
    setDescription({description:""});
    setRating(0);
  };

  return (
    <>
    {/* error */}
    {/* <img src={arr[1]} alt="this is an image" /> */}
      <div
        className="profile gradient-custom-2"
        style={{ backgroundColor: "white" }}
      >
        <MDBContainer className="w-100 py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7" className="w-100">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "rgb(34 33 52)", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                        src={image}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">
                      {lawyer && lawyer.name}
                    </MDBTypography>
                    <MDBCardText>
                      {lawyer && lawyer.practise} | {lawyer && lawyer.city}
                    </MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">
                        {lawyer && lawyer.exp}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Experience
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">
                        {lawyer && (lawyer.ratings).toFixed(2)}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Rating
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">{lawyerReview && lawyerReview.length}+</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Reviews
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: "#f8f9fa",
                        textAlign: "justify",
                      }}
                    >
                      <MDBCardText className="font-italic mb-1">
                        {lawyer && lawyer.bio}
                      </MDBCardText>
                    </div>
                  </div>
                  {/* <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Accepted Bids
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="g-2">
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                  </MDBRow> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Reviews and Ratings
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-0">
                      <div
                        className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded"
                        style={{ width: "auto" }}
                      >
                        <form>
                          <div className="form-group">
                            <label htmlFor="description">Write a Review</label>
                            <textarea
                              className="border border-primary form-control"
                              style={{ height: 150 }}
                              name="description"
                              onChange={onChange}
                              type="text"
                              id="description"
                            />
                            <div className="stars">
                              <h5>Ratings:</h5>
                              {[1, 2, 3, 4, 5].map((starValue) => (
                                <div
                                  // {...setRating(starValue)}
                                  key={starValue}
                                  className="star"
                                  onClick={() => handleStarClick(starValue)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <Star
                                    color={
                                      starValue <= rating ? "gold" : "gray"
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="text-center">
                              <button
                                className="btn btn-primary mt-4"
                                onClick={handleSubmit}
                              >
                                Post Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <h4 className="review">All Reviews</h4>
                    </MDBCardText>
                    {lawyerReview &&
                      Array.from(lawyerReview).map((e) => (
                        <Reviews key={e._id} id={e._id} rev={e} />
                      ))}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default ProfilePage;

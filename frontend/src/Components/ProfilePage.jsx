import React, { useEffect, useContext } from "react";
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
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import Reviews from "./Reviews";

const ProfilePage = () => {
  const context = useContext(noteContext);
  const { getLawyer, lawyer } = context;
  const location = useLocation();
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
    // specificPost(postId);
    getLawyer(lawyerId);
    console.log(lawyer);
  }
  useEffect(() => {
    getLawyerId();
    // console.log(lawyerId);
  }, []);
  return (
    <>
      {/* <div className="profile-page">
        <Container>
          <Row>
            <Col md={3}>
              <div className="header">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F35-350426_profile-icon-png-default-profile-picture-png-transparent.png&f=1&nofb=1&ipt=8b421b8487f8940808ad76694922ef089abeccf46a86536b71a1d6f4c6401f96&ipo=images"
                  alt="Profile"
                  className="profile-picture"
                />
              </div>
              <button className="btn btn-outline-primary" type="button">Contact</button>
            </Col>
            <Col>
              <div className="details">
                <div className="user-info">
                  <h1 className="name">{lawyer && lawyer.name}</h1>
                  <p className="headline">{lawyer && lawyer.court}</p>
                </div>
              </div>

              <div className="profile-summary">
                <p>
                {lawyer && lawyer.bio}
                </p>
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="skills">
                <h2>{}</h2>
                <ul>
                </ul>
              </div>
              <h5>Accepted Bids</h5>
            </Col>
            <Col>
              <div className="experience">
                <h2>Latest Posts</h2>
                <div className="experience-item">
                  No posts yet
                </div>
              </div>

              
            </Col>
          </Row>
        </Container>
      </div> */}

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
                    {/* <MDBBtn
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "visible",  zIndex:"5" }}
                    >
                      Edit profile
                    </MDBBtn> */}
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">Yash Lahoti</MDBTypography>
                    <MDBCardText>Business | Pune</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">2 years</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Experience
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">4.5</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Rating
                      </MDBCardText>
                    </div>

                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">100+</MDBCardText>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Non laudantium numquam dicta, soluta explicabo
                        beatae eligendi maxime placeat cum animi fugit quo?
                        Voluptate eveniet cupiditate at inventore amet illo ut
                        ipsum quaerat, quod, nobis rem magnam. Blanditiis,
                        deleniti iure provident inventore corporis explicabo
                        earum aspernatur. Tempore debitis aliquid, facere
                        assumenda deserunt facilis, mollitia magni quasi esse
                        provident nesciunt! Dignissimos voluptate quo sunt
                        laboriosam quae dolor, amet corporis! Repudiandae quod
                        qui perferendis quibusdam iure itaque reprehenderit
                        repellat minima dolor recusandae necessitatibus sit
                        aliquam, vitae, obcaecati similique labore numquam quo
                        eligendi iusto quaerat! Ad ab molestias maiores neque
                        saepe, doloribus earum perspiciatis?
                      </MDBCardText>
                    </div>
                  </div>
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
                              // onChange={handleChange}
                              name="description"
                              type="text"
                              id="description"
                            />
                            <div className="stars">
                              <h5>Ratings:</h5>
                              <div className="star">
                                <Star />
                              </div>
                              <div className="star">
                                <Star />
                              </div>
                              <div className="star">
                                <Star />
                              </div>
                              <div className="star">
                                <Star />
                              </div>
                              <div className="star">
                                <Star />
                              </div>
                            </div>

                            <div className="text-center">
                              <button
                                className="btn btn-primary mt-4"
                                //   disabled={this.validate(
                                // onClick={handleSubmit}
                                //   )}
                              >
                                Post Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <h4 className="review">All Reviews</h4>
                    </MDBCardText>
                  <Reviews />
                  <Reviews />
                  <Reviews />
                  <Reviews />
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

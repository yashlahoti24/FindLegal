import React, {useEffect,useContext} from "react";
import { useLocation } from "react-router-dom";
import "../css/ProfilePage.css"; // Import CSS for styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Posts from "./Posts";
import Bids from "./Bids";
import noteContext from "../context/notes/NoteContext";


const ProfilePage = () => {
  const context = useContext(noteContext);
  const {getLawyer,lawyer} = context;
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
    console.log(lawyer) 
  }
  useEffect(()=>{
    getLawyerId();
    // console.log(lawyerId);
   
  },[lawyer]);
  return (
    <>
      <div className="profile-page">
        <Container>
          <Row>
            <Col md={3}>
              <div className="header">
                {/* Profile picture */}
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F35-350426_profile-icon-png-default-profile-picture-png-transparent.png&f=1&nofb=1&ipt=8b421b8487f8940808ad76694922ef089abeccf46a86536b71a1d6f4c6401f96&ipo=images"
                  alt="Profile"
                  className="profile-picture"
                />
              </div>
              <button className="btn btn-outline-primary" type="button">Contact</button>
            </Col>
            <Col>
              {/* User information */}
              <div className="details">
                <div className="user-info">
                  <h1 className="name">Yash Lahoti</h1>
                  <p className="headline">High Court | Pune</p>
                  {/* Add more information such as connections, activity, etc. */}
                </div>
              </div>

              {/* Profile Summary */}
              <div className="profile-summary">
                <p>
                Experienced attorney specializing in Business, offers tailored legal solutions with a client-centered approach. With a track record of success in Business, provide strategic advocacy and personalized attention to achieve favorable outcomes. Committed to justice both in and out of the courtroom, is dedicated to serving clients and community.
                </p>
              </div>
              {/* Contact Information */}
              
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="skills">
                <h2>{}</h2>
                {/* Display user's skills */}
                <ul>
                  {/* Add more skills */}
                </ul>
              </div>
              <h5>Accepted Bids</h5>
            </Col>
            <Col>
              {/* Experience */}
              <div className="experience">
                <h2>Latest Posts</h2>
                {/* Display user's experience */}
                <div className="experience-item">
                  No posts yet
                </div>
              </div>

              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProfilePage;

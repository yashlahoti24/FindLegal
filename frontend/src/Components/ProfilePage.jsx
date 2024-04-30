import React from "react";
import "../css/ProfilePage.css"; // Import CSS for styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Posts from "./Posts";
import Bids from "./Bids";

const ProfilePage = () => {
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
            </Col>
            <Col>
              {/* User information */}
              <div className="details">
                <div className="user-info">
                  <h1 className="name">John Doe</h1>
                  <p className="headline">Pune</p>
                  {/* Add more information such as connections, activity, etc. */}
                </div>
              </div>

              {/* Profile Summary */}
              <div className="profile-summary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et leo eget massa facilisis interdum. Proin non fringilla
                  nulla. Sed mattis risus et magna dictum, vel lacinia tortor
                  vehicula.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="skills">
                <h2>Practise Areas</h2>
                {/* Display user's skills */}
                <ul>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                  <li>Skill 5</li>
                  <li>Skill 6</li>
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
                  Post 1 <br/>
                  Post 2
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

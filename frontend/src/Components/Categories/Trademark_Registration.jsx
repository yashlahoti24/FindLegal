import React from "react";
import { Link } from "react-router-dom";
import "../../css/Category.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Trademark_Registration() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <div className="background"></div>
            <div className="title container shadow-lg">
              <h5> Trademark Registration</h5>
            </div>
            <Navbar
              expand="lg"
              className="bg-body-tertiary sticky-top border-r-6"
              bg="dark"
              data-bs-theme="dark"
            >
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link
                      style={{ marginRight: "40px" }}
                      onClick={() => scrollToSection("overview")}
                    >
                      Overview
                    </Nav.Link>
                    <Nav.Link
                      style={{ marginRight: "40px" }}
                      onClick={() => scrollToSection("documents")}
                    >
                      Documents
                    </Nav.Link>
                    <Nav.Link
                      style={{ marginRight: "40px" }}
                      onClick={() => scrollToSection("payment")}
                    >
                      Payment
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="content ">
              <section
                id="overview"
                className="overview shadow-lg"
                style={{
                  textAlign: "justify",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <h5 style={{ color: "GrayText", marginTop: "5px" }}>
                  Overview
                </h5>
                <p>
                A trademark is a "brand name" or "logo" that helps you protect the identity of your business. To restrict others from using your brand name or logo, MyAdvo will help you register your trademark through an expert trademark lawyer.                </p>
                <h5>Steps involved in a RERA complaint</h5>
                
                <ul className="custom-list">
                  <li>REQUEST</li>
                  <li>TRADEMARK CLASSIFICATION</li>
                  <li>
TRADEMARK SEARCH</li>
                  <li>
DOCUMENTATION TO FILE TRADEMARK APPLICATION
</li>
                 
                  <li> 
UPDATES</li>
                  
                </ul>
              
              </section>

              <section
                id="documents"
                className="documents shadow-lg"
                style={{
                  textAlign: "justify",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              >
                <h5 style={{ color: "GrayText", marginTop: "5px" }}>
                  Required Documents
                </h5>
                <ul className="list">
                  <li>Soft copy of trademark, logo, or brand name</li>
                  <li>Signed Form-48, which is an authorisation from the applicant to a Trademark Attorney to file the trademark application on his/her behalf</li>
                  <li>Receipts/Proof of payments made to the builder</li>
                  <li>
                  Photocopy of Incorporation Certificate of the company or Partnership Deed
                  </li>
                  <li>Brochure of the Project</li>
                  <li>Letter of Allotment</li>
                </ul>
              </section>

              <section
                id="assurance"
                className="assurance shadow-lg"
                style={{
                  textAlign: "justify",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              >
                <h5 style={{ color: "GrayText", marginTop: "5px" }}>
                  FindLegal Assurance
                </h5>
                <ul className="list">
                  <li>Verified Lawyers</li>
                  <li>Fixed Quotes</li>
                  <li>100% Confidentiality</li>
                  <li>Dedicated Case Manager</li>
                </ul>
              </section>

              <section
                id="payment"
                className="payment shadow-lg"
                style={{
                  textAlign: "justify",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              >
                <h5
                  style={{
                    color: "GrayText",
                    marginTop: "5px",
                    borderBottom: "1px solid grey",
                    paddingBottom: "10px",
                    
                  }}
                >
                  Payment Structure
                </h5>
                <ul>
                  Without Execution
                  <li>
                  100% of the payment to be made at the time of booking of service
                  </li>
                  <li>The booking fee is inclusive of the the Govt Fee-
Individual (Govt Fee - 4500/-)
Pvt. Limited (Govt Fee - 9000/-)</li>
                  With Execution
                 
                 
                </ul>
              </section>
            </div>
          </Col>
          <Col>
            <div className="col-card shadow-lg">
              <h5>Book a lawyer</h5>
              <p
                style={{
                  color: "GrayText",
                  fontSize: "small",
                  textAlign: "justify",
                }}
              >
                Pay securely with major Credit and Debit cards, online Wallets
                and UPI
              </p>
              <Button variant="success">Book a Lawyer</Button>
              <p
                style={{
                  color: "GrayText",
                  fontSize: "small",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
               By booking this consultation, you agree to our T&C
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trademark_Registration;

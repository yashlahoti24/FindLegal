import React, {useContext} from "react";
import noteContext from "../../Context/notes/NoteContext";

import { Link } from "react-router-dom";
import "../../css/Category.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function PropertyPossessionDelayRERA() {
  const context = useContext(noteContext);
  const { reqForBid } = context;
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
const handleReq=(e)=>{
e.preventDefault();
reqForBid("Property Possession Delay-RERA");
console.log("requested for a certificate successfully")
}
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <div className="background"></div>
            <div className="title container shadow-lg">
              <h5>Property Possession Delay - RERA</h5>
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
                  RERA (Real Estate Regulatory Authority) is an act for the
                  regulation and promotion of the real estate sector to ensure
                  the sale of apartment, plot or building in an efficient and
                  transparent manner. It is a dedicated court for the real
                  estate sector and has a fast case-resolution rate. RERA exists
                  to protect the interests of home-Buyers in India.
                </p>
                <h5>Steps involved in a RERA complaint</h5>
                
                <ul className="custom-list">
                  <li>DOCUMENT VERIFICATON</li>
                  <li>COMPLAINT DRAFTING</li>
                  <li>FILING OF COMPLAINT</li>
                  <li>REPLY</li>
                  <li>HEARING AND ARGUMENTS</li>
                  <li>JUDGMENT</li>
                  <li>EXECUTION</li>
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
                  <li>Application for buying of property in the Project</li>
                  <li>Builder-Buyer Agreement</li>
                  <li>Receipts/Proof of payments made to the builder</li>
                  <li>
                    Letters/ email correspondences between the Buyer and the
                    Builder
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
                  <li>Select your price from Bids</li>
                  <li>100% Confidentiality</li>
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
                    You are required to pay 60% of the case fee to start the
                    work.
                  </li>
                  <li>40% is payable after getting the final order.</li>
                  With Execution
                  <li>
                    You are required to pay 60% of the case fee to start the
                    work
                  </li>
                  <li>20% upon getting the final order</li>
                  <li>20% upon receiving RC (Recovery Certificate)</li>
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
              <Button variant="success"
              onClick={handleReq}>Book a Lawyer</Button>
              <p
                style={{
                  color: "GrayText",
                  fontSize: "small",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                By booking a lawyer you agree to our T&C
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PropertyPossessionDelayRERA;

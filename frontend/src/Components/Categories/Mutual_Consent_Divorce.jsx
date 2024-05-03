import React from "react";
import { Link } from "react-router-dom";
import "../../css/Category.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Mutual_Consent_Divorce() {
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
              <h5>Mutual Consent Divorce</h5>
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
                  When both partners are in mutual agreement to part ways and
                  end their marriage, a joint petition for divorce by mutual
                  consent is filed in Family Court. This joint petition also
                  provides for agreement between partners on maintenance and
                  child custody rights.
                </p>
                <h5>Steps involved in a RERA complaint</h5>

                <ul className="custom-list">
                  <li>QUESTIONNAIRE</li>
                  <li>DRAFTING OF JOINT PETITION AND APPROVAL</li>
                  <li>DISPATCH OF DOCUMENTS</li>
                  <li>FILING DIVORCE PETITION</li>

                  <li> APPEARANCE OF PARTIES</li>
                  <li> RECONCILIATION PERIOD</li>
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
                  <li>
                    Address proof of you and your partner (photocopy of any of
                    the following documents will suffice: passport, voter id
                    card, Aadhar card, driving license)
                  </li>
                  <li>Marriage certificate</li>
                  <li>Photographs of the marriage ceremony</li>
                  <li>
                    Photocopy of Incorporation Certificate of the company or
                    Partnership Deed
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
                    You are required to pay 50% of the case fee to start the
                    work
                  </li>
                  <li>50% is payable upon settlement/order</li>
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

export default Mutual_Consent_Divorce;

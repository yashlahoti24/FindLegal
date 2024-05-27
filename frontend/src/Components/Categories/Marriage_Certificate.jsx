import React, { useContext } from "react";
import noteContext from "../../Context/notes/NoteContext";

import { Link } from "react-router-dom";
import "../../css/Category.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Marriage_Certificate() {
  const context = useContext(noteContext);
  const { reqForBid } = context;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const handleReq = (e) => {
    e.preventDefault();
    reqForBid("Marriage Certificate");
    console.log("requested for a certificate successfully");
    toast.success("Requested for the Certificate!");
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <div className="background"></div>
            <div className="title container shadow-lg">
              <h5>Marriage Certificate</h5>
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
                  Marriage Certificate is a vital document and conclusive proof
                  of your marriage that helps:
                </p>
                <ul className="custom-list">
                  <li>as evidence if you want to change name post marriage,</li>
                  <li>on issues of legitimacy of a child,</li>
                  <li>during divorce proceedings,</li>
                  <li>
                    claim property of spouse in case you are not a nominee,
                  </li>
                  <li>to claim life insurance in the event of a mishap,</li>
                  <li>
                    as part of a genealogical history, besides other purposes.
                  </li>
                </ul>

                <h5>Steps involved in Registration of Marriage</h5>

                <ul className="custom-list">
                  <li>CASE MANAGER ASSIGN</li>
                  <li>DOCUMENT VERIFICATON</li>
                  <li>AFFIDAVIT DRAFTING</li>
                  <li>APPLICATION DRAFTING</li>
                  <li>DISPATCH OF DOCUMENTS</li>
                  <li>SUBMISSION OF APPLICATION</li>
                  <li>REGISTRATION OF MARRIAGE</li>
                  <li>MARRIAGE CERTIFICATE</li>
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
                <p>Husband and Wife Applicaton form</p>
                <ul className="list">
                  <li>
                    Age Proof (Any of the following): School/College Leaving
                    School, Birth Certificate, Passport, Domicile Certificate or
                    SSC/HSC Certificate
                  </li>
                  <li>
                    Proof of Residence (Any of the following): Ration Card,
                    Election Card, Electricity Bill, Telephone Bill, Passport or
                    Aadhar Card
                  </li>
                  <li>Wedding Card</li>
                  <li>Passport Size photograph</li>
                  <li>
                    Nikahnama/Any marriage certificate from a religious place,
                    translated in English on the letterhead of an Authorised
                    Translator
                  </li>
                  <li>Divorce decree if either spouse is a divorcee</li>
                  <li>Death certificate if the previous spouse is dead</li>
                  <li>
                    Copy of official gazette if the name is changed after
                    Marriage
                  </li>
                  <li>
                    Marital status certificate if either spouse is a foreign
                    nationalWitnesses- Proof of residence of witnesses: Ration
                    Card, Election Card, Electricity Bill, Telephone Bill,
                    Passport or Aadhar Card
                  </li>
                  <li>PAN Card</li>
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
                  <li>
                    100% of the payment to be made at the time of booking of
                    service
                  </li>
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
              <Button variant="success" onClick={handleReq}>
                Book a Lawyer
              </Button>
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
                theme="light"
                transition={Bounce}
              />
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

export default Marriage_Certificate;

import React from "react";
import { Link } from "react-router-dom";
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
import "../css/Home.css"

function Lawyer(props) {
  const { law } = props;
  return (
    <>
      {/* <div className="list-group posts shadow-lg">
        <div className="d-flex w-100 justify-content-between">
          <Link to={`/lawyer-profile/${law.lawyerId}`}>
            <h5 className="mb-1">{law.name}</h5>
          </Link>
        </div>
        <small>
          {law.practise} | {law.city}
        </small>
        <small>{law.lawyerId}</small>
        <br />
        <small className="overflow-hidden description">{law.description}</small>
      </div> */}

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
                          width: "180px",
                          borderRadius: "50%",
                          position: "relative",
                          left: "-25px",
                        }}
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F21%2FAdmin-Profile-PNG-Pic.png&f=1&nofb=1&ipt=13cf10cf23a2e6d2e2f8724498de54f1b826c2a989753387e17939b8be60aa60&ipo=images"
                        alt="Balaji"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>{law.name}</MDBCardTitle>
                      <MDBCardText>
                        {law.practise} | {law.city}
                      </MDBCardText>

                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">Experience</p>
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
                        <Link to={`/lawyer-profile/${law.lawyerId}`}>
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
    </>
  );
}

export default Lawyer;

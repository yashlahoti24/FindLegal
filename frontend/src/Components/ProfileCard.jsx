import React from "react";
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
import "../css/ProfileCard.css"

export default function ProfileCard() {
  return (
    <div className="pCard" style={{ backgroundColor: "#fefefe" }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "180px", borderRadius: "50%", position:"relative", left:"-25px" }}
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F4d%2F4a%2F10%2F4d4a10e6edf74212a6317dc55559be30.jpg&f=1&nofb=1&ipt=60d9c71265a68c89d48d2a72069a78e07df7b3d43ae70e768103710f310d73e0&ipo=images"
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
                      <MDBBtn className="flex-grow-1">Profile</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
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
import "../css/Home.css";

function Lawyer(props) {
  const { law } = props;
  const [images, setImages] = useState([]);
  const [upIm, setUpIm] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/images`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    // console.log(String(law.lawyerId), typeof String(law.lawyerId));
    console.log(images,"images");
    const filteredImages = images.filter(
      (image) => image.lawyerId === String(law.lawyerId)
    );
    console.log(filteredImages, "filtered images");
    setUpIm(filteredImages);
  }, [images]);

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
                          width: "160px",
                          position: "relative",
                          left: "-25px",
                        }}
                        src={`http://localhost:5000/image/${upIm[0] && upIm[0]._id}`}
                        alt="Loading..."
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>{law.name}</MDBCardTitle>
                      <MDBCardText>
                        {law.practise} | {law.city}
                      </MDBCardText>

                      <div
                        className="d-flex justify-content-center rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">Experience</p>
                          <p className="mb-0">{law.exp}</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Ratings</p>
                          <p className="mb-0">{law.ratings} / 5</p>
                        </div>
                        {/* <div>
                          <p className="small text-muted mb-1">Reviews</p>
                          <p className="mb-0"></p>
                        </div> */}
                      </div>
                      <div className="d-flex pt-1">
                        {/* <MDBBtn outline className="me-1 flex-grow-1">
                          Chat
                        </MDBBtn> */}
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
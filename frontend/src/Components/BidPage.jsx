import React, { useContext, useEffect } from "react";
import { PersonCircle, HandThumbsUpFill } from "react-bootstrap-icons";
import noteContext from "../context/notes/NoteContext";
import { useLocation } from "react-router-dom";
import CreateBid from "./CreateBid";

function BidPage(props) {
  const context = useContext(noteContext);
  const {  } = context;
  // const queryParameters = new URLSearchParams(window.location.pathname)
  // const bidId = queryParameters.get("bidId")
  const location = useLocation();
  let bidId;
  function getBidId() {
    let temp = location.pathname;
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    bidId = temp.substring(i + 1, temp.length);
  }
 

  useEffect(() => {
    
  }, []); // Added bidId as a dependency for useEffect
  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <h2>Title</h2>
        <p className="mt-4 text-align" style={{ color: "#505050" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum totam earum rem reiciendis quod laudantium ratione consequatur odio asperiores. Esse dolore cum provident repudiandae numquam molestias dicta doloremque ullam maxime laudantium vitae aperiam, ad illum minima ut nam enim quam obcaecati modi rerum ea expedita cupiditate perspiciatis veniam? Obcaecati.
        </p>
        <div className="mt-1">
          <div
            class="d-flex w-100 justify-content-between"
            style={{ color: "#505050" }}
          >
            <div>
              <PersonCircle size={30} className="mr-2" />
              Posted by Yash Lahoti
            </div>
            <p class="mb-1">12:00 PM, 12/01/2022</p>
          </div>
        </div>
      </div>
      <CreateBid />
    </>
  );
}

export default BidPage;

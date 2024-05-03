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
        <h2>Property Possesion Delay - RERA</h2>
        <div className="mt-1">
          <div
            class="d-flex w-100 justify-content-between"
            style={{ color: "#505050" }}
          >
            
          </div>
        </div>
      </div>
      <CreateBid />
    </>
  );
}

export default BidPage;

import React, { useContext, useEffect } from "react";
import { PersonCircle, HandThumbsUpFill } from "react-bootstrap-icons";
import noteContext from "../context/notes/NoteContext";
import { useLocation } from "react-router-dom";
import CreateBid from "./CreateBid";

function BidPage(props) {
  const context = useContext(noteContext);
  const { postComments, specificPost, sdata, comment } = context;
  // const queryParameters = new URLSearchParams(window.location.pathname)
  // const postId = queryParameters.get("postId")
  const location = useLocation();
  let postId;
  function getPostId() {
    let temp = location.pathname;
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    postId = temp.substring(i + 1, temp.length);
    specificPost(postId);
  }

  useEffect(() => {
    getPostId();
    postComments(postId);
    console.log(comment);
    console.log(sdata && sdata.userId)

    //box ke andar sdata aur comment tha
    //use re render hone ka uske vajah se undefine ka error nhi ata par out of resources ka error ata hai
  }, [sdata]); // Added postId as a dependency for useEffect
  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <h2>{sdata && sdata.title}</h2>
        <p className="mt-4 text-align" style={{ color: "#505050" }}>
          {sdata && sdata.description}
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

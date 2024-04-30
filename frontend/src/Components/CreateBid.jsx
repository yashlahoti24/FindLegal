import React, { useState, useEffect, useContext } from "react";
import "../css/Posts.css";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function CreateBid() {
  let Navigate = useNavigate();
  const context = useContext(noteContext);
  const { commentOnPos } = context;
  const [com, setComment] = useState({ description: "" });
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      //redirect to login sign up page;
      Navigate("/login");
    }
  }, []);
  function handleChange(e) {
    setComment({ ...com, [e.target.name]: e.target.value });
  }

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
  }

  function handleSubmit(e) {
    e.preventDefault();
    getPostId();
    console.log(postId);
    commentOnPos(postId, com.description);
    console.log(com.description);
    setComment({ description: "" });
    // console.log(json);
    console.log("done");
  }

  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <form>
          <div className="form-group">
            <label htmlFor="description">Description</label>
              <textarea
                className="border border-primary form-control"
                style={{ height: 150 }}
                // value={data.comment}
                onChange={handleChange}
                name="description"
                type="text"
                id="description"
              />
              <input type="number" name="amount" value="" 
              className="border border-primary form-control"
              style= {{marginTop: "5px"}}
              placeholder='Bid Amount(In Rupees)'/>

            <div className="text-center">
              <button
                className="btn btn-primary mt-4"
                //   disabled={this.validate(
                onClick={handleSubmit}
                //   )}
              >
                Bid
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBid;

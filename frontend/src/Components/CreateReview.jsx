import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
import { useLocation } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Star } from "react-bootstrap-icons";
import "../css/CreateReview.css";

function CreateReview() {
  let Navigate = useNavigate();
  const context = useContext(noteContext);

  return (
    <>
      <div
        className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded"
        style={{ width: "auto" }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="description">Write a Review</label>
            <textarea
              className="border border-primary form-control"
              style={{ height: 150 }}
              // onChange={handleChange}
              name="description"
              type="text"
              id="description"
            />
            <div className="stars">
              <h5>Ratings:</h5>
              <div className="star">
                <Star />
              </div>
              <div className="star">
                <Star />
              </div>
              <div className="star">
                <Star />
              </div>
              <div className="star">
                <Star />
              </div>
              <div className="star">
                <Star />
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary mt-4"
                //   disabled={this.validate(
                // onClick={handleSubmit}
                //   )}
              >
                Post Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateReview;

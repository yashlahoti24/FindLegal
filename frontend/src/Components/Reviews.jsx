import React, { useEffect, useContext, useState } from "react";
import "../css/Posts.css";
import { PersonCircle, HandThumbsUpFill, Star } from "react-bootstrap-icons";
import noteContext from "../Context/notes/NoteContext";

import PostPage from "../Components/PostPage";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function Reviews(props) {
  const context = useContext(noteContext);
  const { likes, name, getUserById } = context;
  const { id, rev } = props;
  // let [uName,setName] = useState("");
  useEffect(() => {
    getUserById(rev.userId);
  }, []);
  return (
    <>
      <div className="list-group posts shadow-lg">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{name}</h5>
        </div>
        <div className="d-flex w-100 justify-content-between">
          {/* <h6 className="mb-1 star"><Star/><Star/><Star/><Star/><Star/></h6>
           */}
           <div className="stars">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <div
              key={starValue}
              className="star"
            >
              <Star color={starValue <= rev.ratings ? "gold" : "gray"} />
            </div>
          ))}
          </div>
        </div>
        <br />
        <small className="overflow-hidden description">{rev.description}</small>
        <br />
      </div>
    </>
  );
}

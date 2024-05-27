import React, { useEffect } from "react";
import "../css/Posts.css";
import { Link } from "react-router-dom";

export default function Bids(props) {
  const { post } = props;
  useEffect(() => {
    console.log(post._id);
  }, []);
  return (
    <>
      <Link to={`/bid/${post._id}`}>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.practise}</h5>
          </div>
          <small>Created by User Name</small>
          <br />
          <small className="overflow-hidden description">
            {post.description}
          </small>
        </div>
      </Link>
    </>
  );
}

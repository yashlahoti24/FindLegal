import React, { useEffect } from "react";
import "../css/Posts.css";
import { PersonCircle, HandThumbsUpFill } from "react-bootstrap-icons";

import PostPage from "../Components/PostPage";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const { post } = props;
  useEffect(() => {
    console.log(post._id);
  }, []);
  return (
    <>
      <Link to={`/post-page/${post._id}`}>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
          </div>
          <small>Created by Lawyer Name</small>
          <br />
          <small className="overflow-hidden description">
            {post.description}
          </small>
          <br />
          <div className="mt-1 tags">
            Related Topics:
            {post.tag &&
              post.tag.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
          </div>
          <h6 className="mt-2 likes">1K Likes</h6>
        </div>
      </Link>
    </>
  );
}

import React, { useEffect } from "react";
import "../css/Posts.css";
import { Link } from "react-router-dom";
export default function Posts(props) {
  const { post, id } = props;
  useEffect(() => {
    console.log("in the posts", post);
  }, []);
  //  const note= props.note;
  return (
    <>
      <Link to={"/post-page"}>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title} </h5>
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
              Array.from(post.tag).map((e) => {
                return e;
              })}
          </div>
          <h6 className="mt-2 likes">1K Likes | 2.5K Views</h6>
        </div>
      </Link>
    </>
  );
}

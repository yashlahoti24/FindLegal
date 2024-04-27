import React,{useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
export default function Posts(props) {
    // const {note}=props; 
   const note= props.note;
  return (
    <>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Title</h5>
          </div>
          <small>Created by Lawyer Name</small>
          <br />
          <small className="overflow-hidden description">
            {/* {props.post.description} */}
          </small>
          <br />
          <div className="mt-1 tags">
            Related Topics: 
            <span className="tag">Tag 1</span>
            <span className="tag">Tag 2</span>
            <span className="tag">Tag 3</span>
            <span className="tag">Tag 4</span>
          </div>
            <h6 className="mt-2 likes">1K Likes | 2.5K Views</h6>
        </div>
    </>
  );
};

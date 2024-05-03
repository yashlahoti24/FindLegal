import React, { useEffect , useContext} from "react";
import "../css/Posts.css";
import { PersonCircle, HandThumbsUpFill } from "react-bootstrap-icons";
import noteContext from "../context/notes/NoteContext";

import PostPage from "../Components/PostPage";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function Posts(props) {
  const context = useContext(noteContext);
  const {
    likes,name,getUser
  } = context;
  const { post } = props;
  useEffect(() => {
    // console.log(post._id);
    getUser();
    // console.log(name);
  }, [name]);
  return (
    <>
      <Link to={`/post-page/${post._id}`}>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.title}</h5>
          </div>
          {/* <small>Created by {name}</small> */}
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
        </div>
      </Link>
    </>
  );
}

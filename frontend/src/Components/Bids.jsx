import React, { useEffect,useContext } from "react";
import "../css/Posts.css";
import { Link } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";

export default function Bids(props) {
  const context = useContext(noteContext);
  
  const {getUserById,name }  = context;
  const { post} = props;
  useEffect(() => {
    getUserById(post.userId);
    console.log(name)
    // console.log(post._id);
  }, []);
  return (
    <>
      <Link to={`/bid/${post._id}`}>
        <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{post.practise}</h5>
          </div>
          <small>Created by {name}</small>
          <br />
          <small className="overflow-hidden description">
            {post.description}
          </small>
        </div>
      </Link>
    </>
  );
}

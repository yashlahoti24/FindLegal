import React, { useState, useContext, useEffect } from "react";
import { PersonCircle, HandThumbsUpFill, Heart } from "react-bootstrap-icons";
import CreateReply from "./CreateReply";
import noteContext from "../Context/notes/NoteContext";
import { useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Replies from "./Replies";

function PostPage(props) {
  const context = useContext(noteContext);
  const {
    postComments,
    specificPost,
    sdata,
    comment,
    likes,
    likeOnPost,
    postLikes,
    disLikePost,
    getUserById,name
    
  } = context;
  //if the post is liked dislike will be false
  const [disLike, setDisLike] = useState(true);

  // const queryParameters = new URLSearchParams(window.location.pathname)
  // const postId = queryParameters.get("postId")
  const location = useLocation();
  let postId;let userId;
 async function  getPostId() {
    let temp = location.pathname;
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    postId = temp.substring(i + 1, temp.length);
  userId= await  specificPost(postId);
  userId =userId.userId;
  // console.log(name ,"this is the id of the user")
    getUserById(userId);
    // console.log(name && name)
  }
  const handleLike = (e) => {
    e.preventDefault();
    getPostId();
    if (disLike) {
      setDisLike(false);
      likeOnPost(postId);
      console.log("liked a post successfully");
    } else {
      setDisLike(true);
      disLikePost(postId);
      console.log("dislike a post");
    }
  };
  useEffect(() => {
    getPostId();
    postComments(postId);
    postLikes(postId);

    // you have to do get user by id by using post id

    // console.log(comment);
    // console.log(sdata && sdata.tag )

    //box ke andar sdata aur comment tha
    //use re render hone ka uske vajah se undefine ka error nhi ata par out of resources ka error ata hai
  }, []); // Added postId as a dependency for useEffect
  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded" style = {{ width:"auto"}}>
        <h2>{sdata && sdata.title}</h2>
        <p className="mt-4 text-align" style={{ color: "#505050" , textAlign: "justify"}}>
          {sdata && sdata.description}
        </p>
        <div className="mt-1">
          Related Topics:
          {
           sdata &&  sdata.tag && Array.from(sdata.tag).map((e)=>{
              return <span className="tag">{e}</span>
            })
          }
          {/* <span className="tag">tag 1</span>
          <span className="tag">tag 2</span>
          <span className="tag">tag 3</span>
          <span className="tag">tag 4</span> */}
          <div className="d-flex w-100 justify-content-between mt-3 mb-3">
            <button className={"btn btn-outline-primary"} onClick={handleLike}>
              {disLike ? (
                <Heart className="mr-2" />
              ) : (
                <AiFillHeart className="mr-2" />
              )}

               {" " + likes}
            </button>
          </div>
          <div
            class="d-flex w-100 justify-content-between"
            style={{ color: "#505050" }}
          >
            <div>
              <PersonCircle size={30} className="mr-2" />
              Posted by {name}
            </div>
            <p class="mb-1">{sdata && sdata.date}</p>
          </div>
        </div>
      </div>
      <CreateReply />
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded" style={{width: "auto"}}>
        No of comments {comment && comment.length}
      </div>
      <div>
        {comment &&
          Array.from(comment).map((e) => {
            // {console.log( getUserById(e.userId)) ,'hello'}
            return (
              <Replies key = {e._id} e = {e}/>
            );
          })}
      </div>
    </>
  );
}

export default PostPage;

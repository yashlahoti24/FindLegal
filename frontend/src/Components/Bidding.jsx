
import React, {useContext, useState, useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Bids from "./Bids";

function Bidding() {
  const context = useContext(noteContext);
  const {  getPost,data } = context;

const host = "http://localhost:5000";


  useEffect(() => {
      getPost();
      console.log(data);
  }, [data]);

  return (
   <>
   <Link to={"/create-post"}>
   {/* <button>Add</button> */}
   </Link>
    {
         data && Array.from( data).map((p)=>{
        // console.log(p)
      return (<Bids key={p._id} post={p}/>);
        })
      } 
    

    </>
  );
}

export default Bidding;

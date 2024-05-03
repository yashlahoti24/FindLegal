
import React, {useContext, useState, useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Bids from "./Bids";

function Bidding() {
  const context = useContext(noteContext);
  const {  showBids,bid } = context;

const host = "http://localhost:5000";


  useEffect(() => {
      // getPost();
      showBids();
      // console.log();
  }, []);

  return (
   <>
   <Link to={"/create-post"}>
   {/* <button>Add</button> */}
   </Link>
    {
         bid && Array.from( bid).map((p)=>{
        // console.log(p)
      return (<Bids key={p._id} post={p}/>);
        })
      } 
    

    </>
  );
}

export default Bidding;

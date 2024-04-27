'use client'
import React, {useContext, useState, useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Posts from "./Posts";

function Discuss() {
  const context = useContext(noteContext);
  // const {  getPost } = context;
let arr=[];
const host = "http://localhost:5000";
const getPost =  async()=>{

  //get all posts
  const response = await fetch(`${host}/discussion-forum`, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      // "auth-token" : localStorage.getItem('token')

    },
  });
  const json =  await response.json();
  arr=json.post;
  console.log(arr);
return json.post;
   }
  useEffect(() => {
      getPost();
  }, []);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await addPost(note.title, note.description, note.tag);
  //   console.log(note);
  //   console.log("frontend");
  // };
  // const onChange = (e) => {
  //   setNote({ ...note, [e.target.name]: e.target.value });
  // };

  return (
   <>
    {
       arr && Array.from(arr).map((p)=>{
        console.log("tanmay");
        return;
        })
      } 
    

    </>
  );
}

export default Discuss;

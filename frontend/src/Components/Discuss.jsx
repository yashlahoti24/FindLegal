
import React, {useContext, useState, useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Posts from "./Posts";

function Discuss() {
  const context = useContext(noteContext);
  const {  getPost,data } = context;
// let arr=[];
// let [data,setData] = useState();
const host = "http://localhost:5000";


  useEffect(() => {
      getPost();
      console.log(data);
  }, [data]);
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
   <Link to={"/create-post"}>
   <button>Add</button>
   </Link>
    {
         data && Array.from( data).map((p)=>{
        // console.log(p)
      return (<Posts key={p._id} post={p}/>);
        })
      } 
    

    </>
  );
}

export default Discuss;

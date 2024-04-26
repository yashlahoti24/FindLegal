import React, { useContext, useState,useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
// import '../Context/LegalContext';
// import '../Context/LegalState';
// import LegalContext from "../Context/LegalContext";

function Discuss() {
  const context = useContext(noteContext);
  const {addPost,post,getPost} = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  useEffect(()=>{
    getPost();
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();
    await addPost(note.title, note.description, note.tag);
    console.log(note);
    console.log("frontend");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <h1>This is Discussion Forum</h1>
      <div className="bodyColor">
        <div className="form-container">
          <p className="title">Welcome</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="title"
              onChange={onChange}
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="description"
              onChange={onChange}
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="tag"
              onChange={onChange}
            />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button type="submit" className="form-btn">
              Log in
            </button>
          </form>
          
        </div>
      </div>
      {
        post && Array.from(post).map((e)=>{
          console.log(e.title,e.description,e.tag)
        })
      }
    </>
  );
}

export default Discuss;

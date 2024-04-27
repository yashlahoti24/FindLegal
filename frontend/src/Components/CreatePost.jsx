import React, { useState, useContext, useEffect } from "react";
import Input from "./Common/Input";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";


function CreatePost() {
    let Navigate = useNavigate();
  const context = useContext(noteContext);
  const { addPost } = context;
  const [post,setPost] =useState({title: "", description: "", tag: ""});
  //   const { data, errors, tags } = this.state;
  useEffect(() => {
    if(localStorage.getItem("token")===null) {
      Navigate('/login');
      
    }
  }, []);
  function handleChange(e) {
    setPost(e.target.value);
    setPost({...post, [e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
   addPost(post.title,post.description,post.tag);
    setPost({title:"",description:"",tag:""});
    // console.log(json);
    console.log("done")
  }
  return (
    <>
      <div className="container-lg">
        <h1 className="text-center m-2">Create a New Discussion</h1>
        <div
          className="container m-4 p-4 rounded"
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <form>
            <Input
              // value={data.title}
              onChange={handleChange}
              label="Title"
              name="title"
              type="text"
              // error={errors.title}
            />
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                // value={data.description}
                onChange={handleChange}
                name="description"
                type="description"
                id="description"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Related Tags</label>
              <br />
              {/* {tags.map((tag) => (
                <React.Fragment>
                  <label className="mr-3 ml-3"> */}
              <input
                //   key={tag._id}
                //   className="form-check-input"
                className="form-control"
                type="text"
                name="tag"
                id="tag"
                onChange={handleChange}
              />
              {/* {tag.name}
                  </label>
                </React.Fragment> */}
              {/* ))} */}
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary mt-4"
                onClick={handleSubmit}
                //   disabled={this.validate()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

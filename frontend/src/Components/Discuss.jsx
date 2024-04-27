import React, {useContext, useState, useEffect} from "react";
import "../css/Posts.css"
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Posts from "./Posts";

function Discuss() {
  const context = useContext(noteContext);
  const { addPost, post, getPost } = context;

  const [note, setNote] = useState({id:"", title: "", description: "", tag: "" });
  useEffect(() => {
    getPost();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(note.title, note.description, note.tag);
    console.log(note);
    console.log("frontend");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    // <>
    //   <h1>This is Discussion Forum</h1>
    //   <div className="bodyColor">
    //     <div className="form-container">
    //       <p className="title">Welcome</p>
    //       <form className="form" onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           className="input"
    //           placeholder="Email"
    //           name="title"
    //           onChange={onChange}
    //         />
    //         <input
    //           type="text"
    //           className="input"
    //           placeholder="Password"
    //           name="description"
    //           onChange={onChange}
    //         />
    //         <input
    //           type="text"
    //           className="input"
    //           placeholder="Password"
    //           name="tag"
    //           onChange={onChange}
    //         />
    //         <p className="page-link">
    //           <span className="page-link-label">Forgot Password?</span>
    //         </p>
    //         <button type="submit" className="form-btn">
    //           Log in
    //         </button>
    //       </form>

    //     </div>
    //   </div>
    //   {
    //     post && Array.from(post).map((e)=>{
    //       console.log(e.title,e.description,e.tag)
    //     })
    //   }
    // </>
    <>
      {/* <Link
        className="list-group-item list-group-item-action flex-column align-items-start"
        to={"/post-page"}
      >
        <div className="list-group posts">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Title</h5>
          </div>
          <small>Created by Lawyer Name</small>
          <br />
          <small className="overflow-hidden description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            vero voluptate deserunt architecto porro iusto impedit, doloribus
            aliquid, ducimus cum quaerat quam voluptatibus nostrum harum alias
            distinctio dicta perferendis, eius amet! At! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione eos itaque tempore qui quaerat, tempora, consectetur sunt adipisci numquam quia laudantium atque veniam doloremque omnis, at pariatur hic aspernatur exercitationem asperiores nisi eum facere. Cum nostrum atque sed voluptatum obcaecati distinctio blanditiis eum qui, est dolorum at ducimus rem.
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
      </Link> */}
      {
        post && Array.from(post).map((p)=>{
          p.map((e)=>{
              console.log(e);
          })
          // <Posts post={p} key={p._id}/>
          // console.log(p);
        })
      }
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>

    </>
  );
}

export default Discuss;

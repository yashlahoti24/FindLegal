import React, {useState,useEffect} from 'react'
import "../css/Posts.css"
import { useNavigate } from 'react-router-dom';

function CreateReply() {
    let Navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")===null){
            //redirect to login sign up page;
            Navigate("/login");
        }
    },[]);
    const [post, setPost] = useState();
      function handleChange(e) {
        setPost(e.target.value);
    }
    
  return (
    <>
        <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
          <form>
            <div className="form-group">
              <label htmlFor="description">Post Reply</label>
              <textarea
                className="border border-primary form-control"
                style={{ height: 150 }}
                // value={data.comment}
                onChange={handleChange}
                name="comment"
                type="comment"
                id="comment"
              />
              <div className="text-center">
                <button
                  className="btn btn-primary mt-4"
                  //   disabled={this.validate()}
                >
                  Post Reply
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
  )
}

export default CreateReply


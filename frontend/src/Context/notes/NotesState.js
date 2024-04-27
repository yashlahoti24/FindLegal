import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  // const [notes, setNotes] = useState();
  let [post,setPost] = useState([]);
  let arr=[];
  let [likes, setLikes]  = useState();
  let [comment,setComments]  =useState();
  
  const setUser = async (name, phoneNo, DOB, email, password) => {
    const response = await fetch(`${host}/auth/user-registration`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, phoneNo, DOB, email, password }),
    });
    const json = await response.json();
    console.log(json);
  };

  const loginUser = async(email,password)=>{
    const response = await fetch(`${host}/auth/login`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      }
      ,
      body:JSON.stringify({email,password})
    })
    const json = await response.json();
    console.log(json,"successs");
    console.log(json)
    if(json.success) {
      localStorage.setItem('token',json.authToken)
    }else {
      //  props.showAlert('Invalid Creditianls', 'danger');
      console.log("invalid credentials");
    }
    return json;
  }

  //get all post
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
    console.log(json.post);
  return json.post;
     }
  //add a post
  const addPost =  async(title,description,tag)=>{
    const response = await fetch(`${host}/discussion-forum/addpost`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
  
      },
      body: JSON.stringify({title,description,tag}), 
    });
  const json =  await response.json();
  setPost(post.concat(json));
  console.log(json);
  }
  //view a specific post
  const specificPost  =async(id)=>{
    const response = await fetch(`${host}/discussion-forum/id`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
    const json =  await response.json();
    console.log(json);
  }
  //view  like on specific post
  const postLikes = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/postlikes/id`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
    const json =  await response.json();
    let number= json.length;
    setLikes(number);
    console.log(json);
  }
  // view comment on specific post
  const postComments = async(id,description)=>{
    const response = await fetch(`${host}/discussion-forum/postComments/id`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
      
    const json =  await response.json();
    setComments(json);
    console.log(json);
  }

  //like a post
  const likeOnPost = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/like/id`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          'auth-token':localStorage.getItem('token')  
        },
      });
      
    const json =  await response.json();
    setLikes(likes +1);
    console.log(json);
  }
  const commentOnPos = async(id,description)=>{
    const response = await fetch(`${host}/discussion-forum/comment/id`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          'auth-token':localStorage.getItem('token')  
        },
        body: JSON.stringify({description})
      });
      
    const json =  await response.json();
    setComments(comment.concat(json));
    console.log(json);
  }
    //delete a post 
    const delPos  = async(id) =>{
        const response = await fetch(`${host}/discussion-forum/delete/id`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
              'auth-token':localStorage.getItem('token')  
            }
          });
          
        const json =  await response.json();
        // setComments(post.re);
        //here we need to write a code to remove the post from the posts 
        console.log(json);
    }
  
  return (
    <NoteContext.Provider value={{ setUser , loginUser, addPost,getPost}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

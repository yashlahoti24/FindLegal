import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  // const [notes, setNotes] = useState();
  let [data,setData] = useState([]);
  let [sdata,setSdata] = useState();
  let [name,setName] = useState("");
  let [likes, setLikes]  = useState(0);
  let [comment,setComments]  =useState();
  let [bid,setBid] = useState();
  let [lawyer,setLawyer] = useState();
  let [flag,setFlag]= useState(false);
  const getLawyer =async(id)=>{
    const response = await fetch(`${host}/auth/getlawyer/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      // body: JSON.stringify({ name, phoneNo, DOB, email, password }),
    });
    const json = await response.json();
    // setLawyer("hello");
    console.log(json[0]);
      setLawyer(json[0]);
  };
  
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
  const getUserById =async(id)=>{
    const response = await fetch(`${host}/discussion-forum/get/${id}`, {
      method: "POST", 
      // headers: {
      //   // "Content-Type": "application/json",
      //   "auth-token" : localStorage.getItem('token')
      // },
    });
    const json = await response.json();
    // console.log(json[0]);
    setName(json[0] && json[0].name);

    // return json[0].name;
  }
  const getUser = async()=>{
    const response = await fetch(`${host}/discussion-forum/getuser`, {
      method: "POST", 
      headers: {
        // "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
    });
    let json =await response.json();
    // console.log(json ,json[0]._id);
    return json[0];
    
  }
  const loginUser = async(email,password)=>{
    const response = await fetch(`${host}/auth/login/user`,{
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
      localStorage.setItem('flag',json.flag);
    }else {
      //  props.showAlert('Invalid Creditianls', 'danger');
      console.log("invalid credentials");
    }
    return json;
  }
//login lawyer
const loginLawyer = async(email,password)=>{
  const response = await fetch(`${host}/auth/login/lawyer`,{
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
    // console.log(json.post,json);
    // setData(json.post);
    setData(json)
    // arr=json.post;
    // console.log(data,'data');
     }
  //add a post | authentication requried
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
  console.log(json, );
  setData(data.concat(json));
  }
  //view a specific post
  const specificPost  =async(id)=>{
    const response = await fetch(`${host}/discussion-forum/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
    const json =  await response.json();
    // console.log(json.post[0]);
    setSdata(json.post[0]);
    return json.post[0];
  }
  //view  like on specific post
  const postLikes = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/postlikes/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
    const json =  await response.json();
    let number= json.length;
    setLikes(number);
    // console.log(json);
  }
  // view comment on specific post
  const postComments = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/postComments/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",    
        },
      });
      
    const json =  await response.json();
    setComments(json);
    // console.log(json);
    return json;
    
  }

  //like a post
  const likeOnPost = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/like/${id}`, {
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
  //dislike a post
  const disLikePost = async(id)=>{
    const response = await fetch(`${host}/discussion-forum/dislike/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json", 
          'auth-token':localStorage.getItem('token')  
        },
      });
      
    const json =  await response.json();
    setLikes(likes -1);
    console.log(json);
  }
  const commentOnPos = async(id,description)=>{
    const response = await fetch(`${host}/discussion-forum/comment/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          'auth-token':localStorage.getItem('token')  
        },
        body: JSON.stringify({description})
      });
      
    const json =  await response.json();
    setComments(json);
    console.log(json);
    return json;
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
  // show all bids
  const showBids = async()=>{
    const response = await fetch(`${host}/bid/bids`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      // body: JSON.stringify({practise})
    });
    let json = await response.json();
    console.log(json);
    setBid(json);
  }
  //req for a bid
  const reqForBid = async(practise)=>{
    const response = await fetch(`${host}/bid/req`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      body: JSON.stringify({practise})
    });
    let json =await response.json();
    console.log(json);
  }
  //lawyer applying for a bd
  const lawyerApplyingBid = async(id,description,price)=>{
    const response = await fetch(`${host}/bid/bids/apply/${id}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      body: JSON.stringify({description,price})
    });
    let json =await response.json();
    console.log(json);
  }
  let [showUserBid,setUserBid] =useState();
  //user seeing all its bids that lawyer had applied
  const usersBid=async()=>{
    let id  =  await getUser();
    // console.log(id._id,"this is the id of the user");
    const response = await fetch(`${host}/bid/bids/show/${id._id}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      // body: JSON.stringify({description,price})
    });
    let json =await response.json();
    // console.log(json);
    setUserBid(json);
  return json;    
  } 
  //bid acceptance
  const bidAcceptance=async(id,lawyerId,practise)=>{
    const response = await fetch(`${host}/bid/bid-acceptance/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      body: JSON.stringify({lawyerId,practise})
    });
    let json = await response.json();
    console.log(json);
  }
  //bring all lawyers
  const[displayLaw,setAllLawyer] = useState();
  const displayAllLawyer=async(a,b)=>{
    if(b!==null){
      const response = await fetch(`${host}/search/${a}/${b}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          // 'auth-token':localStorage.getItem('token')  
        },
        // body: JSON.stringify({lawyerId,practise})
      });
      let json = await response.json();
      // console.log(json.lawyer);
      setAllLawyer(json.lawyer);
    }else if(a!==null){

    const response = await fetch(`${host}/search/${a}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        // 'auth-token':localStorage.getItem('token')  
      },
      // body: JSON.stringify({lawyerId,practise})
    });
    let json = await response.json();
    // console.log(json.lawyer);
    setAllLawyer(json.lawyer);
  }else{
    const response = await fetch(`${host}/search`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        // 'auth-token':localStorage.getItem('token')  
      },
      // body: JSON.stringify({lawyerId,practise})
    });
    let json = await response.json();
    // console.log(json.lawyer);
    setAllLawyer(json.lawyer);
  }
  }
  //fetching reviews of a lawyer 
  const [lawyerReview,setLawyerReview] =useState({});
  const fetchReviewsOfSpecificLawyer=async(id)=>{
      const response = await fetch(`${host}/discussion-forum/view-all-review/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          'auth-token':localStorage.getItem('token')  
        },
        // body: JSON.stringify({lawyerId,practise})
      });
      let json = await response.json();
      console.log(json);
      setLawyerReview(json);
    
  }
  //writing a review
  const writeReview=async(id,description,ratings)=>{
    const response = await fetch(`http://localhost:5000/discussion-forum/review/${id}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        'auth-token':localStorage.getItem('token')  
      },
      body: JSON.stringify({description,ratings})
    });
    let json = await response.json();
    console.log(json,``);  
}
  //fetching all bid acceptance of a single lawyer
  return (
    <NoteContext.Provider value={{writeReview,fetchReviewsOfSpecificLawyer,lawyerReview,lawyer,getLawyer,displayAllLawyer,displayLaw,showUserBid,bidAcceptance,usersBid,lawyerApplyingBid,bid,showBids,reqForBid,getUserById,getUser,name,disLikePost,postLikes,likes,likeOnPost, setUser,postComments,comment , specificPost,loginUser,data,getPost,sdata,addPost,commentOnPos}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

import React, { useEffect, useContext ,useState} from "react";
import { PersonCircle, HandThumbsUpFill, Heart } from "react-bootstrap-icons";
import noteContext from "../Context/notes/NoteContext";

function Name(props) {
    // const context = useContext(noteContext);
    let [n,sN] = useState("");
//   const { getUserById, name } = context;
    const {key} = props;
    useEffect(()=>{
        // const getUserById =async(id)=>{
        //     const response = await fetch(`http://localhost:5000/discussion-forum/get/${id}`, {
        //       method: "POST", 
        //       // headers: {
        //       //   // "Content-Type": "application/json",
        //       //   "auth-token" : localStorage.getItem('token')
        //       // },
        //     });
        //     const json = await response.json();
        //     console.log(json[0] && json[0].name);
        //     sN(json[0] && json[0].name);
        
        //     // return json[0].name;
        //   }
        //   getUserById(e);
        console.log(key)
    },[])
  return (
    <>
      <div className="ml-4">
        <PersonCircle size={30} className="mr-3" />
        {"  "}posted by {n}
      </div>
    </>
  )
}

export default Name

import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
  
  const [notes, setNotes] = useState()
  const [name, setName] = useState("")

  // change the name in the navbar

const changeName =async (e)=>{
  // e.preventDefault();
  const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token" :localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);
   setName(json.name);
   
}
    return (
        <NoteContext.Provider value= {{changeName,name,setName}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
import React from "react";
import NoteContext from "./LegalContext";
import { useState } from "react";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
  
//   const [notes, setNotes] = useState()
//   const [name, setName] = useState("")

// //get notes
//  const getNotes =  async()=>{
//   const response = await fetch(${host}/api/notes/fetchallNotes, {
//     method: "GET", 
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token" : localStorage.getItem('token')

//     },
//     // body: JSON.stringify(title,description,tag), 
//   });
//   // const json= response.json();y

// const json =  await response.json();
// setNotes(json)

// }
//   //add a note
//   const addNotes = async(title,description,tag)=>{
//     const response = await fetch(${host}/api/notes/addNote, {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token" : localStorage.getItem('token')

//       },
     
//       body: JSON.stringify({title,description,tag}), 
//     });
//     const json=await response.json();
//     console.log(json)
//    let note;
//    console.log("adding a new note")
//      note =json
//     setNotes(notes.concat(note))

//   }
//   //delete a note
//  const deleteNote = async (id)=>{
//   const response = await fetch(${host}/api/notes/deletenote/${id}, {
//     method: "DELETE", 
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token" : localStorage.getItem('token')
//     },
   
//     // body: JSON.stringify(data), 
//   });
//   const json= response.json();
//     console.log("note deleted successfully" + id);
//    const newNotes = notes.filter((note)=>  note._id!==id)
//     setNotes(newNotes);
//  }
//   // edit a note
//   const editNote =async (id,title,description, tag)=>{
//   const response = await fetch(${host}/api/notes/updatenote/${id}, {
//     method: "PUT", 
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token" : localStorage.getItem('token')
//     },
   
//     body: JSON.stringify({title,description,tag}), 
//   });
//   const json=await response.json();

//     let newNote =JSON.parse(JSON.stringify(notes));
//     for(let index=0;index<notes.length;index++){
//       const element = notes[index];
//       console.log(element)
//       if( element._id===id){
//         newNote[index].title = title;
//         newNote[index].description = description;
//         newNote[index].tag= tag;
//         break;
//       }
//     }
//     setNotes(newNote)
//   }
//   // change the name in the navbar

// const changeName =async (e)=>{
//   // e.preventDefault();
//   const response = await fetch(http://localhost:5000/api/auth/getuser, {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token" :localStorage.getItem('token')
//       },
//     });
//     const json = await response.json();
//     console.log(json);
//    setName(json.name);
   
// }

const [post, setPost] = useState(null)
//get notes
 const getPost =  async()=>{
//   const response = await fetch(`${host}/discussion-forum`, {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json",

//     },
    
// });
const postObj = {
    userId:"618724", 
    name: 'Yash',
    content:'This is a test for discussion forum'
}
// const json =  await response.json();
setPost(postObj)
}

    return (
        <NoteContext.Provider value= {{post, setPost}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
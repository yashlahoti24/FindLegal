import React, { useEffect, useContext } from "react";
import { PersonCircle, HandThumbsUpFill, Heart } from "react-bootstrap-icons";
import noteContext from "../Context/notes/NoteContext";
import Name from "./Name";


function Replies(props) {
  const context = useContext(noteContext);
  const { getUserById, name } = context;
    const {e} = props;
    useEffect(()=>{
        getUserById(e.userId);
        console.log(e.userId);
    },[])
  return (
    <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
      <Name key = { e && e.userId}/>
      <div className="m-4">{e.description}</div>
      <div className="d-flex w-100 justify-content-between mt-3 mb-3">
        <p class="mb-1">{e.date}</p>
      </div>
    </div>
  );
}

export default Replies;

import React from "react";
import { Link } from "react-router-dom";
import "../css/Certificate.css";

function Certificates(props) {
  return (
    <>
        <div className="card-client">
          <p className="name-client" style={{color: "GrayText"}}>
            {props.title}
          </p>
        </div>
    </>
  );
}

export default Certificates;
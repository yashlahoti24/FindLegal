import React from "react";
import { Link } from "react-router-dom";
import "../css/ProfileCard.css";

function ProfileCard(props) {
  return (
    <>
        <div className="card-client">
          <p className="name-client">
            {props.title}
          </p>
        </div>
    </>
  );
}

export default ProfileCard;

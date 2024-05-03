import React from 'react'
import { Link } from "react-router-dom";

function Lawyer(props) {
  const {law} = props;
  return (
    <>
      <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <Link to= {`/lawyer-profile/${law.lawyerId}`}>
            <h5 className="mb-1">{law.name}</h5>
            </Link>
          </div>
            <small>{law.practise} | {law.city}</small>
            <small>{law.lawyerId}</small>
          <br />
          <small className="overflow-hidden description">
           {law.description}
          </small>
        </div>
    </>
  )
}

export default Lawyer

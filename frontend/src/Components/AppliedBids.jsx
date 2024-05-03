import React, {useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import noteContext from '../context/notes/NoteContext';
import "../css/Posts.css";

function AppliedBids(props) {
    const context = useContext(noteContext);
    const { BidId,bidAcceptance } = context;
    let {bid} =props 
  const handleAccept=(e)=>{
    e.preventDefault();
    console.log(bid.bidId,bid.lawyerId,bid.userId,bid.practise);
    bidAcceptance(bid.bidId,bid.lawyerId,bid.practise);
    console.log("accepted successfuly")
    
  }
  return (
    <>
      <div className="list-group posts shadow-lg">
          <div className="d-flex w-100 justify-content-between">
            <Link to="/profile">
            <h5 className="mb-1">Lawyer Name</h5>
            </Link>
          </div>
          <small>Bid for : Rs 100</small>
          <br />
          <small className="overflow-hidden description">
           {bid.description}</small>
          <button className='btn btn-primary mt-2'
            onClick={handleAccept}
          >Accept
          </button>
        </div>
    </>
  )
}

export default AppliedBids

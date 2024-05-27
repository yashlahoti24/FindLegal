import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/Posts.css";

function AppliedBids(props) {
  const context = useContext(noteContext);
  const { BidId, bidAcceptance, lawyer, getLawyer } = context;
  let { bid } = props;
  useEffect(() => {
    // console.log(bid.lawyerId)
    // getLawyer(bid.lawyerId);
    getLawyer(bid.lawyerId);
    console.log(lawyer && lawyer.name);
  }, []);
  const handleAccept = (e) => {
    e.preventDefault();
    // console.log(bid.bidId,bid.lawyerId,bid.userId,bid.practise);
    bidAcceptance(bid.bidId, bid.lawyerId, bid.practise);
    console.log("accepted successfuly");
    toast.success("Accepted Successfully!");
  };
  return (
    <>
      <div className="list-group posts shadow-lg">
        <div className="d-flex w-100 justify-content-between">
          
            <h5 className="mb-1">{bid.practise}</h5>

        </div>
        <small>Bid Amount: Rs {bid.price}</small>
        <br />
        <small className="overflow-hidden description">{bid.description}</small>
        <button className="btn btn-primary mt-2" onClick={handleAccept}>
          Accept
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default AppliedBids;

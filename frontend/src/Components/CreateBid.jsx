import React, { useState, useEffect, useContext } from "react";
import "../css/Posts.css";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateBid() {
  let Navigate = useNavigate();
  const context = useContext(noteContext);
  const { lawyerApplyingBid } = context;
  let [com, setCom] = useState({ description: "", price: "" });
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      //redirect to login sign up page;
      Navigate("/login");
    }
  }, []);
  function handleChange(e) {
    setCom({ ...com, [e.target.name]: e.target.value });
  }

  const location = useLocation();
  let bidId;
  function getBidId() {
    let temp = location.pathname;
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    bidId = temp.substring(i + 1, temp.length);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getBidId();
    console.log(bidId);
    lawyerApplyingBid(bidId, com.description, com.price);
    console.log("done");
    toast.success('Bid Applied Successfully!');
  }

  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <form>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="border border-primary form-control"
              style={{ height: 150 }}
              // value={data.comment}
              onChange={handleChange}
              name="description"
              type="text"
              id="description"
            />
            <label htmlFor="description">Bid Amount</label>
            <textarea
              className="border border-primary form-control"
              style={{ height: 50 }}
              // value={data.comment}
              onChange={handleChange}
              name="price"
              type="number"
              id="price"
            />
            {/* <input
              type="number"
              name="price"
              value="100"
              className="border border-primary form-control"
              style={{ marginTop: "5px" }}
              onChange={handleChange}
              placeholder="Bid Amount(In Rupees)"
            /> */}

            <div className="text-center">
              <button
                className="btn btn-primary mt-4"
                //   disabled={this.validate(
                onClick={handleSubmit}
                //   )}
              >
                Bid
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
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBid;

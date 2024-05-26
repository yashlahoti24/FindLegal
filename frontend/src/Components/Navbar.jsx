import React, { useState, useEffect, useContext } from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";
import noteContext from '../Context/notes/NoteContext';
function Navbar() {
  const context = useContext(noteContext);
  const { usersBid,showUserBid } = context;
  let [signUp,setSignUp] = useState();
  const handleSignIn=()=>{
    if(!signUp){
      localStorage.removeItem('token')
      localStorage.removeItem('flag');
    }
  }
  useEffect(()=>{
    if(localStorage.getItem('token')!==null){
      setSignUp(false);
      
    }else setSignUp(true);
  },[])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FindLegal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mr-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/discuss"
                >
                  Discuss
                </Link>
              </li>
              {localStorage.getItem('flag')==='true'?(
                <>
              <li className="nav-item mr-2">
                <Link className="nav-link" to="/bid">
                  For Lawyers
                </Link>
              </li>  <li className="nav-item mr-2">
                <Link className="nav-link" to="/lawyer-profile">
                  Profile
                </Link>
              </li>
              </>
              ): (
                <>
                <li className="nav-item mr-2">
                               <Link className="nav-link" to="/find-lawyer">
                                 Find Lawyer
                               </Link>
                             </li>
                             <li className="nav-item mr-2">
                               <Link className="nav-link" to="/page">
                                 Bids
                               </Link>
                             </li>
                 </>
              )}
              
                

              
 
             
            
                        </ul>
            <Link to="/login">
              <button
                type="button"
               onClick={handleSignIn} className="btn btn-outline-primary signInBtn"
              >
                {signUp?"Sign Up":"Sign Out"}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

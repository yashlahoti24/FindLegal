import React, { useEffect, useContext, useState } from "react";
import Location from "./Dropdowns/Location";
import Types from "./Dropdowns/Types";
import "../css/Services.css";
import noteContext from "../Context/notes/NoteContext";

import Lawyer from "./Lawyer";
const Services = () => {
  const context = useContext(noteContext);
  // const [exp, setExp] = useState(0);
  // const [ratings, setRatings] = useState(false);
  const { displayAllLawyer, displayLaw } = context;
  useEffect(() => {
    displayAllLawyer(null, null,"",0);
    console.log(displayLaw, "lawyers displayed");
  }, []);
  const handleFilter = (e) => {
    e.preventDefault();
    let temp = window.location.pathname;
    console.log(temp);
    let i = 1;
    for (i = 1; i < temp.length; i++) {
      if (temp.charAt(i) === "/") {
        break;
      }
    }
    temp = temp.substring(i + 1, temp.length);
    let ind = temp.indexOf("/");
    if (ind === -1) {
      console.log(temp);

      displayAllLawyer(temp, null);
    } else {
      console.log(
        temp.substring(0, temp.indexOf("/")),
        temp.substring(temp.indexOf("/") + 1)
      );
      displayAllLawyer(
        temp.substring(0, temp.indexOf("/")),
        temp.substring(temp.indexOf("/") + 1),
        // sort.ratings,sort.exp
      );
    }
    // function handleSort(e){
    //   setRatings(ratings?"":"desc");
    // }
    // function onChange(e){
    //   setExp({...exp,[e.target.name]: e.target.value})
    // }
    // function handleExp(e){
    //   displayAllLawyer()
    // }
    // console.log(temp);
  };
  return (
    <>
      <div
        className="dropdowns drop"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Filter By:
        <div className="drop">
          <Location />
        </div>
        <div className="drop">
          <Types />
        </div>
        <button
          className="btn btn-outline-success"
          onClick={handleFilter}
          type="button"
        >
          Filter
        </button>
      </div>
      {/* <div
        className="dropdowns drop"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Sort By:
        <div className="drop">
          <input type="number" name="exp" placeholder="Experience"/>
        </div>
        <button
          className="btn btn-outline-success"
          type="button"
        >
          Sort
        </button>
        <button
          className="btn btn-outline-success"
          
          type="button"
        >
          Sort By Ratings
        </button>
      </div> */}
      {/* <div className="lawyer"> */}
        {displayLaw &&
          displayLaw.map((e) => {
            return (
              <>
                <Lawyer key={e._id} law={e} />
              </>
            );
          })}
      {/* </div> */}
    </>
  );
};
export default Services;

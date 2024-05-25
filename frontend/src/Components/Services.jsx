import React, { useEffect, useContext } from "react";
import Location from "./Dropdowns/Location";
import Types from "./Dropdowns/Types";
import "../css/Services.css";
import noteContext from "../Context/notes/NoteContext";

import Lawyer from "./Lawyer";
const Services = () => {
  const context = useContext(noteContext);
  const { displayAllLawyer, displayLaw } = context;
  useEffect(() => {
    displayAllLawyer(null, null);
    // console.log(displayLaw,"lawyers displayed")
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
        temp.substring(temp.indexOf("/") + 1)
      );
    }
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
      {displayLaw &&
        displayLaw.map((e) => {
          return <Lawyer key={e._id} law={e} />;
        })}
    </>
  );
};
export default Services;

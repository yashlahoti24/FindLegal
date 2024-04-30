import React from "react";
import Location from "./Dropdowns/Location";
import Types from "./Dropdowns/Types";
import "../css/Services.css"
const Services = () => {
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
        <div className="drop"><Location /></div>
        <div className="drop"><Types /></div>
      </div>
    </>
  );
};
export default Services;

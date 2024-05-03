// Location.js
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Location() {
  const handleLocationClick = (location) => {
    // Constructing the new URL by appending the selected location to the current URL
    const currentUrl = window.location.pathname;
    const newUrl = `${currentUrl}/${location}`;
    // Updating the browser URL
    window.history.pushState(null, "", newUrl);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleLocationClick("pune")}>Pune</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("mumbai")}>Mumbai</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("chennai")}>Chennai</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("bangalore")}>Bangalore</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("kolkata")}>Kolkata</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("hyderabad")}>Hyderabad</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("nagpur")}>Nagpur</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Location;

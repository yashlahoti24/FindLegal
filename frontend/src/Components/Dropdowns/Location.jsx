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
          <Dropdown.Item onClick={() => handleLocationClick("Pune")}>Pune</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Mumbai")}>Mumbai</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Nagpur")}>Nagpur</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Parbani")}>Parbani</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Ahmednagar")}>Ahmednagar</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Nanded")}>Nanded</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Nashik")}>Nashik</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Virar")}>Virar</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Indira Nagar")}>Indira Nagar</Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationClick("Indore")}>Indore</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Location;

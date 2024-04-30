import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Location() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="Pune">Pune</Dropdown.Item>
          <Dropdown.Item href="Mumbai">Mumbai</Dropdown.Item>
          <Dropdown.Item href="Chennai">Chennai</Dropdown.Item>
          <Dropdown.Item href="Bangalore">Bangalore</Dropdown.Item>
          <Dropdown.Item href="Kolkata">Kolkata</Dropdown.Item>
          <Dropdown.Item href="Hyderabad">Hyderabad</Dropdown.Item>
          <Dropdown.Item href="Nagpur">Nagpur</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Location;

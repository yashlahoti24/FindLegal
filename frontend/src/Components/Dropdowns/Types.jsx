// Types.js
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Types() {
  const handleTypeClick = (type) => {
    // Constructing the new URL by appending the selected type to the current URL
    const currentUrl = window.location.pathname;
    const newUrl = `${currentUrl}/${type}`;
    // Updating the browser URL
    window.history.pushState(null, "", newUrl);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Services
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleTypeClick("Criminal")}>Criminal Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Business")}>Business Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Property")}>Property Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Tax")}>Tax Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Defence")}>Defence Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Family")}>Family Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Politics")}>Politics Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("Industrial")}>Industrial Lawyer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Types;

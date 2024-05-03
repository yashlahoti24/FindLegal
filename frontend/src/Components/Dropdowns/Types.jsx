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
          <Dropdown.Item onClick={() => handleTypeClick("criminal")}>Criminal Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("divorce")}>Business Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("bankruptcy")}>Bankruptcy Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("tax")}>Tax Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("defence")}>Defence Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("family")}>Family Lawyer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTypeClick("entertainment")}>Entertainment Lawyer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Types;

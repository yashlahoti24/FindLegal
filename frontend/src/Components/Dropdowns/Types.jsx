import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Types() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Services
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="Criminal">Criminal Lawyer</Dropdown.Item>
          <Dropdown.Item href="Business">Business Lawyer</Dropdown.Item>
          <Dropdown.Item href="Bankruptcy">Bankruptcy Lawyer</Dropdown.Item>
          <Dropdown.Item href="Tax">Tax Lawyer</Dropdown.Item>
          <Dropdown.Item href="Defence">Defence Lawyer</Dropdown.Item>
          <Dropdown.Item href="Family">Family Lawyer</Dropdown.Item>
          <Dropdown.Item href="Entertainment">Entertainment Lawyer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Types;

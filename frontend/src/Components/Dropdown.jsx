import React, { useState } from 'react';
import '../css/Dropdown.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Property Possession Delay - RERA", "Apostille Certificate", "Possession Delay - NCLT", "Mutual Consent Divorce", "Trademark Registration",
    "Cheque Bounce Complaint", "Legal Notice", "Unpaid Salary - Legal Notice", "Wrongful Termination - Legal Notice", "Consumer Matter - Legal Notice",
    "Canada Immigration (PR)", "Legal Documentation", "Consumer Case", "Marriage Certificate", "Court Marriage",
    "GST Registration", "FSSAI License", "Legal Heir Certificate"
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <ul>
      <li className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </li></ul>
      <div className={`dropdown-menu${isOpen ? ' show' : ''}`} 
       style={{ width: 'max-content', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 15%)', zIndex: '100000' }}>
        <div className="container">
          <div className="row">
            {options.map((option, index) => (
              <div className="col-3" key={index}>
                <button className="dropdown-item" type="button">{option}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

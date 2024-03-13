import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownMenu = document.getElementById("dropdownMenu");
      if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    "Property Possession Delay - RERA", "Apostille Certificate", "Possession Delay - NCLT", "Mutual Consent Divorce", "Trademark Registration",
    "Cheque Bounce Complaint", "Legal Notice", "Unpaid Salary - Legal Notice", "Wrongful Termination - Legal Notice", "Consumer Matter - Legal Notice",
    "Canada Immigration (PR)", "Legal Documentation", "Consumer Case", "Marriage Certificate", "Court Marriage",
    "GST Registration", "FSSAI License", "Legal Heir Certificate"
  ];

  const optionsPerColumn = Math.ceil(options.length / 4);
  const columns = Array.from({ length: 4 }, (_, i) =>
    options.slice(i * optionsPerColumn, (i + 1) * optionsPerColumn)
  );

  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle"
        role="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? "true" : "false"}
      >
        Services
      </div>
      <ul id="dropdownMenu" className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', left: '50%', transform: 'translateX(-50%)' }}>
        {columns.map((column, index) => (
          <div key={index}>
            {column.map((option, idx) => (
              <li className="dropdown-item" key={idx}>{option}</li>
            ))}
          </div>
        ))}
      </ul>
    </li>
  );
}

export default DropdownMenu;

import React, { useEffect, useRef, useState } from "react"; // Import hooks from 'react'
import "../css/Home.css";
import ProfileCard from "./ProfileCard";
import Marriage from "../images/Marriage.webp";
import Birth from "../images/Birth.webp";
import Divorce from "../images/Divorce.webp";
import Name from "../images/Name.webp";
import { Link } from "react-router-dom";

const Home = ({ options, label, id, selectedVal, handleChange }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <>
      <div>
        <h2 className="text">Your trusted legal partner</h2>
        <h6 style={{ color: "GrayText", paddingBottom: "20px" }}>
          Helping you resolve your legal problem
        </h6>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="find-lawyer">
                <img src={Marriage} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Birth} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Divorce} className="d-block w-100" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="find-lawyer">
                <img src={Name} className="d-block w-100" alt="..." />
              </Link>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="location">
        <span className="search-text">Search for top-rated Lawyers: </span>
        <div className="dropdownHome">
          <div className="selected-value">
            <input
              ref={inputRef}
              type="text"
              value={getDisplayValue()}
              name="searchTerm"
              onChange={(e) => {
                setQuery(e.target.value);
                handleChange(null);
              }}
              onClick={toggle}
              placeholder="Search by Location"
            />
            <div className={`arrow ${isOpen ? "open" : ""}`}></div>
          </div>
          <div className={`options ${isOpen ? "open" : ""}`}>
            {filter(options).map((option, index) => (
              <div
                onClick={() => selectOption(option)}
                className={`option ${
                  option[label] === selectedVal ? "selected" : ""
                }`}
                key={`${id}-${index}`}
              >
                {option[label]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="m-3 text">Legal Services</h2>
      <div className="profileCard">
        <Link to="/pro">
          <ProfileCard title="Property Possession Delay - RERA" />
        </Link>
        <Link to="/apostile">
          <ProfileCard title="Apostille Certificate" />
        </Link>
        <Link to ="/divorce">
        <ProfileCard title="Mutual Consent Divorce" />
        </Link>
        <Link to ="trademark">
        <ProfileCard title="TradeMark registration" />
        </Link>
      </div>
    </>
  );
};
export default Home;

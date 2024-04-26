import React from 'react';
import '../css/ProfilePage.css'; // Import CSS for styling
import Navbar from './Navbar';

const ProfilePage = () => {
  return (
    <div className="profile-page">
        <Navbar/>
      <div className="header">
        {/* Profile picture */}
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F35-350426_profile-icon-png-default-profile-picture-png-transparent.png&f=1&nofb=1&ipt=8b421b8487f8940808ad76694922ef089abeccf46a86536b71a1d6f4c6401f96&ipo=images"
          alt="Profile"
          className="profile-picture"
        />
        {/* User information */}
        <div className="user-info">
          <h1 className="name">John Doe</h1>
          <p className="headline">Lawyer</p>
          <p className="location">Pune, India</p>
          {/* Add more information such as connections, activity, etc. */}
        </div>
      </div>

      {/* Profile Summary */}
      <div className="profile-summary">
        <h2>Bio:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo
          eget massa facilisis interdum. Proin non fringilla nulla. Sed mattis
          risus et magna dictum, vel lacinia tortor vehicula.
        </p>
      </div>

      {/* Experience */}
      <div className="experience">
        <h2>Latest Cases</h2>
        {/* Display user's experience */}
        <div className="experience-item">
          <h3>Road Accident Case</h3>
          <p className="company">Salman Khan</p>
          <p className="duration">January 2020 - Present</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo
            eget massa facilisis interdum.
          </p>
        </div>
        {/* Add more experience items */}
      </div>

      {/* Education */}
      <div className="education">
        <h2>Education</h2>
        {/* Display user's education */}
        <div className="education-item">
          <h3>12th fail</h3>
          <p className="school">Lovely Professional University</p>
          <p className="duration">1912 - 1914</p>
        </div>
        {/* Add more education items */}
      </div>

      {/* Skills */}
      <div className="skills">
        <h2>Skills</h2>
        {/* Display user's skills */}
        <ul>
          <li>Loud Voice</li>
          <li>Keeps good relation with judge</li>
          {/* Add more skills */}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

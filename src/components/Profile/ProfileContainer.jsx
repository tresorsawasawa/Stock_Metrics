import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import './ProfileHeader.scss';

const ProfileContainer = () => (
  <>
    <header className="header-container">
      <div className="header py-2">
        <Link to="/">
          <FaChevronLeft className="back-icon" />
        </Link>
        <span>Home</span>
      </div>
    </header>
    <Profile />
  </>
);

export default ProfileContainer;

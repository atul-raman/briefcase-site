import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src="/4-removebg-preview.png" alt="Briefcase Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/team" className="nav-link">Team</Link>
          </li>
          <li>
            <a
              href="mailto:araman31@asu.edu?subject=Inquiry&body=Hi%20Briefcase%20Team,"
              className="cta"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
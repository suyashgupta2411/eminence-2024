import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"; // Ensure your styles are correctly referenced

const NavigationBar = () => {
  return (
    <div className="transparent-bar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Events
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Gallery
      </NavLink>
    </div>
  );
};

export default NavigationBar;

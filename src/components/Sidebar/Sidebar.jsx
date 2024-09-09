import React, { useState } from "react";
import spacexLogo from "../../assets/spacex-logo.png";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const Sidebar = ({ position, isOpen, toggleSideBar }) => {
  console.log("isOpen", isOpen);
  const [isSelected, setIsSelected] = useState("Dashboard");

  return (
    <div className={`${position}-sidebar  ${isOpen ? `open` : `closed`}`}>
      <div className="logo-container">
        {position === "right" && (
          <FaXmark
            className="menu-icon-black"
            onClick={() => toggleSideBar()}
          />
        )}
        <img src={spacexLogo} alt="SpaceX Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="/" onClick={() => setIsSelected("Dashboard")}>
          <h2
            style={{
              color: isSelected === "Dashboard" ? "#000" : "",
            }}
          >
            Dashboard
          </h2>
        </Link>
        <Link to="/rockets" onClick={() => setIsSelected("Rockets")}>
          <h2
            style={{
              color: isSelected === "Rockets" ? "#000" : "",
            }}
          >
            Rockets
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

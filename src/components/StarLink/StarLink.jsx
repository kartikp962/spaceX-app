import React from "react";
import rocket from "../../assets/satellite.svg";
import "./StarLink.css";

const StarLink = () => {
  return (
    <div
      className=""
      style={{
        marginTop: "-1.5rem",
      }}
    >
      <p className="starlink-title">Starlink</p>
      <div className="starlink-content">
        <img src={rocket} alt="satellite" className="rocket-image" />
        <p className="satellite-text">
          There are currently 3268 active Starlink satellites <br /> on the low
          Earth orbit
        </p>
      </div>
    </div>
  );
};

export default StarLink;

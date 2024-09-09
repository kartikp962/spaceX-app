import React from "react";
import "./Overview.css";

const Overview = ({ description, photo }) => {
  return (
    <div className="overview-container">
      <div className="overview-image-container">
        <div className="image-overlay"></div>
        <img src={photo} alt="rocket-img" className="overview-image" />
      </div>
      <div className="description-container">
        <p className="description-title">DESCRIPTION</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Overview;

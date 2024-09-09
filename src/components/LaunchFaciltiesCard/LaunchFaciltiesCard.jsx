import React from "react";
import "./LaunchFaciltiesCard.css";

const LaunchFacilitiesCard = ({ data }) => {
  const { img, name, facilityName, temp, weather, region, wind } = data;
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay"></div>
      <div className="card-content">
        <div>
          <p className="card-title">{name}</p>
          <p className="card-subtitle">{facilityName}</p>
        </div>
        <div>
          <p className="region-text">REGION</p>
          <p className="region-value">{region}</p>
        </div>
      </div>
      <div className="card-content mt-2">
        <div>
          <p className="temp-text">TEMP</p>
          <p className="temp-value">{temp}</p>
        </div>
        <div>
          <p className="weather-text">WEATHER</p>
          <p className="weather-value">{weather}</p>
        </div>
        <div>
          <p className="wind-text">WIND</p>
          <p className="wind-value">{wind}</p>
        </div>
      </div>
    </div>
  );
};

export default LaunchFacilitiesCard;

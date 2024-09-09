import React, { useEffect, useState } from "react";
import "./Rockets.css";
import RocketMainCard from "../RocketMainCard/RocketMainCard";
import { ROCKET_API } from "../../constants";

const Rockets = () => {
  const [rocketValue, setRocketValue] = useState([]);

  useEffect(() => {
    rocketData();
  }, []);

  const rocketData = async () => {
    const response = await fetch(ROCKET_API);
    const JsonData = await response.json();
    setRocketValue(JsonData);
  };

  return (
    <div className="rockets-container">
      <div className="rockets-card-wrapper">
        {rocketValue.slice(1).map((i) => (
          <RocketMainCard key={i?.id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Rockets;

import React from "react";
import LaunchCard from "../LaunchCard/LaunchCard";
import "./Dashboard.css";
import LaunchFaciities from "../LaunchFacilities/LaunchFacilities";
import LaunchFacilitiesCard from "../LaunchFaciltiesCard/LaunchFaciltiesCard";
import { DUMMY_FACILITIES } from "../../constants";
import StarLink from "../StarLink/StarLink";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const launchState = useSelector((state) => state.Check.data);
  // const launchState = true;
  return (
    <div className="box-container">
      <div className="left-card-div">
        <LaunchCard upcoming={true} />
        <LaunchCard upcoming={false} />
      </div>
      <div className="right-card-div">
        <div
          className="box launch-facilities"
          style={{
            height: launchState ? "67vh" : "",
          }}
        >
          <LaunchFaciities />
        </div>
        <div className="box starlink">
          <StarLink />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

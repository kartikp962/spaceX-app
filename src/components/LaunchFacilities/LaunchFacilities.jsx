import React from "react";
// import { DUMMY_FACILITIES } from '../constant';
import upArrow from "../../assets/upArrow.png";
import downArrow from "../../assets/downArrow.png";
import { useDispatch, useSelector } from "react-redux";
import "./LaunchFacilities.css"; // Import the CSS file
import LaunchFacilitiesCard from "../LaunchFaciltiesCard/LaunchFaciltiesCard";
import { DUMMY_FACILITIES } from "../../constants";
import { checkLaunch } from "../../store/slices/checkSlice";

const LaunchFaciities = () => {
  const dispatch = useDispatch();
  const launchState = useSelector((state) => state.Check.data);

  console.log("launchSTate", launchState);

  return (
    <div
      className=""
      style={{
        marginTop: "-2rem",
      }}
    >
      <p className="launch-facilities-title">Launch facilities</p>
      <div className="facilities-list">
        {DUMMY_FACILITIES.slice(0, launchState ? 3 : 2).map((i) => {
          return <LaunchFacilitiesCard key={i?.id} data={i} />;
        })}
      </div>
      {launchState ? (
        <button
        className="button-container"
        onClick={() => dispatch(checkLaunch(false))}
      >
        <img src={upArrow} alt="upArrow" />
        <p className="button-text">less</p>
      </button>
      ) : (

        <button
          className="button-container"
          onClick={() => dispatch(checkLaunch(true))}
        >
          <img src={downArrow} alt="downArrow" />
          <p className="button-text">more</p>
        </button>
        
      )}
    </div>
  );
};

export default LaunchFaciities;

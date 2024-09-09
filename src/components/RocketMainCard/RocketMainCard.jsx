import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkPopup } from "../../store/slices/checkSlice";
import { popData } from "../../store/slices/popupDataSlice";
import "./RocketMainCard.css"; // Import the CSS file
import RocketCardDetails from "../RocketCardDetails/RocketCardDetails";
import ModalComp from "../ModalComp/ModalComp";

const RocketMainCard = ({ data }) => {
  const isPopupVisible = useSelector((store) => store.Check.popup);
  const { name, flickr_images, active } = data;
  const dispatch = useDispatch();
  console.log("isPopupVisible", isPopupVisible);

  return (
    <>
      <div
        className="rocket-main-card"
        onClick={() => {
          dispatch(checkPopup(true));
          dispatch(popData(data));
        }}
      >
        <p className="rocket-main-card-name">{name}</p>
        <div className="rocket-main-image-container">
          <img
            src={flickr_images[1]}
            alt="rocket-main-img"
            className="rocket-main-image"
          />
          {/* {active ? (
                        <div className='status-container status-active'>
                            <p className='status-label'>STATUS</p>
                            <p className='status-text'>Active</p>
                        </div>
                    ) : (
                        <div className='status-container status-in-development'>
                            <p className='status-label'>STATUS</p>
                            <p className='status-text'>In development</p>
                        </div>
                    )} */}
          <div
            className={`status-badge ${
              active ? "status-active" : "status-development"
            }`}
          >
            <p className="status-label">STATUS</p>
            <p className="status-text">
              {active ? "Active" : "In development"}
            </p>
          </div>
        </div>
      </div>
      {/* {isPopupVisible && <RocketCardDetails />} */}
      {isPopupVisible && <ModalComp />}
    </>
  );
};

export default RocketMainCard;

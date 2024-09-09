import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkPopup } from "../../store/slices/checkSlice";
import { popData } from "../../store/slices/popupDataSlice";
import "./RocketMainCard.css"; // Import the CSS file
import ModalComp from "../ModalComp/ModalComp";

const RocketMainCard = ({ data }) => {
  const isPopupVisible = useSelector((store) => store.Check.popup);
  const { name, flickr_images, active } = data;
  const dispatch = useDispatch();

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
      {isPopupVisible && <ModalComp />}
    </>
  );
};

export default RocketMainCard;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import cross from "../../assets/cross.png";
import Overview from "../Overview/Overview";
import Photos from "../Photos/Photos";
import { checkPopup } from "../../store/slices/checkSlice";
import "./ModalComp.css"; // Keeping the CSS import for styling

function ModalComp() {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector((store) => store.Check.popup);
  const data = useSelector((store) => store?.popupData?.data);
  const { name, description, flickr_images } = data;

  const [show, setShow] = useState(false);
  const [overviewCheck, setOverviewCheck] = useState(true);
  const [photoCheck, setPhotoCheck] = useState(false);

  const handleClose = () => {
    // setShow(false);
    dispatch(checkPopup(false));
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Modal using react-bootstrap */}
      <Modal show={isPopupVisible} onHide={() => null}>
        {/* <div
          className="rocket-card-details-overlay"
          onClick={handleClose}
        ></div> */}
        <Modal.Header>
          <div className="header">
            {photoCheck ? (
              <div className="header-content">
                <div className="modal-header-tabs">
                <p className="tab popup-header-title">{name}</p>
                </div>
                <img
                  src={cross}
                  alt="cross"
                  className="close-icon"
                  onClick={handleClose}
                />
              </div>
            ) : (
              <div className="header-content">
                <div className="modal-header-tabs">
                  <p className="tab popup-header-title">{name}</p>
                  <p
                    className="tab-overview"
                    onClick={() => {
                      setOverviewCheck(true);
                      setPhotoCheck(false);
                    }}
                  >
                    Overview
                  </p>
                  <p
                    className="tab-photos popup-header-subtitle-active"
                    onClick={() => {
                      setPhotoCheck(true);
                      setOverviewCheck(false);
                    }}
                  >
                    Photos
                  </p>
                </div>
                <img
                  src={cross}
                  alt="cross"
                  className="close-icon-alt"
                  onClick={handleClose}
                />
              </div>
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          {/* Content based on the tab selection */}
          {overviewCheck && (
            <Overview description={description} photo={flickr_images[1]} />
          )}
          {photoCheck && <Photos photos={flickr_images} />}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalComp;

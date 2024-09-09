import React, { useState } from 'react';
import ReactDOM from "react-dom";
import cross from "../../assets/cross.png";
import { checkPopup } from '../../store/slices/checkSlice';
import { useDispatch, useSelector } from 'react-redux';
// import './RocketCardDetails.css'; // Import the CSS file
import Overview from '../Overview/Overview';
import Photos from '../Photos/Photos';

const RocketCardDetails = () => {
    const data = useSelector((store) => store?.popupData?.data);
    const { name, description, flickr_images } = data;
    const dispatch = useDispatch();
    const [overviewcheck, setOverviewCheck] = useState(true);
    const [photoCheck, setPhotoCheck] = useState(false);

    return ReactDOM.createPortal(
        <>
            <div 
            className='rocket-card-details-overlay' 
            onClick={() => dispatch(checkPopup(false))}
            >

            </div>
            <div className='popup-container'>
                <div className='header'>
                    {photoCheck ? (
                        <div className='header-content'>
                            <div className='tabs'>
                                <p className='tab tab-overview' onClick={() => {
                                    setOverviewCheck(true);
                                    setPhotoCheck(false);
                                }}>Overview</p>
                                <p className='tab tab-photos' onClick={() => {
                                    setPhotoCheck(true);
                                    setOverviewCheck(false);
                                }}>Photos</p>
                            </div>
                            <img src={cross} alt="cross" className='close-icon' onClick={() => dispatch(checkPopup(false))} />
                        </div>
                    ) : (
                        <div className='header-content'>
                            <div className='tabs'>
                                <p className='tab popup-header-title'>{name}</p>
                                <p className='tab tab-overview' onClick={() => {
                                    setOverviewCheck(true);
                                    setPhotoCheck(false);
                                }}>Overview</p>
                                <p className='tab tab-photos popup-header-subtitle-active' onClick={() => {
                                    setPhotoCheck(true);
                                    setOverviewCheck(false);
                                }}>Photos</p>
                            </div>
                            <img src={cross} alt="cross" className='close-icon-alt' onClick={() => dispatch(checkPopup(false))} />
                        </div>
                    )}
                    {overviewcheck && <Overview description={description} photo={flickr_images[1]} />}
                    {photoCheck && <Photos photos={flickr_images} />}
                </div>
            </div>
        </>,document.querySelector(".popupBehind")
    );
};

export default RocketCardDetails;
